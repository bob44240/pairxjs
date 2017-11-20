import { Component,
         Input,
         ElementRef,
         ViewChild,
         ViewContainerRef
 } from '@angular/core';
import { GlobalDataAccessService } from '../../services/global-data-access.service';
declare var $: any;

@Component({
  selector: 'app-summaries-page',
  template: `
  <div style="background-color: white;">
    <div class="flex-row-container model-editor-tab mat-elevation-z6">
      <span>
        Summaries
      </span>
      <div class="flex-item-grow" style="height: 100%;">
        <md-tab-group class="inline-tab-container" [(selectedIndex)]="index"
                                            *ngIf="active"
                                            style="padding-right: 30px;">
          <md-tab label="Health"></md-tab>
          <md-tab label="Economic"></md-tab>
        </md-tab-group>
      </div>
      <div class="flex-item-fixed" style="padding-top: 10px;">      
        <input (keyup)="onQuickFilterChanged($event)"
              [(ngModel)]="inputFilter" 
              style="float:right;color:#000;font-size:20px;
                      height:24px;margin-top:5px;margin-right:10px;"
              placeholder="Type text to filter..." />
        <img src="/assets/filter.svg"
            alt="filter"
            style="float:right;margin-top:5px;"
            title="filter!"
            height="24px" width="auto">
      </div>
    </div>
    <md-tab-group id="summariesHiddenTab" [(selectedIndex)]="index"
                  (selectChange)="selectionChange($event)">
      <md-tab label="Health">
        <app-summaries-health-page #health [active]="_active && index === 0"
                                        [filterText]="inputTextHealth"
                                        [toggleButtonBar]="toggleButtonBarHealth">
        </app-summaries-health-page>
      </md-tab>
      <md-tab label="Economic">
        <app-summaries-economic-page #economic [active]="_active && index === 1"
                                          [filterText]="inputTextEconomic"
                                          [toggleButtonBar]="toggleButtonBarEconomic">
        </app-summaries-economic-page>
      </md-tab>
    </md-tab-group>
  </div>
  `,
  styles: [`
    img {
      -moz-transition: all 0.3s;
      -webkit-transition: all 0.3s;
      transition: all 0.3s;
    }

    img:hover {
      -moz-transform: scale(1.1);
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
  `]
})
// main class starts here...
export class SummariesPageComponent {
  // @Input getter/setter variables... see below.
  private _active = false;
  private init = false;
  // keep track of the tabs.
  public index = 0;
  public startHealthTab = 0;
  public startEconomicTab = 0;
  public toggleButtonBar = true;
  public inputTextHealth;
  public inputTextEconomic;
  // keep track of the text in the grid filter...
  public inputFilter = '';
  public inputFilterHealth = '';
  public inputFilterEconomic = '';
  // keep track of the button bar to toggle...
  public toggleButtonBarHealth = true;
  public toggleButtonBarEconomic = true;
  // get access to our childern...
  @ViewChild('health') healthTab: ElementRef;
  @ViewChild('economic') economicTab: ElementRef;

  constructor() { }

  // Input getter/setter: active.
  // do a start-up wake-up push.
  get active(): boolean {
    return this._active;
  }
  @Input()
  set active(value: boolean) {
    this._active = value;
    if (this.active && !this.init) {
      $('#summariesHiddenTab > .mat-tab-header').hide();
      this.init = true;
    }
    if (this._active) {
      // 1st time thru... give'em a slap.
      if (this.startHealthTab === 0) {
        this.startHealthTab++;
      }
    }
  }


  public buttonToggle() {
    //get the right tab...
    if (this.index === 0) {
      this.toggleButtonBarHealth = !this.toggleButtonBarHealth;
    } else {
      this.toggleButtonBarEconomic = !this.toggleButtonBarEconomic;
    }
  }

  onQuickFilterChanged($event) {
    //get the right tab...
    if (this.index === 0) {
      this.inputTextHealth = $event.target.value;
    } else {
      this.inputTextEconomic = $event.target.value;
    }
  }

  selectionChange($event) {
    // wake the idiots up.
    if ($event.index === 0) {
      this.startHealthTab++;
      // save the other tab's filter...
      this.inputFilterEconomic = this.inputFilter;
      // restore this tabs filter...
      this.inputFilter = this.inputFilterHealth;
    } else if ($event.index === 1) {
      this.startEconomicTab++;
      // save the other tab's filter...
      this.inputFilterHealth = this.inputFilter;
      // restore this tabs filter...
      this.inputFilter = this.inputFilterEconomic;
    }
  }
}
