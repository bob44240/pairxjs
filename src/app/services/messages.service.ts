import { Injectable } from '@angular/core';
import { Message } from './message.class';
@Injectable()
export class MessagesService {
private _messages = [];
  constructor() {
    // Create fake messages
    this.createFakeMessages();

    //Get messages

    // Display messages
    localStorage.setItem('LastMessageReadId', '0');
  }

  createFakeMessages() {
    let temp = new Message('Server will be down for maintenance', 1, 'Warn');
    this._messages.push(temp);

    temp = new Message('Your license will expire next week', 2, 'Warn');
    this._messages.push(temp);

    temp = new Message('Sorry - your license has expired', 3, 'Error');
    this._messages.push(temp);

    temp = new Message('New version released', 4, 'Success');
    this._messages.push(temp);

    temp = new Message('Model exported', 5, 'Success');
    this._messages.push(temp);


  }
}
