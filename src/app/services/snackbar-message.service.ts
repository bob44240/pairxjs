import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

interface Message {
  type: string;
  payload: any;
}

type MessageCallback = (payload: any) => void;

@Injectable()
export class SnackbarMessageService {
  private handler = new Subject<Message>();

  constructor() { }

  broadcast(type: string, payload: any) {
    this.handler.next({ type, payload });
  }

  subscribe(type: string, callback: MessageCallback): Subscription {
    return this.handler
      .filter(message => message.type === type)
      .map(message =>
      {
        return message.payload;
      })
      .subscribe(callback);
  }
}
