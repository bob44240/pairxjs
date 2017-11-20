import { Component, OnInit, Inject } from '@angular/core';
import {MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-group-attrib-add-modal',
  templateUrl: 'group-attrib-add-modal.component.html',
  styleUrls: ['group-attrib-add-modal.component.scss']
})
export class GroupAttribAddModalComponent implements OnInit {

  public newColumnDefs: any[];

  constructor(public dialogRef: MdDialogRef<GroupAttribAddModalComponent>, @Inject(MD_DIALOG_DATA) public data: any) {
    this.newColumnDefs = this.data;
  }
  
  acceptChanges(d) {
    this.dialogRef.close(d);
  }

  
  closeDialog(value) {
    this.dialogRef.close(value);
  }
  
  ngOnInit() {
  }

}
