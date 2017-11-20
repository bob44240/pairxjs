import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-wizard-sidenav',
  templateUrl: './wizard-sidenav.component.html',
  styleUrls: ['./wizard-sidenav.component.scss']
})
export class WizardSidenavComponent {

  @Input() active = 0;
  @Output() selection = new EventEmitter<number>();

  constructor() { }

  buttonClicked(index: number) {
    this.selection.emit(index);
  }

}
