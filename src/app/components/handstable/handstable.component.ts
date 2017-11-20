import { any } from 'codelyzer/util/function';
import { Component, AfterViewInit, Input, ViewChild, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import Handsontable from 'handsontable';
import {HeroMat2ModalDialogComponent } from '../hero-mat2-modal-dialog/hero-mat2-modal-dialog.component';
import { HeroMatRenameDialogComponent } from '../hero-mat-rename-dialog/hero-mat-rename-dialog.component';
import { MdDialogModule, MdDialogRef, MdDialog } from '@angular/material';
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from '../../interfaces/model.interface';

@Component({
  selector: 'app-handstable',
  templateUrl: './handstable.component.html',
  styleUrls: ['./handstable.component.scss']
})
export class HandstableComponent implements AfterViewInit, OnDestroy, OnInit {

  public subscriptions: Subscription[] = [];

  @ViewChild('currentTable') currentTable;
  @ViewChild('tableParent') tableParent;
  private _active = false;
  @select() tables: Observable<any[]>;
  private init = false;
  private tableData: any[];
  private activeTable = 0;
  private hotTable: Handsontable;

  public settings = {
    data: [],
    colHeaders: true,
    rowHeaders: true,
    contextMenu: true,
    width: 500,
    height: 500
  };

  constructor(private ngRedux: NgRedux<IAppState>, public dialog: MdDialog) {

  }

  ngOnInit() {
    this.subscriptions.push(
      this.tables.subscribe(tableData => {
        this.tableData = JSON.parse(JSON.stringify(tableData));
      })
    );
  }

  ngAfterViewInit() {
    this.init = true;
    if (this.tableData.length > 0 && this.hotTable === undefined) {
      setTimeout(() => {
      this.createTable();
      this.displayTable(this.activeTable);
      }, 300);
    };
  }

  ngOnDestroy() {
    if (this.hotTable) {
      this.hotTable.destroy();
    }
    this.subscriptions.forEach(x => x.unsubscribe());
  }

  // Input getter/setter: active.
  // do a start-up wake-up push.
  get active(): boolean {
    return this._active;
  }
  @Input()
  set active(value: boolean) {
    this._active = value;
    if (this._active) {
      if (this.hotTable) {
        this.hotTable.updateSettings({
          data: this.tableData[this.activeTable].data
        }, true);
      }
    }
  }

  createTable() {
    this.hotTable = new Handsontable(this.currentTable.nativeElement, {
      data: this.tableData[this.activeTable].data,
      colHeaders: true,
      rowHeaders: true,
      contextMenu: true,
      stretchH: 'all',
      cells: (theRow, theCol, theProp) => {
        const cellProps: any = {};
        if (theRow === 0) {
          cellProps.renderer = function(instance, td, row, col, prop, value, cellProperties) {
            Handsontable.renderers.TextRenderer.apply(this, arguments);
            td.style.fontWeight = 'bold';
            td.style.color = 'black';
            td.style.background = '#efefef';
          };
        }
        return cellProps;
      }
    });
    this.hotTable.addHook('afterChange', () => this.updateTable());
  }

  setSize() {
    if (this.init) {
      this.hotTable.updateSettings({
        height: this.tableParent.nativeElement.offsetHeight,
        width: this.tableParent.nativeElement.offsetWidth
      }, true);
    }
  }

  displayTable(index) {
    this.activeTable = index;
    this.hotTable.updateSettings({
      data: this.tableData[this.activeTable].data
    }, false);
  }

  deleteTable(table) {
    const dia = this.dialog.open(HeroMat2ModalDialogComponent, {
      data: {
        name: table.name
      },
      width: '30%'
    });
    dia.componentInstance.Title = table.name;
    dia.afterClosed().subscribe(response => {
      if (response.data === 'Yes') {
        this.ngRedux.dispatch({
          type: 'REMOVE_TABLE',
          payload: table.id
        });
        this.displayTable(0);
      }
    });
  }

  addTable() {
    const dia = this.dialog.open(HeroMatRenameDialogComponent, {
      data: {
        placeholder: 'New Table Name',
        OKButton: 'Add Table'
      },
      width: '30%'
    });
    dia.afterClosed().subscribe(response => {
       if (response.name.length > 2) {
         this.ngRedux.dispatch({
           type: 'ADD_TABLE',
           payload: {
             name: response.name,
             data: this.generateBlankTable()
           }
         });
         if (!this.hotTable) {
           this.activeTable = 0;
           this.createTable();
         }

       }
    });
  }

  public generateBlankTable(): any[] {
    const headerRow = ['Header 1', 'Header 2', 'Header 3', 'Header 4']
        .concat(
          (new Array(12)).fill('', 0, 12)
        );
    const blankRow = (new Array(16)).fill('', 0, 16);
    return [headerRow].concat(
      (new Array(100)).fill(blankRow, 0, 100)
    );
  }

  public updateTable() {
    const table = this.tableData[this.activeTable];
    table.data = this.hotTable
        .getData()
        .map(row => {
          return row.map(cell => (isNaN(cell) || cell === '') ? cell : Number(cell));
        });
    this.ngRedux.dispatch({
      type: 'EDIT_TABLE',
      payload: this.tableData[this.activeTable]
    });
  }

  renameTable(table) {
    const dia = this.dialog.open(HeroMatRenameDialogComponent, {
      data: {
        OKButton: 'Rename',
        placeholder: table.name
      },
      width: '30%'
    });
    dia.afterClosed().subscribe(response => {
      if (response.name.length > 2) {
        const newTable = table;
        newTable.name = response.name;
        this.ngRedux.dispatch({
          type: 'EDIT_TABLE',
          payload: newTable
        });
      }
    });
  }

}
