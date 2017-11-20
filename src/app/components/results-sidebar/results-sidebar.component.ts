import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-results-sidebar',
  templateUrl: './results-sidebar.component.html',
  styleUrls: ['./results-sidebar.component.scss']
})
export class ResultsSidebarComponent implements OnInit {

  @Output() onOpen = new EventEmitter();
  @Output() onOpenFinish = new EventEmitter();
  public _open = true;

  constructor() { }

  ngOnInit() {
  }

  get open(): boolean {
    return this._open;
  }
  @Input()
  set open(value: boolean) {
    this._open = value;
    this.onOpen.emit(this._open);
  }

  toggle() {
    this.open = !this.open;
  }

  openFinish($event) {
    this.onOpenFinish.emit($event);
  }

}
