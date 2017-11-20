import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { NgRedux, select } from 'ng2-redux';

import { IAppState } from '../../interfaces/model.interface';
import { CountryPickerService } from 'angular2-countrypicker';
import { GlobalDataAccessService } from '../../services/global-data-access.service';

/**
 * Display/edit system settings in wizard view
 *
 * This component displays model information in the settings tab of the wizard view.
 * It allows the user to edit system wide model parameters.
 *
 * @export
 * @class WizSettingPageComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-wiz-setting-page',
  template: `
    <div class="model-editor-tab mat-elevation-z6">
        <span>
          Settings
        </span>
    </div>
    <div class='heRo-card-container-flush heRo-flex-row'
         style="overflow-y:scroll;border-bottom:solid thin #9d9d9d;">
      <div class="heRo-col-7-5 heRo-mobile-col-24 column-height"
           style="border-right:solid thin #9d9d9d;">
        <div style="font-size:125%;margin:25px 0px 0px 60px;">
          Country
          <md-select placeholder="Country" class="heRo-input"
                     [(ngModel)]="countrySelect"
                     style="width:90% !important;margin:18px 0px 0px 0px;"
                     (change)="modelChange($event)">
            <md-option *ngFor="let country of countries" [value]="country.name.common">
              {{country.name.common}}
            </md-option>
          </md-select>
        </div>
        <div style="font-size:125%;margin:25px 0px 0px 60px;">
          Language
          <md-select placeholder="Country" class="heRo-input"
                     [(ngModel)]="languageSelect"
                     style="width:90% !important;margin:18px 0px 0px 0px;"
                     (change)="modelChange($event)">
            <md-option *ngFor="let language of languages" [value]="language.id">
              {{language.name}}
            </md-option>
          </md-select>
        </div>
      </div>
      <div class="heRo-col-7-5 heRo-mobile-col-24 column-height"
           style="border-right:solid thin #9d9d9d;">
        <div class="heRo-card-list">
          <div style="font-size:125%;margin:25px 0px 0px 60px;">
            Discount Rate
            <div>
              <md-input-container class="heRo-input"
                                  style="width:50% !important;margin:18px 0px 0px 0px;">
                <input mdInput required type="number"
                       min="0" max="100"
                       placeholder="Outcomes"
                       [(ngModel)]="outcomes"
                       (blur)="modelChange($event)">
              </md-input-container>
              <span>%</span>
            </div>
            <div>
              <md-input-container class="heRo-input"
                                  style="width:50% !important;margin:18px 0px 0px 0px;">
                <input mdInput required type="number"
                       min="0" max="100"
                       placeholder="Costs"
                       [(ngModel)]="costs"
                       (blur)="modelChange($event)">
              </md-input-container>
              <span>%</span>
            </div>
          </div>
        </div>
      </div>
      <div class="heRo-col-7-5 heRo-mobile-col-24 column-height">
        <div class="heRo-card-list">
          <div style="font-size:125%;margin:25px 0px 0px 60px;">
            Cycles and Timeframes
            <div>
              <div style="float:left;">
                <md-input-container class="heRo-input"
                                    style="width:125% !important;
                                     margin:18px 0px 0px 0px;">
                  <input mdInput required type="number"
                         min="1" max="1000"
                         placeholder="Cycle Length"
                         [(ngModel)]="cyclelength"
                         (blur)="calculateCycleCount(true)">
                </md-input-container>
              </div>
              <div style="float:right;">
                <md-select placeholder="Unit" class="heRo-input"
                           style="width:100% !important;
                                  margin:18px 0px 0px 0px;"
                           [(ngModel)]="cyclelengthSelect"
                           (change)="calculateCycleCount(true)">
                  <md-option *ngFor="let time of timeUnits" [value]="time.id">
                    {{time.name}}
                  </md-option>
                </md-select>
              </div>
            </div>
            <div style="clear:left;clear:right;">
              <div style="float:left;">
                <md-input-container class="heRo-input"
                                    style="width:125% !important;
                                     margin:18px 0px 0px 0px;">
                  <input mdInput required type="number"
                         min="1" max="1000"
                         placeholder="Timeframe"
                         [(ngModel)]="timeframe"
                         (blur)="calculateCycleCount(true)">
                </md-input-container>
              </div>
              <div style="float:right;">
                <md-select placeholder="Unit" class="heRo-input"
                           style="width:100% !important;
                                  margin:18px 0px 0px 0px;"
                           [(ngModel)]="timeframeSelect"
                           (change)="calculateCycleCount(true)">
                  <md-option *ngFor="let time of timeUnits" [value]="time.id">
                    {{time.name}}
                  </md-option>
                </md-select>
              </div>
            </div>
            <div style="margin-top:88px;font-size:80%;">
              Cycle Count:&nbsp;{{cycleCount}}
            </div>
            <div [ngStyle]="{'color': cyclestatusColor}" style="font-size:80%;">
              {{cycleStatus}}
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    @media (min-width: 1001px) {
      .column-height {
        height: 1024px;
      }
    }

    @media (max-width: 1000px) {
      .column-height {
        height: auto;
        padding-bottom: 20px;
        border-bottom: solid thin #9d9d9d;
      }
    }
  `]
})
export class WizSettingPageComponent implements OnInit {

  public subscriptions: Subscription[] = [];

  // All state transfer objects.
  @select() settings$: Observable<any>;
  public allSettings: any;
  public countries: any[];
  // UI ng-model access items.
  public countrySelect;
  public languageSelect;
  public outcomes;
  public costs;
  public timeframeSelect;
  public timeframe;
  public cyclelengthSelect;
  public cyclelength;
  // local status information.
  public cycleCount;
  public cycleStatus = 'Unit selection status: Good';
  public cyclestatusColor = '#090';

  public ModelStructure: any[] = new Array(
    {id: 'Markov Cohort', name: 'Markov Cohort'},
    {id: 'Partitioned Survival', name: 'Partitioned Survival'}
  );
  public timeUnits: any[] = new Array(
    {id: 'days', name: 'Days', type: 0, factor: [1, 7, 30, 365]},
    {id: 'weeks', name: 'Weeks', type: 1, factor: [0, 1, 4, 52]},
    {id: 'months', name: 'Months', type: 2, factor: [0, 0, 1, 12]},
    {id: 'years', name: 'Years', type: 3, factor: [0, 0, 0, 1]}
  );
  public languages: any[] = new Array(
    {id: 'chinese', name: 'Chinese'},
    {id: 'spanish', name: 'Spanish'},
    {id: 'english', name: 'English (US)'},
    {id: 'hindi', name: 'Hindi'},
    {id: 'arabic', name: 'Arabic'},
    {id: 'portuguese', name: 'Portuguese'},
    {id: 'bengali', name: 'Bengali'},
    {id: 'russian', name: 'Russian'},
    {id: 'japanese', name: 'Japanese'},
    {id: 'javanese', name: 'Javanese'}
  );
  // global data access...
  public gdaMessage: any = new Array();
  public gdaSubscription: Subscription;

  constructor(private ngRedux: NgRedux<IAppState>,
              private countryPickerService: CountryPickerService,
              private globalDAService: GlobalDataAccessService) {
    this.countryPickerService.getCountries().subscribe(countries => this.countries = countries);
    this.gdaSubscription = globalDAService
                              .listenAll()
                              .subscribe(broadcastMessage => this.OnNextGDAMessage(broadcastMessage));
  }
  
  public OnNextGDAMessage(broadcastMessage){
    // get the new GDA message array...
    this.gdaMessage = broadcastMessage.slice(0);
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks.
    this.gdaSubscription.unsubscribe();
    this.subscriptions.forEach(x => x.unsubscribe());
  }
  
  ngOnInit() {
    // Grab the state data.
    this.subscriptions.push(
      this.settings$.subscribe(value => {
        this.allSettings = value;
        this.UpdateAllSettins();
      })
    );
  }
  
  public UpdateAllSettins() {
    // (re)-initialize all of the ng-model values.
    this.countrySelect = this.allSettings.Country;
    this.languageSelect = this.allSettings.Language;
    this.outcomes = this.allSettings.DiscountRateOutcomes;
    this.costs = this.allSettings.DiscountRateCosts;
    this.timeframe = this.allSettings.ModelTimeframe;
    this.timeframeSelect = this.allSettings.ModelTimeframeUnits;
    this.cyclelength = this.allSettings.CycleLength;
    this.cyclelengthSelect = this.allSettings.CycleLengthUnits;
    // check the cycle count units status.
    this.calculateCycleCount(false);
  }

  public calculateCycleCount(update) {
    // get the array element for the timeframeSelect.
    const timeframeElement = this.timeUnits.filter(function (element) {
      return element.id === this.timeframeSelect;
    }.bind(this));
    // get the array element for the cyclelengthSelect.
    const cyclelengthElement = this.timeUnits.filter(function (element) {
      return element.id === this.cyclelengthSelect;
    }.bind(this));
    // timeframeSelect cannot be less than cyclelengthSelect.
    if (timeframeElement['0'].type < cyclelengthElement['0'].type) {
      this.cycleStatus = 'Unit selection status: Error';
      this.cyclestatusColor = '#900';
      this.cycleCount = 0;
      return;
    }
    // validate the cycle length.
    if (this.cyclelength < 1) {
      this.cycleStatus = 'Cycle Length cannot be less than 1';
      this.cyclestatusColor = '#900';
      this.cycleCount = 0;
      this.cyclelength = 1;
      return;
    }
    // validate the timeframe.
    if (this.timeframe < 1) {
      this.cycleStatus = 'Timeframe cannot be less than 1';
      this.cyclestatusColor = '#900';
      this.cycleCount = 0;
      this.timeframe = 1;
      return;
    }
    // we are ok to proceed.
    this.cycleStatus = 'Unit selection status: Good';
    this.cyclestatusColor = '#090';
    // get the unit factor.
    const factor = cyclelengthElement['0'].factor[timeframeElement['0'].type];
    // do it...
    this.cycleCount = (factor * this.timeframe) / this.cyclelength;
    // do the update?
    if (update) {
      this.modelChange();
    }
  }

  public modelChange() {
    // Do them all at once.
    this.allSettings.Country = this.countrySelect;
    this.allSettings.Language = this.languageSelect;
    this.allSettings.DiscountRateOutcomes = this.outcomes;
    this.allSettings.DiscountRateCosts = this.costs;
    this.allSettings.ModelTimeframe = this.timeframe;
    this.allSettings.ModelTimeframeUnits = this.timeframeSelect;
    this.allSettings.CycleLength = this.cyclelength;
    this.allSettings.CycleLengthUnits = this.cyclelengthSelect;
    this.allSettings.CycleCount = this.cycleCount;
    this.UpateSettings();
  }

  public UpateSettings() {
    // Do all the settings...
    this.ngRedux.dispatch({
      type: 'UPDATE_SETTINGS',
      payload: this.allSettings
    });
  }
}
