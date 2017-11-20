import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { NgRedux, select } from 'ng2-redux';

import { IAppState } from '../../interfaces/model.interface';
import { GlobalDataAccessService } from '../../services/global-data-access.service';

@Component({
  selector: 'app-decision-page',
  templateUrl: 'decision-page.component.html',
  styleUrls: ['decision-page.component.scss']
})
export class DecisionPageComponent implements OnInit, OnDestroy {

  public subscriptions: Subscription[] = [];

  // All state transfer objects.
  @select() decision: Observable<any>;
  public theDecision: any;
  public radiodecision;
  // global data access...
  public gdaMessage: any = new Array();
  public gdaSubscription: Subscription;

  constructor(private ngRedux: NgRedux<IAppState>,
              private globalDAService: GlobalDataAccessService) {
    this.gdaSubscription = globalDAService
                              .listenAll()
                              .subscribe(broadcastMessage => this.OnNextGDAMessage(broadcastMessage));
  }
  
  public OnNextGDAMessage(broadcastMessage){
    // get the new GDA message array...
    this.gdaMessage = broadcastMessage.slice(0);
  }

  ngOnInit() {
    // Grab the state data.
    this.subscriptions.push(
      this.decision.subscribe(value => {
        this.theDecision = value;
      })
    );
    // setup locally.
    this.radiodecision = this.theDecision.ModelType;
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks.
    this.gdaSubscription.unsubscribe();
    this.subscriptions.forEach(x => x.unsubscribe());
  }
  
  public UpateSettings() {
    // Do all the settings...
    this.ngRedux.dispatch({
      type: 'UPDATE_DECISION',
      payload: this.theDecision
    });
  }

  public modelChange() {
    // Do them all at once.
    this.theDecision.ModelType = this.radiodecision;
    this.UpateSettings();
  }
}
