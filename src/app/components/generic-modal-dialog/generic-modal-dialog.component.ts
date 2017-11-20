import { Component, OnInit } from '@angular/core';
import { MdDialogModule, MdDialogRef, MdDialog } from '@angular/material';
@Component({
  selector: 'app-generic-modal-dialog',
  templateUrl: './generic-modal-dialog.component.html',
  styleUrls: ['./generic-modal-dialog.component.scss']
})
export class GenericModalDialogComponent implements OnInit {

  public Title = '';
  public SubTitle = '';
  public Content = '';
  public On_Dismiss = '';
  constructor(public dialogRef: MdDialogRef<GenericModalDialogComponent>) { }

  ngOnInit() {
  }
  closeDialog(state) {

    this.dialogRef.close(null);

    // if (state === 'Yes') {
    //   this.dialogRef.close(null);
    // }
  }
}
