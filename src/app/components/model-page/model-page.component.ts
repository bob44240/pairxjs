import { Component,
  OnInit,
  Input,
  AfterViewInit,
  QueryList,
  ElementRef,
  ViewChild,
  ViewChildren } from '@angular/core';
import { MdTabNavBar } from '@angular/material';
import { TabLabelComponent } from '../tab-label-comp/tab-label.component';

declare var $: any;

@Component({
  selector: 'app-model-page',
  templateUrl: './model-page.component.html',
  styleUrls: ['./model-page.component.css']
})
export class ModelPageComponent implements OnInit, AfterViewInit {

    public selectedTab = 0;
    public _active = false;
    public index = 0;
    public appTabSet = [];
    public childTabSet: any;
    public inputText;
    public startPage = 0;
    public startGroupTab = 0;
    public startStateTab = 0;
    public startStrategiesTab = 0;
    public startTransitionsTab = 0;
    public startValuesTab = 0;
    public startSummariesTab = 0;
    public toggleButtonBar = true;
    public visited = [true, false, false, false, false, false, false, false];

    @ViewChildren(TabLabelComponent) tabLabelChildren: QueryList<TabLabelComponent>;
    @ViewChild('tabGroup') tabGroup;
    @ViewChild('slide0') sideNav;

    constructor() {
    }

    ngOnInit() {
    }
    
    // Input getter/setter: active.
    // do a start-up wake-up push.
    get active(): boolean {
      return this._active;
    }
    @Input()
    set active(value: boolean) {
      this._active = value;
      this.visited.forEach((x, i) => {
        if (i !== this.index) {
          this.visited[i] = false;
        } else {
          this.visited[i] = true;
        }
      });
    }

    public wakeUpPage() {
      this.startPage++;
    }

    public buttonToggle() {
      this.toggleButtonBar = !this.toggleButtonBar;
    }

    onQuickFilterChanged($event) {
      this.inputText = $event.target.value;
    }

    ngAfterViewInit() {
      // this is our own tab label set: app-tab-label-markup.
      this.appTabSet = this.tabLabelChildren.toArray();
      // this is a 'grab' for the *real* tab group children.
      this.childTabSet = this.tabGroup._tabs._results;
      // SFM 17NOV17... save old subway node disabled code.
      // enable/disable the *real* tab set... careful!
      //for (let index = 0; index < this.appTabSet.length; index++) {
      //  this.childTabSet[index].disabled = this.appTabSet[index].tabDisabled;
      //}
      $('#side-nav-tab > md-tab-header').hide();
    }

    selectionChange($event) {
      // wake the idiots up.
      if (this.appTabSet[$event.index].tabName === 'GROUPS') {
        this.startGroupTab++;
      } else if (this.appTabSet[$event.index].tabName === 'STATES') {
        this.startStateTab++;
      } else if (this.appTabSet[$event.index].tabName === 'STRATEGIES') {
        this.startStrategiesTab++;
      } else if (this.appTabSet[$event.index].tabName === 'TRANSITIONS') {
        this.startTransitionsTab++;
      }  else if (this.appTabSet[$event.index].tabName === 'VALUES') {
        this.startValuesTab++;
      }  else if (this.appTabSet[$event.index].tabName === 'SUMMARIES') {
        this.startSummariesTab++;
      }
      this.visited[$event.index] = true;
      // SFM 17NOV17... save old subway node disabled code.
      // leaving this tab... mark as complete.
      //this.appTabSet[this.index].tabImage = 'completed-node.svg';
      //if (this.appTabSet[this.index].tabType === 'left') {
      //  this.appTabSet[this.index].tabImage = 'completed-node-left.svg';
      //} else if (this.appTabSet[this.index].tabType === 'right') {
      //  this.appTabSet[this.index].tabImage = 'completed-node-right.svg';
      //}
      // now set the new tab label image.
      this.appTabSet[this.index].setTabImage();
      // this tab is no longer selected.
      this.appTabSet.forEach(x => x.tabSelect = false);
      // this tab is the new selection.
      this.appTabSet[this.index].tabSelect = true;
      if (this.index === 0) {
        this.appTabSet[this.index].selectedImage = '/assets/selected-left.svg';
      } else {
        this.appTabSet[this.index].selectedImage = '/assets/selected.svg';
      }
      // SFM 17NOV17... save old subway node disabled code.
      // enable the next tab... this will change.
      //if (this.index < this.appTabSet.length - 1) {
      //  this.appTabSet[this.index + 1].tabDisabled = false;
      //  this.childTabSet[this.index + 1].disabled = false;
      //}
    }

}
