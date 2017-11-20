import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-test',
  templateUrl: './dialog-test.component.html',
  styleUrls: ['./dialog-test.component.scss']
})
export class DialogTestComponent implements OnInit {
  public sbRef: any = null;
  public title = 'fred'
  public subtitle = 'fred';
  public content = 'A bunch of content'
  public backgroundColor = 'lightgray'
  constructor() { }

  ngOnInit() {
  }
  closeDialog() {
    this.sbRef.dismiss();
  }
  cancelDialog() {

  }

}
