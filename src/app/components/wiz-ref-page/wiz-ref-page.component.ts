import { Component, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-wiz-ref-page',
  templateUrl: './wiz-ref-page.component.html',
  styleUrls: ['./wiz-ref-page.component.css']
})
export class WizRefPageComponent implements OnInit {
  @ViewChild('tabGroup') tabGroup;

  @Input()
  get active(): boolean {
    return this._activeTab;
  }
  set active(value: boolean) {
    this._activeTab = value;
  }

  public selectedTab = 0;
  private _activeTab = false;

  constructor() { }

  onSelect(event) {
    this.selectedTab = event.index;
  }

  ngOnInit() {
    this.tabGroup.selectedIndex = 0;
  }

}
