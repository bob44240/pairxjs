import { Injectable } from '@angular/core';
import { Subject, Observable, Subscription } from 'rxjs/Rx';
import { Headers, Http } from '@angular/http';
import { FunctionList } from '../../data/r_function_list';
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from '../interfaces/model.interface';
import { SnackbarMessageService } from './snackbar-message.service';
import { debounce } from '../functions/debounce';
import { CalculationIndicatorComponent } from '../components/calculation-indicator/calculation-indicator.component';

declare var ocpu: any;

@Injectable()
export class ComputeService {

  private funcs = [];
  private serverURLs = [
    'https://ocpu1.heroapps.io/'
  ];
  private serverURL: string;
  public funcEmitter = new Subject<any[]>();
  private baseCaseRequest: Subscription;
  private makeBaseCaseRequest = <Function>debounce(
    function(body) {
      const msg = {
        type: 'COMPONENT',
        component: CalculationIndicatorComponent
      };
      this.snackbarMessageService.broadcast('receiver', msg);
      this.baseCaseRequest = this.http.post(
        this.serverURL + 'ocpu/library/heRomod/R/run_hero_model/json',
        body
      )
      .map(response => response.json())
      .subscribe(x => {
        this.ngRedux.dispatch({
          type: 'UPDATE_RESULTS',
          payload: x
        });
        this.snackbarMessageService.broadcast('receiver', {type: 'DISMISS'});
      }, e => {
        console.log(e);
        const payload = {
          type: 'error',
          text: e._body
        };
        this.snackbarMessageService.broadcast('receiver', payload);
      });
    },
    50,
    false
  );

  constructor(private http: Http, private ngRedux: NgRedux<IAppState>, private snackbarMessageService: SnackbarMessageService) {
    this.serverURL = this.serverURLs[Math.floor(Math.random() * this.serverURLs.length)];
    ocpu.seturl(this.serverURL + 'ocpu/library/heRomod/R');

    // Update the function list from server, only needs to be done once
    this.updateFunctionList()
        .first()
        .subscribe(funcs => {
          this.funcs = funcs;
          this.funcEmitter.next(this.funcs);
        });
  }

  public getFuncs() {
    return this.funcs;
  }

  public updateFunctionList(): Observable<any> {

    // This would perform an API call to server to retrieve list of functions
    return Observable.create(function(observer) {
      setTimeout(() => {
        observer.next(FunctionList);
      }, 500);
    });

  }

  public getDocHTML(pkg: string, fun: string): Observable<string> {
    return this.http
      .get(this.serverURL + 'ocpu/library/' + pkg + '/man/' + fun + '/html')
      .map(response => {
        const html = response.text();
        return html;
    });
  }

  public renderMd(text: string): Observable<string> {
    const model_obj = this.getModelObject();
    const self = this;
    const msg = {
      type: 'COMPONENT',
      component: CalculationIndicatorComponent
    };
    setTimeout(() => this.snackbarMessageService.broadcast('receiver', msg), 50);
    return Observable.create(function(observer) {
      const req = ocpu.call('run_markdown', {
        text : text,
        data: model_obj.tables
      }, session => {
        session
            .getFile('output.html')
            .fail(e => {
              console.log(e);
              const payload = {
                type: 'ERROR',
                text: e.responseText
              };
              self.snackbarMessageService.broadcast('receiver', payload);
            })
            .done(value => {
              const payload = {
                type: 'SUCCESS',
                text: 'Code Submitted'
              };
              observer.next(value);
              setTimeout(() => self.snackbarMessageService.broadcast('receiver', {type: 'DISMISS'}), 500);
            });
      });
    });
  }

  public runBaseCase(cost: string, effect: string) {
    const body = this.getModelObject();
    body.cost = cost;
    body.effect = effect;
    if (this.baseCaseRequest) {
      // If there is a request pending, unsubscribe from it
      // This will prevent an older but longer-running request
      // from replacing the results of a newer one.
      this.baseCaseRequest.unsubscribe();
    }
    this.makeBaseCaseRequest(body);
  }

  public getModelObject(): any {
    // Deep copy state
    const state = JSON.parse(JSON.stringify(this.ngRedux.getState()));

    // Reshape the data to match api spec
    const decision = state.decision.ModelType;
    let cycle_length;
    switch (state.settings.CycleLengthUnits) {
      case 'days':
        cycle_length = 1;
        break;
      case 'weeks':
        cycle_length = 7;
        break;
      case 'months':
        cycle_length = 365 / 12;
        break;
      default:
        cycle_length = 365;
    }
    const settings = {
      disc_cost: state.settings.DiscountRateCosts / 100,
      disc_eff: state.settings.DiscountRateOutcomes / 100,
      cycle_length: cycle_length,
      n_cycles: state.settings.CycleCount
    };
    const strategies = state.strategieshow
        .filter(x => x.on_off === 'On')
        .map(x => {
          return {
            name: x.name,
            desc: x.label
          };
        });
    const stratNames = strategies.map(x => x.name);
    stratNames.push('All');
    const states = state.states.map(x => {
      return {
        name: x.name,
        desc: x.label,
        prob: x.initial_probability,
        limit: x.limit
      };
    });
    const transitions = state.transitions
        .filter(x => stratNames.indexOf(x.strategy) !== -1)
        .map(x => {
          return {
            strategy: x.strategy,
            from: x.from,
            to: x.to,
            value: x.formula};
        });
    const health_values = state.values_health
        .filter(x => stratNames.indexOf(x.strategy) !== -1)
        .map(x => {
          return {
            name: x.name,
            description: x.label,
            strategy: x.strategy,
            state: x.state,
            value: x.formula
          };
        });
    const econ_values = state.values_economic
        .filter(x => stratNames.indexOf(x.strategy) !== -1)
        .map(x => {
          return {
            name: x.name,
            description: x.label,
            strategy: x.strategy,
            state: x.state,
            value: x.formula
          };
        });
    const health_summaries = state.summaries_health.map(x => {
      return {
        name: x.outcome,
        description: x.label1,
        value: x.value
      };
    });
    const econ_summaries = state.summaries_economic.map(x => {
      return {
        name: x.outcome,
        description: x.label1,
        value: x.value
      };
    });
    const variables = state.formulas.map(x => {
      return {
        name: x.name,
        desc: x.descripton,
        value: x.formula
      };
    });

    const varnames = variables.map(x => x.name);

    state.overrides.forEach(x => {
      const index = varnames.indexOf(x.name);
      if (index !== -1) {
        variables[index].value = x.value;
      }
    });

    const tables = {};
    state.tables.forEach(x => {
      let data = [];
      if (x.data.length > 0 && x.data[0].length > 0) {
        const headers = x.data[0];
        x.data.splice(1)
              .forEach(row_data => {
                const empty = row_data.reduce((empt, nxt) => {
                  return empt && (nxt === '');
                }, true);
                if (!empty) {
                  const row = {};
                  headers.forEach((column, index) => {
                    if (headers[index] !== '') {
                      row[column] = row_data[index];
                    }
                  });
                  data.push(row);
                }
              });
      } else {
        // Dummy data just in case, should never actually be required
        data = [{a: 1, b: 2}];
      }
      tables[x.name] = data;
    });
    const scripts = {};
    state.scripts.forEach(x => {
      scripts[x.name] = x.text;
    });
    return {
      decision: decision,
      settings: settings,
      strategies: strategies,
      states: states,
      transitions: transitions,
      hvalues: health_values,
      evalues: econ_values,
      hsumms: health_summaries,
      esumms: econ_summaries,
      variables: variables,
      tables: tables,
      scripts: scripts
    };
  }
}
