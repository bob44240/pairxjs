import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-list',
  templateUrl: './update-list.component.html',
  styleUrls: ['./update-list.component.scss']
})
export class UpdateListComponent implements OnInit {
  public updates = [];
  constructor() {
    //this.createFakeUpdateList();
    console.log(this.updates);
  }

  ngOnInit() {}

  // Create some fake data

}
