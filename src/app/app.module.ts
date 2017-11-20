import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgGridModule } from 'ag-grid-angular/main';
import { CountryPickerModule } from 'angular2-countrypicker';
import {  MdAutocompleteModule,
          MdButtonModule,
          MdButtonToggleModule,
          MdCardModule,
          MdCheckboxModule,
          MdChipsModule,
          MdCoreModule,
          MdDatepickerModule,
          MdDialogModule,
          MdGridListModule,
          MdIconModule,
          MdInputModule,
          MdListModule,
          MdMenuModule,
          MdNativeDateModule,
          MdProgressBarModule,
          MdProgressSpinnerModule,
          MdRadioModule,
          MdRippleModule,
          MdSelectModule,
          MdSidenavModule,
          MdSliderModule,
          MdSlideToggleModule,
          MdSnackBarModule,
          MdTabsModule,
          MdToolbarModule,
          MdTooltipModule } from '@angular/material';
import { NgReduxModule, NgRedux } from 'ng2-redux';
import { DragulaModule } from 'ng2-dragula';
import { TagInputModule } from 'ng2-tag-input';
import { AppRoutingModule } from './app-routing.module';
import { rootReducer } from './redux/reducers';
import { IAppState } from './interfaces/model.interface';

import { AppComponent } from './app.component';
import { FormulaBarComponent } from './components/formula-bar/formula-bar.component';
import { GlobalDataAccessService } from './services/global-data-access.service';
import { ComputeService } from './services/compute.service';
import { LanguageService } from './services/language.service';
import { FormulaEditorService } from './services/formula-editor.service';
import { LandingPageComponent } from './landingpage/landing-page.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TabLabelComponent } from './components/tab-label-comp/tab-label.component';
import { WizardPageComponent } from './components/wizard-page/wizard-page.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { WizSettingPageComponent } from './components/wiz-setting-page/wiz-setting-page.component';
import { VariablesPageComponent } from './components/variables-page/variables-page.component';
import { MdFormulaBarConnectComponent } from './components/grid-cell-components/md-formula-bar-connect.component';
import { MdCheckboxComponent } from './components/grid-cell-components/md-checkbox.component';
import { MdInputTextComponent } from './components/grid-cell-components/md-input-text.component';
import { InputTextNameDialog } from './components/grid-cell-components/md-input-text.component';
import { MdInputNumberComponent } from './components/grid-cell-components/md-input-number.component';
import { MdRadioComponent } from './components/grid-cell-components/md-radio.component';
import { MdSelectComponent } from './components/grid-cell-components/md-select.component';
import { ValuesGroupCellRendererComponent } from './components/grid-cell-group-components/values-group-cell-renderer.component';
import { ValuesGroupNameDialog } from './components/grid-cell-group-components/values-group-cell-renderer.component';
import { SummariesGroupCellRendererComponent } from './components/grid-cell-group-components/summaries-group-cell-renderer.component';
import { SummariesGroupNameDialog } from './components/grid-cell-group-components/summaries-group-cell-renderer.component';
import { DecisionPageComponent } from './components/decision-page/decision-page.component';
import { GroupPageComponent } from './components/group-page/group-page.component';
import { StatePageComponent } from './components/state-page/state-page.component';
import { StrategiesPageComponent } from './components/strategies-page/strategies-page.component';
import { TransitionsPageComponent } from './components/transitions-page/transitions-page.component';
import { ValuesPageComponent } from './components/values-page/values-page.component';
import { ValuesHealthPageComponent } from './components/values-health-page/values-health-page.component';
import { ValuesEconomicPageComponent } from './components/values-economic-page/values-economic-page.component';
import { SummariesPageComponent } from './components/summaries-page/summaries-page.component';
import { SummariesHealthPageComponent } from './components/summaries-health-page/summaries-health-page.component';
import { SummariesEconomicPageComponent } from './components/summaries-economic-page/summaries-economic-page.component';
import { HotTableModule } from 'angular-handsontable';
import { HandstableComponent } from './components/handstable/handstable.component';
import { HeroMat2ModalDialogComponent } from './components/hero-mat2-modal-dialog/hero-mat2-modal-dialog.component';
import { HeroMatRenameDialogComponent } from './components/hero-mat-rename-dialog/hero-mat-rename-dialog.component';
import { CodeEditorComponent } from './components/code-editor/code-editor.component';
import { ClickOutsideModule } from 'ng-click-outside';
import { ModelPageComponent } from './components/model-page/model-page.component';
import { WizardSidenavComponent } from './components/wizard-sidenav/wizard-sidenav.component';
import { ModelSettingsComponent } from './components/model-settings/model-settings.component';
import { BcResultsPageComponent } from './components/bc-results-page/bc-results-page.component';
import { TraceResultsPageComponent } from './components/trace-results-page/trace-results-page.component';
import { ResultsSidebarComponent } from './components/results-sidebar/results-sidebar.component';
import { ModelSettingsDialog } from './components/model-settings/model-settings.component';
import { SbmessageReceiverComponent } from './components/sbmessage-receiver/sbmessage-receiver.component';
import { SbmessageSenderComponent } from './components/sbmessage-sender/sbmessage-sender.component';
import { SnackbarMessageService } from './services/snackbar-message.service';
import { GroupAttribAddModalComponent } from './components/group-attrib-add-modal/group-attrib-add-modal.component';
import { GroupAttribEditModalComponent } from './components/group-attrib-edit-modal/group-attrib-edit-modal.component';
import { BcOverrideValuesComponent } from './components/bc-override-values/bc-override-values.component';
import { BcAddOverrideComponent } from './components/bc-add-override/bc-add-override.component';
import { OutcomesResultsPageComponent } from './components/outcomes-results-page/outcomes-results-page.component';
import { Ng2DeviceDetectorModule } from "ng2-device-detector";
import { DialogTestComponent } from './components/dialog-test/dialog-test.component';
import { SbmessageSimpleComponent } from './components/sbmessage-simple/sbmessage-simple.component';
import { UpdateListComponent } from './components/update-list/update-list.component';
import { GenericModalDialogComponent } from './components/generic-modal-dialog/generic-modal-dialog.component';
import { CalculationIndicatorComponent } from './components/calculation-indicator/calculation-indicator.component';
import { CostsResultsPageComponent } from './components/costs-results-page/costs-results-page.component';
import { CeResultsPageComponent } from './components/ce-results-page/ce-results-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ToolbarComponent,
    FormulaBarComponent,
    TabLabelComponent,
    WizardPageComponent,
    MenuBarComponent,
    WizSettingPageComponent,
    VariablesPageComponent,
    MdFormulaBarConnectComponent,
    MdCheckboxComponent,
    MdInputTextComponent,
    InputTextNameDialog,
    MdInputNumberComponent,
    MdRadioComponent,
    MdSelectComponent,
    ValuesGroupCellRendererComponent,
    ValuesGroupNameDialog,
    SummariesGroupCellRendererComponent,
    SummariesGroupNameDialog,
    DecisionPageComponent,
    GroupPageComponent,
    StatePageComponent,
    StrategiesPageComponent,
    TransitionsPageComponent,
    ValuesPageComponent,
    ValuesHealthPageComponent,
    ValuesEconomicPageComponent,
    SummariesPageComponent,
    SummariesHealthPageComponent,
    SummariesEconomicPageComponent,
    HandstableComponent,
    HeroMat2ModalDialogComponent,
    HeroMatRenameDialogComponent,
    CodeEditorComponent,
    ModelPageComponent,
    WizardSidenavComponent,
    ModelSettingsComponent,
    BcResultsPageComponent,
    TraceResultsPageComponent,
    ResultsSidebarComponent,
    ModelSettingsDialog,
    SbmessageReceiverComponent,
    SbmessageSenderComponent,
    GroupAttribAddModalComponent,
    GroupAttribEditModalComponent,
    BcOverrideValuesComponent,
    BcAddOverrideComponent,
    OutcomesResultsPageComponent,
    DialogTestComponent,
    SbmessageSimpleComponent,
    UpdateListComponent,
    GenericModalDialogComponent,
    CalculationIndicatorComponent,
    CostsResultsPageComponent,
    CeResultsPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    CountryPickerModule.forRoot(),
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdDatepickerModule,
    MdDialogModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdCoreModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSlideToggleModule,
    MdSliderModule,
    MdSnackBarModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
    MdNativeDateModule,
    NgReduxModule,
    DragulaModule,
    HotTableModule,
    TagInputModule,
    ClickOutsideModule,
    Ng2DeviceDetectorModule.forRoot(),
    AgGridModule.withComponents(
      [
        MdFormulaBarConnectComponent,
        MdCheckboxComponent,
        MdInputTextComponent,
        MdInputNumberComponent,
        MdRadioComponent,
        MdSelectComponent,
        ValuesGroupCellRendererComponent,
        SummariesGroupCellRendererComponent
      ])
  ],
  providers: [GlobalDataAccessService,
              ComputeService,
              LanguageService,
              FormulaEditorService,
              SnackbarMessageService],
  bootstrap: [AppComponent],
  entryComponents: [HeroMat2ModalDialogComponent,
                    HeroMatRenameDialogComponent,
                    BcAddOverrideComponent,
                    GroupAttribAddModalComponent,
                    GroupAttribEditModalComponent,
                    ModelSettingsDialog,
                    InputTextNameDialog,
                    ValuesGroupNameDialog,
                    SummariesGroupNameDialog,
                    SbmessageSimpleComponent,
                    DialogTestComponent,
                    GenericModalDialogComponent,
                    CalculationIndicatorComponent]
})
export class AppModule {

  constructor(ngRedux: NgRedux<IAppState>, ) {
    ngRedux.configureStore(rootReducer, undefined);
  }

}
