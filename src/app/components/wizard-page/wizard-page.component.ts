import { Component,
         OnInit,
         AfterViewInit,
         QueryList,
         ElementRef,
         ViewChild,
         ViewChildren } from '@angular/core';
import { MdTabNavBar } from '@angular/material';
import { TabLabelComponent } from '../tab-label-comp/tab-label.component';
import { ModelPageComponent } from '../model-page/model-page.component';
import { WizardSidenavComponent } from '../wizard-sidenav/wizard-sidenav.component';

declare var $: any;

@Component({
  selector: 'app-wizard-page',
  templateUrl: './wizard-page.component.html',
  styleUrls: ['./wizard-page.component.scss']
})
// main class starts here...
export class WizardPageComponent implements OnInit, AfterViewInit {

  public selectedTab = 0;

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
  // control the left sidenav content...
  public lockOut = false;
  public activePageIndex = -1;
  public currentClick = -1;
  public slideZero: boolean[] = new Array(false, false, false, false, false,
                                          false, false, false, false, false);
  @ViewChildren(TabLabelComponent) tabLabelChildren: QueryList<TabLabelComponent>;
  @ViewChild('tabGroup') tabGroup;
  @ViewChild('slide0') sideNav;

  constructor() {
  }

  ngOnInit() {
  }

  openTab(i: number) {
    this.selectedTab = i;
    // dumb way to do it...
    if(i === 1) {
      this.startPage++;
    }
  }

  ngAfterViewInit() {
    $('#side-nav-tab > md-tab-header').hide();
  }

}
