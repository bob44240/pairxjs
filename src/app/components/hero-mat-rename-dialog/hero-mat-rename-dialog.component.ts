import { Component, OnInit, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-hero-mat-rename-dialog',
  templateUrl: './hero-mat-rename-dialog.component.html',
  styleUrls: ['./hero-mat-rename-dialog.component.scss']
})
export class HeroMatRenameDialogComponent implements OnInit {
  public dialogLabel = '';
  public inputfieldLabel = '';
  public tableName = '';
  public OKButton = '';

  public placeholder = '';

  constructor(public dialogRef: MdDialogRef<HeroMatRenameDialogComponent>, @Inject(MD_DIALOG_DATA) public data: any) { };

  ngOnInit() { };

  closeDialog(state) {
    if (state === 'Yes') {
      this.dialogRef.close({ name: this.tableName });
    }
    if (state === 'Cancel') {
      this.dialogRef.close({ name: '' });
    }
  }
}
