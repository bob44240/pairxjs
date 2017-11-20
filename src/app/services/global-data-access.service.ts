import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NgRedux, select } from 'ng2-redux';
import { Subject } from 'rxjs/Subject';

import {IAppState} from '../interfaces/model.interface';


@Injectable()
export class GlobalDataAccessService {

  // defined as... export declare class Subject<T> extends Observable<T>
  // implements ISubscription containing an arry of observers.
  private gdaSubject = new Subject<any>();
  // we need access to the 'decision' data.
  @select() decision: Observable<any>;
  public theDecision: any;
  // we need access to the 'groupinfo' data.
  @select() groupinfo: Observable<any>;
  public theGroups: any;
  // global data access...
  public gdaMessage: any = new Array();
  public decisionMessage: any = new Array();
  public groupsMessage: any = new Array();

  constructor(private ngRedux: NgRedux<IAppState>) {
     // subscribe to the 'decision' data.
    this.decision.subscribe(value => {
      this.decisionHandler(value);
    });
    // subscribe to the 'groupinfo' data.
    this.groupinfo.subscribe(value => {
      this.groupsHandler(value);
    });
  }
  
  private decisionHandler (value) {
    // save the new 'decision' data.
    this.theDecision = value;
    // build the 'decision' messsage...
    this.decisionMessage = [];
    this.decisionMessage.push({
      group: 'decision',
      type: 'ModelType',
      value: this.theDecision.ModelType
    });
    // tell'em all...
    this.broadcastAll();
  }

  private groupsHandler (value) {
    this.theGroups = value;
    // build the 'groups' messsage...
    this.groupsMessage = [];
    this.groupsMessage.push({
      group: 'groups',
      type: 'PopulationType',
      value: this.theGroups.PopulationType
    });
    this.broadcastAll();
  }

  // broadcast hook...
  public broadcastAll() {
    // create the message...
    this.gdaMessage = [];
    this.gdaMessage = this.gdaMessage.concat(this.decisionMessage);
    this.gdaMessage = this.gdaMessage.concat(this.groupsMessage);
    // tell the world...
    this.gdaSubject.next(this.gdaMessage);
  }
  
  //Listener hook...
  public listenAll(): Observable<any> {
    setTimeout(function(){
      this.broadcastAll();
    }.bind(this), 500);
    return this.gdaSubject.asObservable();
  }
  
  // dead message broadcast... clear the pipe.
  public clearChannel() {
      this.gdaSubject.next();
  }
}
