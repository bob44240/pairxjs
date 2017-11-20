import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from '../../interfaces/model.interface';
import { BcAddOverrideComponent } from '../bc-add-override/bc-add-override.component';
import { MdDialogModule, MdDialogRef, MdDialog } from '@angular/material';
import { ComputeService } from './../../services/compute.service';

@Component({
  selector: 'app-bc-override-values',
  templateUrl: './bc-override-values.component.html',
  styleUrls: ['./bc-override-values.component.scss']
})
export class BcOverrideValuesComponent implements OnInit, OnDestroy {

  public subscriptions: Subscription[] = [];

  @select() overrides;

  public overrides_: any[] = [];

  constructor(private ngRedux: NgRedux<IAppState>, public dialog: MdDialog, private computeService: ComputeService) { }

  ngOnInit() {
    this.subscriptions.push(
      this.overrides.subscribe(x => {
        this.overrides_ = JSON.parse(JSON.stringify(x));
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(x => x.unsubscribe());
  }

  public removeOverride(id) {
    this.ngRedux.dispatch({
      type: 'REMOVE_OVERRIDE',
      payload: id
    });
    this.computeService.runBaseCase('costs_hc', 'qalys');
  }

  public addOverrides() {
    const dia = this.dialog.open(BcAddOverrideComponent);
  }

  public updateOverride(override) {
    this.ngRedux.dispatch({
      type: 'EDIT_OVERRIDE',
      payload: override
    });
    this.computeService.runBaseCase('costs_hc', 'qalys');
  }

}
