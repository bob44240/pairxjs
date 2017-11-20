import { Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import {SnackbarMessageService } from '../../services/snackbar-message.service';
import {Subscription} from 'rxjs/Subscription';
import {MdSnackBar, MdSnackBarConfig, MdSnackBarRef} from '@angular/material';
import { HeroMatRenameDialogComponent } from '../hero-mat-rename-dialog/hero-mat-rename-dialog.component';
import {DialogTestComponent} from '../dialog-test/dialog-test.component';
import {Ng2DeviceService} from 'ng2-device-detector';
import { CalculationIndicatorComponent } from '../calculation-indicator/calculation-indicator.component';

@Component({
  selector: 'app-sbmessage-receiver',
  templateUrl: './sbmessage-receiver.component.html',
  styleUrls: ['./sbmessage-receiver.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SbmessageReceiverComponent implements OnDestroy {
  private subscription: Subscription;
  private messages = [];

  action = false;
  setAutoHide = true;
  autoHide = 6000;
  addExtraClass = false;

  constructor(private messageService: SnackbarMessageService, public snackbar: MdSnackBar, private deviceDetection: Ng2DeviceService) {
    this.subscribe();
  }

  ngOnDestroy() {}

  subscribe() {
    this.subscription = this.messageService.subscribe('receiver', (payload) => {
      switch (payload.type.toUpperCase()) {
        case 'SUCCESS':
          this.Handle_Success(payload);
          break;

          case 'WARNING':
          this.Handle_Warning(payload);
          break;

          case 'ERROR':
          this.Handle_Error(payload);
          break;

          case 'COMPONENT':
            this.Handle_Component(payload);
            break;

          case 'DISMISS':
            this.dissmiss();
            break;
      }
    });
  }


  Handle_Success(payload) {
    const config = new MdSnackBarConfig();
    config.duration = this.autoHide;
    config.extraClasses = ['success'];
    this.snackbar.open(payload.text, 'close' , config);
  }

  Handle_Warning(payload) {
    const config = new MdSnackBarConfig();
    config.duration = this.autoHide;
    config.extraClasses = ['warning'];
    this.snackbar.open(payload.text, 'close' , config);
  }

  Handle_Error(payload) {
    const config = new MdSnackBarConfig();
    config.duration = this.autoHide;
    config.extraClasses = ['error'];
    this.snackbar.open(payload.text, 'close' , config);
  }


  Handle_Component(payload) {
    const sbRef = this.snackbar.openFromComponent(CalculationIndicatorComponent);
  }

  send(message: {text: string, respondEvent: string}) {
    this.messageService.broadcast(message.respondEvent, message.text);
  }

  open() {
    const config = new MdSnackBarConfig();
    config.duration = this.autoHide;
    config.extraClasses = this.addExtraClass ? ['party'] : null;
    this.snackbar.openFromComponent(DialogTestComponent);
  }

  dissmiss() {
    this.snackbar.dismiss();
  }

}

@Component({
  templateUrl: 'snack-bar-component.html'
})
export class SnackBarComponent {

}