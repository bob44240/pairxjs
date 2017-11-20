import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MdDialogRef } from '@angular/material';
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from '../../interfaces/model.interface';
import { MdCheckboxComponent } from '../grid-cell-components/md-checkbox.component';
import { ComputeService } from './../../services/compute.service';

@Component({
  selector: 'app-bc-add-override',
  templateUrl: './bc-add-override.component.html',
  styleUrls: ['./bc-add-override.component.scss']
})
export class BcAddOverrideComponent implements OnInit, OnDestroy {

  public subscriptions: Subscription[] = [];

  @select() formulas;
  @select() overrides;
  @ViewChild('tableGrid') tableGrid;

  public formulas_: any[] = [];
  public overrides_: any[] = [];
  public tableData: any[] = [];
  public columnDefs = [
    {
      headerName: '',
      headerTextName: 'Include',
      field: 'on_off',
      canDelete: false,
      width: 40,
      cellRendererFramework: MdCheckboxComponent
    },
    { field: 'name', headerName: 'Name'},
    { field: 'description', headerName: 'Description'},
    { field: 'formula', headerName: 'Default Value'}
  ];

  constructor(public dialogRef: MdDialogRef<BcAddOverrideComponent>, private ngRedux: NgRedux<IAppState>,
    private computeService: ComputeService) { }

  ngOnInit() {
    this.subscriptions.push(
      this.formulas.subscribe(x => {
        this.formulas_ = JSON.parse(JSON.stringify(x));
        this.updateTableData();
      })
    );
    this.subscriptions.push(
      this.overrides.subscribe(x => {
        this.overrides_ = JSON.parse(JSON.stringify(x));
        this.updateTableData();
      })
    );
    setTimeout(() => this.tableGrid.gridOptions.api.sizeColumnsToFit(), 50);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(x => x.unsubscribe());
  }

  updateTableData() {
    const active = this.overrides_.map(x => x.name);
    this.tableData = this.formulas_.map(x => {
      if (active.indexOf(x.name) === -1) {
        x.on_off = 'Off';
      } else {
        x.on_off = 'On';
      }
      return x;
    });
  }

  closeDialog(state) {
    if (state === 'Yes') {
      this.dialogRef.close({});
    }
    if (state === 'Cancel') {
      this.dialogRef.close({});
    }
  }

  // Checking or unchecking a row
  public editThisRow(rowNumber) {

  }

  updateOverrides() {
    const overrideNames = this.overrides_.map(x => x.name);
    const overrides = this.tableData
      .filter(x => x.on_off === 'On')
      .map(x => {
        const index = overrideNames.indexOf(x.name);
        let ret;
        if (index === -1) {
          ret = {
            name: x.name,
            value: x.formula
          };
        } else {
          ret = this.overrides_[index];
        }
        return ret;
      });
    const newNames = this.overrides_.map(x => x.name);
    const dropped = overrideNames.filter(x => newNames.indexOf(x === -1));
    this.ngRedux.dispatch({
      type: 'UPDATE_OVERRIDES',
      payload: overrides
    });
    if (dropped.length > 0) {
      // Only recalculate if an override was dropped
      this.computeService.runBaseCase('costs_hc', 'qalys');
    }
    this.dialogRef.close({});
  }

  cancel() {
    this.dialogRef.close({});
  }

}
