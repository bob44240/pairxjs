import { Component } from '@angular/core';
import { LicenseManager } from 'ag-grid-enterprise/main';
import Handsontable from 'handsontable';
import { GenericModalDialogComponent } from '../../src/app/components/generic-modal-dialog/generic-modal-dialog.component';
import { MdDialogModule, MdDialogRef, MdDialog } from '@angular/material';
import {Ng2DeviceService} from 'ng2-device-detector';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
    <app-sbmessage-receiver></app-sbmessage-receiver>
  `,
  styles: []
})
export class AppComponent {

  constructor(private deviceDetection: Ng2DeviceService, public dialog: MdDialog) {
    //LicenseManager.setLicenseKey('ag-Grid_Evaluation_License_Not_for_Production_1Devs15_November_2017__MTUxMDcwNDAwMDAwMA==3c862d06679ff2da4f8d4ac677bff980');
    LicenseManager.setLicenseKey('Policy_Analysis_Inc_heRo3_4Devs_1OEM_26_October_2018__MTU0MDUwODQwMDAwMA==6a429d27da6a93cb4ce98286980adf5f');
    this.Test_Client_Compatability();
  }

  Test_Client_Compatability() {
    const browserType = this.deviceDetection.getDeviceInfo().browser.toUpperCase();
    const browserVersion = this.deviceDetection.getDeviceInfo().browser_version;
    if (browserType == "CHROME") return;
      const dia = this.dialog.open(GenericModalDialogComponent);
    dia.componentInstance.Title = "Client Browser Warning";
    dia.componentInstance.SubTitle = "";

    dia.componentInstance.Content = "You are currently using " + browserType + '.  At the present time only Chrome is supported.  Please switch to Chrome for best results';
    dia.afterClosed().subscribe(response => { });
  }

}
