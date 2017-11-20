import { Component, OnInit } from '@angular/core';
import {MdDialogRef} from '@angular/material';
@Component({
  selector: 'app-hero-mat2-modal-dialog',
  templateUrl: './hero-mat2-modal-dialog.component.html',
  styleUrls: ['./hero-mat2-modal-dialog.component.scss']
})
export class HeroMat2ModalDialogComponent implements OnInit {
  public Title = '';
  constructor(public dialogRef: MdDialogRef<HeroMat2ModalDialogComponent>) { }
  ngOnInit() {
  }
}
