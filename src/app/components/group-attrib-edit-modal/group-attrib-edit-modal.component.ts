import { Component, OnInit, Inject } from '@angular/core';
import {MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-group-attrib-edit-modal',
  templateUrl: 'group-attrib-edit-modal.component.html',
  styleUrls: ['group-attrib-edit-modal.component.scss']
})
export class GroupAttribEditModalComponent implements OnInit {
  
  public columnLabels: any[];
  public showHide: false;
  public newColumnDefs: any[];

  constructor(
    public dialogRef: MdDialogRef<GroupAttribEditModalComponent>,
    @Inject(MD_DIALOG_DATA) public data: any) {
      this.newColumnDefs = this.data;
    }

  acceptChanges(action, d) {
    console.log(action, d);
    this.dialogRef.close({action, d});
  }

  deleteAttribute(i) {
    this.acceptChanges('del', i);
  }

  renameAttribute(i, v) {
    this.acceptChanges('ren', {i, v})
    //this.data[i].name = v;
  }

  ngOnInit() {
  }

}
