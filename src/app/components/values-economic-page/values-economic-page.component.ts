import { Component,
         OnInit,
         AfterViewInit,
         Input,
         OnChanges,
         OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { NgRedux, select } from 'ng2-redux';
import { debounce } from '../../functions/debounce';

import { IAppState } from '../../interfaces/model.interface';
import { GlobalDataAccessService } from '../../services/global-data-access.service';
// ya... the grid stuff.
import { GridOptions } from 'ag-grid/main';
import { MdFormulaBarConnectComponent } from '../grid-cell-components/md-formula-bar-connect.component';
import { MdCheckboxComponent } from '../grid-cell-components/md-checkbox.component';
import { MdInputTextComponent } from '../grid-cell-components/md-input-text.component';
import { MdInputNumberComponent } from '../grid-cell-components/md-input-number.component';
import { MdSelectComponent } from '../grid-cell-components/md-select.component';
import { ValuesGroupCellRendererComponent } from '../grid-cell-group-components/values-group-cell-renderer.component';

@Component({
  selector: 'app-values-economic-page',
  template: `
    <app-formula-bar [name]="'valueseconomicFB'"></app-formula-bar>
    <div (window:resize)="this.resizeGrid()">
      <div style='width: 100%;height:38px;
                   background-color:#f0f0f0;
                   padding: 5px 0px 0px 4px;'>
        <img src="/assets/row-add.svg"
             id="addrow"
             alt="add row"
             style="cursor:pointer;margin:0px 4px 0px 2px;"
             (click)="onAddRow()"
             title="add a new group row at the end of the grid..."
             height="28px" width="auto">
        <img src="/assets/row-delete.svg"
             id="deleterow"
             alt="delete row"
             style="cursor:pointer;margin:0px 4px 0px 2px;"
             (click)="onRemoveSelectedRow()"
             title="delete the selected row..."
             height="28px" width="auto">
        <img src="/assets/revert.svg"
             id="revert"
             alt="revert grid"
             style="cursor:pointer;margin:0px 10px 0px 0px;float:right;"
             title="revert grid changes to last submit..."
             height="28px" width="auto">
        <img src="/assets/submit.svg"
             id="submit"
             alt="submit grid"
             style="cursor:pointer;margin:0px 2px 0px 2px;float:right;"
             title="submit grid changes to database..."
             height="28px" width="auto">
      </div>
      <ag-grid-angular class='ag-theme-material'
                       style='width:100%;height:400px;'
                       [gridOptions]='gridOptions'
                       (afterFilterChanged)="onAfterFilterChanged()"
                       (rowSelected)="onRowSelected($event)"
                       (rowClicked)="OnRowClicked($event)">
      </ag-grid-angular>
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
export class ValuesEconomicPageComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {

  public subscriptions: Subscription[] = [];

  // All state transfer objects.
  @select() values_economic: Observable<any>;
  public theValuesEconomicByName: any;
  // @Input getter/setter variables... see below.
  private _active = false;
  private _filterText = null;
  private _toggleButtonBar = false;
  // keep track of the grid.
  public columnID = 0;
  public totalRows = 0;
  public selectedRow: any = 0;
  public infoColor = '#666';
  public columnTitle = '';
  public columnSelect = '';
  public columnDefs: any[];
  public gridOptions: GridOptions;
  // global data access...
  public gdaMessage: any = new Array();
  public gdaSubscription: Subscription;
  public gdaDecision;
  public gdaPopulationType;
  // state and strategy name string access...
  @select() states$: Observable<any[]>;
  public stateNames: string[];
  @select() strategieswho$: Observable<any[]>;
  public strategieswhoNames: string[];
  @select() strategieshow$: Observable<any[]>;
  public strategieshowNames: string[];
  public strategiesNames: string[];

  public resizeGrid = debounce(() => {
    // Only resize if the page is visible
    if (this._active) {
      this.gridOptions.api.sizeColumnsToFit();
    }
  }, 50, false);

  constructor(private ngRedux: NgRedux<IAppState>,
              private globalDAService: GlobalDataAccessService) {
    this.gridOptions = <GridOptions>{
          columnDefs: this.createColumnDefs(),
          onGridReady: () => { this.subscribeToData(); },
          enableSorting: true,
          rowSelection: 'single',
          rowHeight: 48,
          //domLayout: 'autoHeight',
          suppressHorizontalScroll: true,
          context: {
            componentParent: this
          },
          //groupDefaultExpanded: 1,
          groupUseEntireRow: true,
          groupRowInnerRendererFramework: ValuesGroupCellRendererComponent,
          overlayNoRowsTemplate: '<div style="padding:10px;border-bottom:solid thin #d0d0d0;background:#ededed;">' +
      'There are no rows to display...</div>'
    };
    // we need a updated copy of the columns.
    this.columnDefs = this.gridOptions.columnDefs;
    this.columnSelect = this.columnDefs[0].colId;
    this.gdaSubscription = globalDAService
                              .listenAll()
                              .subscribe(broadcastMessage => this.OnNextGDAMessage(broadcastMessage));
  }

  public subscribeToData() {
    this.subscriptions.push(
      this.values_economic.subscribe(
        rowData => {
          // this is the initial full set of data-note: that we don't
          // need to un-subscribe here as it's a one off data load.
          if (typeof this.gridOptions !== 'undefined') {
            this.gridOptions.api.setRowData(JSON.parse(JSON.stringify(rowData)));
          }
        }
      )
    );
  }

  public OnNextGDAMessage(broadcastMessage){
    // get the new GDA message array...
    this.gdaMessage = broadcastMessage.slice(0);
    this.gdaDecision = this.gdaMessage["0"].value
    this.gdaPopulationType = this.gdaMessage["1"].value
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks.
    this.gdaSubscription.unsubscribe();
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
      // fill the screen with the grid...
      setTimeout(() => this.resizeGrid(), 300);
      if (this.gridOptions && this.gridOptions.api) {
        // get the row count...
        const count = this.gridOptions.api.getModel().getRowCount();
        // get the 1st row.
        const rowStartNode = this.gridOptions.api.getDisplayedRowAtIndex(0);
        // select'em...
        if (typeof rowStartNode !== 'undefined') {
          rowStartNode.setSelected(true);
        }
      }
    }
  }
  
  // Input getter/setter: filterText.
  // pass in grid filter data from the parent component.
  get filterText(): string {
    return this._filterText;
  }
  @Input()
  set filterText(value: string) {
    this._filterText = value;
    if (typeof this._filterText !== 'undefined') {
      this.gridOptions.api.setQuickFilter(this._filterText);
    }
  }

  // Input getter/setter: toggleButtonBar.
  // show/hide the grid button bars..
  get toggleButtonBar(): boolean {
    return this._toggleButtonBar;
  }
  @Input()
  set toggleButtonBar(value: boolean) {
    this._toggleButtonBar = value;
  }
  
  ngOnInit() {
    // Grab the state data.
    this.subscriptions.push(
        this.values_economic.subscribe(value => {
        this.valueseconomicHandler(value);
      })
    );
    // setup stuff locally.
    this.subscriptions.push(
        this.states$.subscribe(value => {
        this.stateHandler(value);
      })
    );
    this.subscriptions.push(
        this.strategieswho$.subscribe(value => {
        this.strategywhoHandler(value);
      })
    );
    this.subscriptions.push(
      this.strategieshow$.subscribe(value => {
        this.strategyhowHandler(value);
      })
    );
    // setup stuff locally.
  }

  private valueseconomicHandler (value) {
    // save the 'values_economic name' data.
    this.theValuesEconomicByName = JSON.parse(JSON.stringify(value)).map(d => d.name);
  }

  private stateHandler (value) {
    // save the 'state' name data.
    this.stateNames = JSON.parse(JSON.stringify(value)).map(d => d.name);
    this.stateNames.splice(0, 0, 'All');
    this.gridOptions.columnDefs['5'].cellEditorParams.options = this.stateNames;
  }

  private strategywhoHandler (value) {
    if (this.gdaDecision === 'who') {
      // save the 'strategy' name data.
      this.strategieswhoNames = JSON.parse(JSON.stringify(value)).map(d => d.name);
      // pick a winner...
      this.strategiesNames = this.strategieswhoNames.slice();
      // add 'all' strategy...
      this.strategiesNames.splice(0, 0, 'All');
      // plug'em into the grid...
      this.gridOptions.columnDefs['4'].cellEditorParams.options = this.strategiesNames;
    }
  }

  private strategyhowHandler (value) {
    if (this.gdaDecision === 'how') {
      // save the 'strategy' name data.
      this.strategieshowNames = JSON.parse(JSON.stringify(value)).map(d => d.name);
      // pick a winner...
      this.strategiesNames = this.strategieshowNames.slice();
      // add 'all' strategy...
      this.strategiesNames.splice(0, 0, 'All');
      // plug'em into the grid...
      this.gridOptions.columnDefs['4'].cellEditorParams.options = this.strategiesNames;
    }
  }

  ngAfterViewInit() {
  }

  ngOnChanges(): void {
    if (typeof this.gridOptions.api !== 'undefined') {
      const item = this.gridOptions.api.getModel();
      this.totalRows = item.getRowCount();
    }
  }

  onQuickFilterChanged($event) {
    // make sure it is real.
    if (typeof $event.target.value !== 'undefined') {
      this.gridOptions.api.setQuickFilter($event.target.value);
    }
  }

  onAfterFilterChanged() {
    if (typeof this.gridOptions.api !== 'undefined') {
      const item = this.gridOptions.api.getModel();
      this.totalRows = item.getRowCount();
    }
  }

  //reducer helper - no duplicate names...
  public getNameDuplicate(newName) {
    return this.theValuesEconomicByName.filter(name => name === newName).length > 0;
  }

  // reducer - edit a group row...
  public editThisGroupRow(data) {
    if (typeof data !== 'undefined') {
      // off to the reducer...
      this.ngRedux.dispatch({
        type: 'EDIT_VALUES_ECONOMIC',
        payload: data
      });
    }
  }

  // reducer - edit a row...
  public editThisRow(rowNumber) {
    // find the row...
    let rowNode = null;
    this.gridOptions.api.forEachNode(function (node) {
      if (node.rowIndex === rowNumber) {
        rowNode = node;
      }
    });
    if (typeof rowNode !== 'undefined') {
      // off to the reducer...
      this.ngRedux.dispatch({
        type: 'EDIT_VALUES_ECONOMIC',
        payload: rowNode.data
      });
    }
  }

  // reducer - add a group row...
  public addThisRow(groupname) {
    // Add values economic...
    this.ngRedux.dispatch({
      type: 'ADD_VALUES_ECONOMIC',
      payload: this.createNewRowData(groupname)
    });
  }
  
  // reducer - add a new group...
  public addValuesEconomic() {
    // Add values economic...
    this.ngRedux.dispatch({
      type: 'ADD_VALUES_ECONOMIC',
      payload: this.createNewRowData()
    });
  }
  
  // reducer - insert a row...
  public insertValuesEconomic(insert) {
    // Insert state...
    this.ngRedux.dispatch({
      type: 'INSERT_VALUES_ECONOMIC',
      payload:
      [this.createNewRowData(),
      insert]
    });
  }
  
  // reducer - delete a row...
  public deleteValuesEconomic(stateid) {
    this.ngRedux.dispatch({
      type: 'REMOVE_VALUES_ECONOMIC',
      payload: stateid
    });
  }

  // reducer - re-arrange rows...
  public rearrangeRows() {
    // find the row...
    let stateIds = [];
    this.gridOptions.api.forEachNode(function (node) {
      stateIds.push(node.data.id);
    });
    // off to the reducer...
    this.ngRedux.dispatch({
      type: 'ARRANGE_VALUES_ECONOMIC',
      payload: stateIds
    });
  }

  public onRowSelected($event) {
    const selected = this.gridOptions.api.getSelectedNodes();
    // no rows or no row selected...
    if (selected === null || selected.length === 0) {
      return;
    }
    this.infoColor = '#666';
    this.selectedRow = selected[0].rowIndex;
  }

  public OnRowClicked($event) {
  }

  public createColumnDefs() {
    return [
      {
        headerName: 'Name',
        headerTextName: 'Name',
        field: 'name',
        colId: (this.columnID++).toString(),
        width: 65,
        canDelete: false,
        cellRenderer: function (params) {
          return '<div class="datatype datatype-pill datatype-summary-primary">' + params.value + '</div>';
        },
        cellEditorFramework: MdInputTextComponent,
        cellEditorParams: {
          input: ['name']
        },
        hide: true,
        rowGroupIndex: 0
      },
      {
        headerName: 'Label',
        headerTextName: 'Label',
        field: 'label',
        colId: (this.columnID++).toString(),
        width: 150,
        canDelete: false,
        cellRenderer: function (params) {
          return '<div>' + params.value + '</div>';
        },
        cellEditorFramework: MdInputTextComponent,
        cellEditorParams: {
          input: ['label']
        },
        hide: true
      },
      {
        headerName: '',
        headerTextName: '',
        field: 'spacer',
        colId: (this.columnID++).toString(),
        width: 150,
        canDelete: false,
      },
      {
        headerName: 'Strategy',
        headerTextName: 'Strategy',
        field: 'strategy',
        colId: (this.columnID++).toString(),
        width: 100,
        canDelete: false,
        cellRenderer: function (params) {
          return '<span class="heRo-ag-grid-strategies-square">' + params.value + '</span>';
        },
        cellEditorFramework: MdSelectComponent,
        cellEditorParams: {
          options: this.strategiesNames,
          dropdownWidth : 78
        },
        editable: true
      },
      {
        headerName: 'State',
        headerTextName: 'State',
        field: 'state',
        colId: (this.columnID++).toString(),
        width: 100,
        canDelete: false,
        cellRenderer: function (params) {
          return '<span class="heRo-ag-grid-state-square">' + params.value + '</span>';
        },
        cellEditorFramework: MdSelectComponent,
        cellEditorParams: {
          options: this.stateNames,
          dropdownWidth : 60
        },
        editable: true
      },
      {
        headerName: '<span>Formula</span><img src="/assets/fxx.svg" class="heRo-ag-grid-state-icon">',
        headerTextName: 'Formula',
        field: 'formula',
        colId: (this.columnID++).toString(),
        width: 150,
        cellRenderer: function (params) {
          return '<div class="heRo-ag-grid-formula-bar">' + params.value + '</div>';
        },
        cellEditorFramework: MdFormulaBarConnectComponent,
        cellEditorParams: {
          input: ['valueseconomicFB']
        },
        editable: true
      }
    ];
  }
  
  public createNewRowData(group?: string) {
    if (!group) {
      group = 'Group' + Math.floor(Math.random() * 101);
    }
    return {
      name: group,
      label: 'Label...',
      strategy: 'All',
      state: 'All',
      formula: 'Add Formula...',
    };
  }
  
  public onAddRow() {
    if (typeof this.gridOptions.api !== 'undefined') {
      let row = this.createNewRowData();
      this.gridOptions.api.updateRowData({add: [row]});
      const item = this.gridOptions.api.getModel();
      this.totalRows = item.getRowCount();
      // tell the reducer...
      this.addValuesEconomic();
      // show'em all again...
      this.gridOptions.api.forEachNode(function(node) {
        if (node.key === row.name) {
            node.setExpanded(true);
        }
      }.bind(this));
    }
  }

  public onInsertRowBeforeSelection() {
    // get the selected row...
    let selected = this.gridOptions.api.getSelectedNodes();
    // no rows or no row selected...
    if (selected === null || selected.length === 0) {
      return;
    }
    const index = selected[0].rowIndex;
    this.gridOptions.api.updateRowData({add: [this.createNewRowData()], addIndex: index});
    const item = this.gridOptions.api.getModel();
    this.totalRows = item.getRowCount();
    // get the selected row...
    selected = this.gridOptions.api.getSelectedNodes();
    // no rows or no row selected...
    if (selected === null || selected.length === 0) {
      return;
    }
    this.infoColor = '#666';
    this.selectedRow = selected[0].rowIndex;
    // tell the reducer...
    this.insertValuesEconomic(index);
  }

  public onInsertRowAfterSelection() {
    // get the selected row...
    let selected = this.gridOptions.api.getSelectedNodes();
    // no rows or no row selected...
    if (selected === null || selected.length === 0) {
      return;
    }
    const index = selected[0].rowIndex;
    this.gridOptions.api.updateRowData({add: [this.createNewRowData()], addIndex: index + 1});
    const item = this.gridOptions.api.getModel();
    this.totalRows = item.getRowCount();
    // get the selected row...
    selected = this.gridOptions.api.getSelectedNodes();
    // no rows or no row selected...
    if (selected === null || selected.length === 0) {
      return;
    }
    this.infoColor = '#666';
    this.selectedRow = selected[0].rowIndex;
    // tell the reducer...
    this.insertValuesEconomic(index + 1);
  }

  public onAddColumn() {
    if (typeof this.gridOptions !== 'undefined') {
      if (this.columnTitle !== '' && this.columnTitle !== null) {
        // grab the column definition array.
        this.columnDefs = this.gridOptions.columnDefs;
        // add the new column.
        this.columnDefs.push({
          headerName: '<span>' + this.columnTitle + '</span>',
          headerTextName: this.columnTitle,
          field: this.columnTitle.toLowerCase(),
          colId: (this.columnID++).toString(),
          width: 150,
          canDelete: true,
          cellRenderer: function (params) {
            if (typeof params.value === 'undefined') {
              params.value = 0;
            }
            return '<div>' + params.value + '</div>';
          },
          cellEditorFramework: MdInputNumberComponent,
          cellEditorParams: {
            input: [this.columnTitle, '0.01']
          },
          editable: true
        });
        // slam'em in... this is the new column set.
        this.gridOptions.api.setColumnDefs(this.columnDefs);
        // clean up the mess!
        this.resizeGrid();
      }
    }
  }

  public onDeleteColumn() {
    if (typeof this.gridOptions !== 'undefined') {
      // grab all the column definitions.
      this.columnDefs = this.gridOptions.columnDefs;
      // remove the entry from the columnDef array!
      for (let i = 0; i < this.columnDefs.length; i++) {
        if (this.columnDefs[i].colId === this.columnSelect) {
          //for now... cannot delete these guys...
          if(this.columnDefs[i].field === 'name' ||
             this.columnDefs[i].field === 'label') {
               break;
          }
          this.columnDefs.splice(i, 1);
          if (this.columnDefs.length > 0) {
            this.columnSelect = this.columnDefs[0].colId;
          } else {
            this.columnSelect = '';
          }
          break;
        }
      }
      // save the mess.
      this.gridOptions.api.setColumnDefs(this.columnDefs);
      // clean up the mess!
      this.resizeGrid();
    }
  }

  public onRenameColumn() {
    if (typeof this.gridOptions !== 'undefined') {
      if (this.columnTitle !== '' && this.columnTitle !== null) {
        const colTarget = this.gridOptions.columnApi.getColumn(this.columnSelect);
        // obtain the column definition from the column.
        let colDef: any = colTarget.getColDef();
        // update the header name.
        colDef.headerName = '<span>' + this.columnTitle + '</span>';
        colDef.headerTextName = this.columnTitle;
        // the column is now updated... refresh the header.
        this.gridOptions.api.refreshHeader();
        // grab all the column definitions.
        this.columnDefs = this.gridOptions.columnDefs;
        // we also update the ColumnDef array!
        for (const column of this.columnDefs) {
          if (column.colId === this.columnSelect) {
            column.headerName = '<span>' + this.columnTitle + '</span>';
            column.headerTextName = this.columnTitle;
            break;
          }
        }
        // save the mess.
        this.gridOptions.api.setColumnDefs(this.columnDefs);
        // clean up the mess!
        this.resizeGrid();
      }
    }
  }

  public onRemoveSelected($event) {
    // make sure this row is selected.
    $event.target.parentNode.parentNode.click();
    const selectedData = this.gridOptions.api.getSelectedRows();
    if (typeof selectedData[0] !== 'undefined' && selectedData[0] !== null) {
      this.gridOptions.api.updateRowData({remove: selectedData});
      // update the status bar.
      const item = this.gridOptions.api.getModel();
      this.totalRows = item.getRowCount();
      this.infoColor = '#500';
      this.selectedRow = 'none';
      // tell the reducer...
      this.deleteValuesEconomic(selectedData['0'].id)
      // show'em all again...
      this.gridOptions.api.forEachNode(function(node) {
        if (node.key === selectedData['0'].name) {
            node.setExpanded(true);
        }
      }.bind(this));
    }
  }

  public onRemoveSelectedRow() {
    const selectedData = this.gridOptions.api.getSelectedRows();
    if (typeof selectedData[0] !== 'undefined' && selectedData[0] !== null) {
      this.gridOptions.api.updateRowData({remove: selectedData});
      // update the status bar.
      const item = this.gridOptions.api.getModel();
      this.totalRows = item.getRowCount();
      this.infoColor = '#500';
      this.selectedRow = 'none';
      // tell the reducer...
      this.deleteValuesEconomic(selectedData['0'].id)
      // show'em all again...
      this.gridOptions.api.forEachNode(function(node) {
        if (node.key === selectedData['0'].name) {
            node.setExpanded(true);
        }
      }.bind(this));
    }
  }

  public moveSelectedRowUp() {
    // get the selected row...
    const selected = this.gridOptions.api.getSelectedNodes();
    // no rows or no row selected...
    if (selected === null || selected.length === 0) {
      return;
    }
    // can not move beyond the 1st row...
    if (selected[0].rowIndex === 0) {
      return;
    }
    const index = selected[0].rowIndex;
    const rowData = [];
    // fresh copy all data...
    this.gridOptions.api.forEachNode(function (node) {
      rowData.push(node.data);
    });
    // move the row up one notch...
    rowData.splice(index - 1, 0, rowData.splice(index, 1)[0]);
    // plug the rows back into the grid...
    this.gridOptions.api.setRowData(rowData);
    // find the original selected row...
    let rowNode = null;
    this.gridOptions.api.forEachNode(function (node) {
      if (node.rowIndex === index - 1) {
        rowNode = node;
      }
    });
    // select'em...
    rowNode.setSelected(true);
    // tell the reducer...
    this.rearrangeRows();
  }

  public moveRowUp($event) {
    // make sure this row is selected.
    $event.target.parentNode.parentNode.click();
    // get the selected row...
    const selected = this.gridOptions.api.getSelectedNodes();
    // no rows or no row selected...
    if (selected === null || selected.length === 0) {
      return;
    }
    // can not move beyond the 1st row...
    if (selected[0].rowIndex === 0) {
      return;
    }
    const index = selected[0].rowIndex;
    const rowData = [];
    // fresh copy all data...
    this.gridOptions.api.forEachNode(function (node) {
      rowData.push(node.data);
    });
    // move the row up one notch...
    rowData.splice(index - 1, 0, rowData.splice(index, 1)[0]);
    // plug the rows back into the grid...
    this.gridOptions.api.setRowData(rowData);
    // find the original selected row...
    let rowNode = null;
    this.gridOptions.api.forEachNode(function (node) {
      if (node.rowIndex === index - 1) {
        rowNode = node;
      }
    });
    // select'em...
    rowNode.setSelected(true);
    // at the top... use the gray up arrow.
    const upArrow = document.getElementById($event.target.id);
    if (upArrow !== null) {
      if (rowNode.rowIndex === 0) {
        upArrow.setAttribute('src', '/assets/up-gray.svg');
      } else {
        upArrow.setAttribute('src', '/assets/up-black.svg');
      }
    }
    // tell the reducer...
    this.rearrangeRows();
  }

  public moveSelectedRowDown() {
    // get the row count...
    const count = this.gridOptions.api.getModel().getRowCount();
    // get the selected row...
    const selected = this.gridOptions.api.getSelectedNodes();
    // no rows or no row selected...
    if (selected === null || selected.length === 0) {
      return;
    }
    // can not move beyond the last row...
    if (selected[0].rowIndex === count - 1) {
      return;
    }
    const index = selected[0].rowIndex;
    const rowData = [];
    // fresh copy all data...
    this.gridOptions.api.forEachNode(function (node) {
      rowData.push(node.data);
    });
    // move the row down one notch...
    rowData.splice(index, 0, rowData.splice(index + 1, 1)[0]);
    // plug the rows back into the grid...
    this.gridOptions.api.setRowData(rowData);
    // find the original selected row...
    let rowNode = null;
    this.gridOptions.api.forEachNode(function (node) {
      if (node.rowIndex === index + 1) {
        rowNode = node;
      }
    });
    // select'em...
    rowNode.setSelected(true);
    // tell the reducer...
    this.rearrangeRows();
  }

  public moveRowDown($event) {
    // make sure this row is selected.
    $event.target.parentNode.parentNode.click();
    // get the row count...
    const count = this.gridOptions.api.getModel().getRowCount();
    // get the selected row...
    const selected = this.gridOptions.api.getSelectedNodes();
    // no rows or no row selected...
    if (selected === null || selected.length === 0) {
      return;
    }
    // can not move beyond the last row...
    if (selected[0].rowIndex === count - 1) {
      return;
    }
    const index = selected[0].rowIndex;
    const rowData = [];
    // fresh copy all data...
    this.gridOptions.api.forEachNode(function (node) {
      rowData.push(node.data);
    });
    // move the row down one notch...
    rowData.splice(index, 0, rowData.splice(index + 1, 1)[0]);
    // plug the rows back into the grid...
    this.gridOptions.api.setRowData(rowData);
    // find the original selected row...
    let rowNode = null;
    this.gridOptions.api.forEachNode(function (node) {
      if (node.rowIndex === index + 1) {
        rowNode = node;
      }
    });
    // select'em...
    rowNode.setSelected(true);
    // at the bottom... use the gray down arrow.
    const downArrow = document.getElementById($event.target.id);
    if (downArrow !== null) {
      if (rowNode.rowIndex === count - 1) {
        downArrow.setAttribute('src', '/assets/down-gray.svg');
      } else {
        downArrow.setAttribute('src', '/assets/down-black.svg');
      }
    }
    // tell the reducer...
    this.rearrangeRows();
  }
}
