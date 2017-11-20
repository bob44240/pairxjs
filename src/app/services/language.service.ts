import { Injectable } from '@angular/core';
import { ComputeService } from './compute.service';
import { Subject } from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from '../interfaces/model.interface';
declare var ace: any;

@Injectable()
export class LanguageService {
  // All state transfer objects.
  @select() formulas: Observable<any>;
  @select() tables: Observable<any>;
  @select() values_health: Observable<any>;
  @select() values_economic: Observable<any>;

  private init = false;

  private names: any[] = [];
  private funcs: any[] = [];
  private heemod: any[] = [
    {name: 'cycle_length_days', description: 'Length of the model cycle in days', vartype: 'HEEMOD'},
    {name: 'cycle_length_weeks', description: 'Length of the model cycle in weeks', vartype: 'HEEMOD'},
    {name: 'cycle_length_months', description: 'Length of the model cycle in months', vartype: 'HEEMOD'},
    {name: 'cycle_length_years', description: 'Length of the model cycle in years', vartype: 'HEEMOD'},
    {name: 'model_time', description: 'Number of cycles since start of model', vartype: 'HEEMOD'},
    {name: 'model_day', description: 'Days elapsed since start of the model', vartype: 'HEEMOD'},
    {name: 'model_week', description: 'Weeks elapsed since start of the model', vartype: 'HEEMOD'},
    {name: 'model_month', description: 'Months elapsed since start of the model', vartype: 'HEEMOD'},
    {name: 'model_year', description: 'Years elapsed since start of the model', vartype: 'HEEMOD'},
    {name: 'state_time', description: 'Number of cycles since state entry', vartype: 'HEEMOD'},
    {name: 'state_day', description: 'Days elapsed since state entry', vartype: 'HEEMOD'},
    {name: 'state_week', description: 'Weeks elapsed since state entry', vartype: 'HEEMOD'},
    {name: 'state_month', description: 'Months elapsed since state entry', vartype: 'HEEMOD'},
    {name: 'state_year', description: 'Years elapsed since state entry', vartype: 'HEEMOD'}
  ];
  private groupAttributes: any[] = [];
  private evalues: any[] = [];
  private hvalues: any[] = [];
  private esumms: any[] = [];
  private hsumms: any[] = [];
  private vars: any[] = [];
  private tableData: any[] = [];
  private namespace: any = {};

  private modePrototype: any;
  private mode: any;

  public langEmitter = new Subject<any[]>();
  public namesEmitter = new Subject<any[]>();

  constructor(private computeService: ComputeService, private ngRedux: NgRedux<IAppState>) {

    // Update Function List
    computeService.funcEmitter.subscribe(funcs => {
      this.funcs = funcs.map(x => {
        x.func = true;
        x.vartype = 'Function';
        return x;
      });
      this.concatNames();
      this.namesEmitter.next(this.names);
    });

    // Update variables list
    this.formulas.subscribe(formulas => {
      this.vars = formulas.map(x => {
        return {
          name: x.name,
          desc: x.description,
          func: false,
          vartype: 'Variable'
        };
      });
      this.concatNames();
      this.namesEmitter.next(this.names);
      this.updateLanguage();
    });

    // Update tables list
    this.tables.subscribe(tableArray => {
      this.tableData = tableArray.map(x => {
        return {
          name: x.name,
          desc: '',
          func: false,
          vartype: 'Table'
        };
      });
      this.concatNames();
      this.namesEmitter.next(this.names);
      this.updateLanguage();
    });

    // Update health values list list
    this.values_health.subscribe(values => {
      const keys = [];
      this.hvalues = values.filter(x => {
        let ret = true;
        if (keys.indexOf(x.name) !== -1) {
          ret = false;
        } else {
          keys.push(x.name);
        }
        return ret;
      }).map(x => {
        return {
          name: x.name,
          desc: x.label,
          func: false,
          vartype: 'Health Value'
        };
      });
      this.concatNames();
      this.namesEmitter.next(this.names);
      this.updateLanguage();
    });

    // Update economic values list list
    this.values_economic.subscribe(values => {
      const keys = [];
      this.evalues = values.filter(x => {
        let ret = true;
        if (keys.indexOf(x.name) !== -1) {
          ret = false;
        } else {
          keys.push(x.name);
        }
        return ret;
      }).map(x => {
        return {
          name: x.name,
          desc: x.label,
          func: false,
          vartype: 'Economic Value'
        };
      });
      this.concatNames();
      this.namesEmitter.next(this.names);
      this.updateLanguage();
    });

    // Subscribe to updates from store

    // Setup R-Language Definition
    ace.config.set('basePath', '/src');
    this.modePrototype = ace.require('ace/mode/hero').Mode;
    this.init = true;
    this.updateLanguage();
  }

  private updateLanguage() {
    if (this.init) {
      this.namespace = {
        heemod: this.heemod,
        groupAttr: this.groupAttributes,
        hvalue: this.hvalues,
        evalue: this.evalues,
        var: this.vars,
        table: this.tableData
      };

      this.mode = new this.modePrototype(this.namespace);
      this.mode.v = Date.now();
      this.langEmitter.next(this.mode);
    }
  }

  public getMode() {
    return this.mode;
  }

  public getNames() {
    return this.names;
  }

  public concatNames() {
    this.names = this.heemod.concat(
      this.vars,
      this.groupAttributes,
      this.hvalues,
      this.evalues,
      this.tableData,
      this.funcs
    );
  }

}
