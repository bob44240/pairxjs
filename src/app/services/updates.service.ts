import { Injectable } from '@angular/core';
import {UpdateItem} from './update-list.class';

@Injectable()
export class UpdatesService {

  public updates
  constructor() { }

  createFakeUpdateList() {
    let temp = new UpdateItem('Even Better Stuff', '1.2', '2/1/17', null);
    temp.add('Taller');
    temp.add('Heavier and harder to move');
    temp.add('Much bolder');
    this.updates.push(temp);

    temp = new UpdateItem('Better Stuff', '1.1', '1/1/17', null);
    temp.add('Improved color sizing');
    temp.add('Lighter and easier to carry');
    temp.add('Much friendlier');
    this.updates.push(temp);
  }
}
