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
import { MdFormulaBarEditComponent } from '../grid-cell-components/md-formula-bar-edit.component';
import { MdFormulaBarViewComponent } from '../grid-cell-components/md-formula-bar-view.component';
import { MdCheckboxComponent } from '../grid-cell-components/md-checkbox.component';
import { MdInputTextComponent } from '../grid-cell-components/md-input-text.component';
import { MdInputNumberComponent } from '../grid-cell-components/md-input-number.component';

// Modal Components
import {GroupAttribAddModalComponent} from '../group-attrib-add-modal/group-attrib-add-modal.component';
import {GroupAttribEditModalComponent} from '../group-attrib-edit-modal/group-attrib-edit-modal.component';
import {MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA} from '@angular/material';

// Icons
import {MdIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-group-page',
  templateUrl: 'group-page.component.html',
  styleUrls: ['group-page.component.scss']
})
// main class starts here...
export class GroupPageComponent implements OnInit, AfterViewInit, OnChanges {

  public subscriptions: Subscription[] = [];

  // All state transfer objects.
  @select() groupinfo: Observable<any>;
  @select() groups: Observable<any>;
  public theGroupsInfo: any;
  public theGroupsByName: any;
  public theGroups: any;
  public radiogroups;
  // @Input getter/setter variables... see below.
  private _active = false;
  // keep track of the grid.
  public columnID = 0;
  public totalRows = 0;
  public selectedRow: any = 0;
  public infoColor = '#666';
  public columnTitle = '';
  public columnSelect = '';
  public columnDefs: any[];
  public gridOptions: GridOptions;
  public toggleButtonBar = true;
  // global data access...
  public gdaMessage: any = new Array();
  public gdaSubscription: Subscription;
  public gdaDecision;
  public gdaPopulationType;  
  public resizeGrid = debounce(() => {
    // Only resize if the page is visible
    if (this._active) {
      this.gridOptions.api.sizeColumnsToFit();
    }
  }, 50, false);
  
  /*
  public columnLabels: any = [
    'start_age',
    'weight_kg'
  ];
  */
  public attributeName: string;
  public theColumnDefs: any;
  public newColumnDefs: any[];
  public groupColumns: any[];
  
  public theColumns: any;
  
  public noRowsTemplateHtml: string = '<div style="padding:10px;border-bottom:solid thin #d0d0d0;background:#ededed;">' +
  'There are no rows to display...</div>';

  constructor(private ngRedux: NgRedux<IAppState>,
              private globalDAService: GlobalDataAccessService,
              public dialog: MdDialog,
              public iconRegistry: MdIconRegistry,
              public sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconSet(
      sanitizer.bypassSecurityTrustResourceUrl(
        '/assets/sprite-sheet.svg'
      )
    ),
    this.gridOptions = <GridOptions>{
      //columnDefs: this.createColumnDefs2(this.columnDefs),
      onGridReady: () => { this.subscribeToData(); },
      enableSorting: true,
      rowSelection: 'single',
      rowHeight: 48,
      //domLayout: 'autoHeight',
      suppressHorizontalScroll: true,
      context: {
        componentParent: this
      },
      overlayNoRowsTemplate: this.noRowsTemplateHtml
    };

    // we need a updated copy of the columns.
    this.columnDefs = this.gridOptions.columnDefs;
    //this.columnSelect = this.columnDefs[0].colId;
    this.gdaSubscription = globalDAService.listenAll().subscribe(broadcastMessage => this.OnNextGDAMessage(broadcastMessage));
  }

  public subscribeToData() {
    this.subscriptions.push(
      this.groups.subscribe(
        rowData => {
          // this is the initial full set of data-note: that we don't
          // need to un-subscribe here as it's a one off data load.
          if (typeof this.gridOptions !== 'undefined') {
            this.gridOptions.api.setRowData(JSON.parse(JSON.stringify(rowData)));
            // HACK - TODO figure out why the no-rows overlay displays
            // this.gridOptions.api.hideOverlay();
          }
        }
      )
    );
    this.subscriptions.push(
      this.groups.subscribe(
        columns => {
          this.theColumns = columns;
          this.groupHandler(columns);
      })
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
      // get the row count...
      if (this.gridOptions && this.gridOptions.api) {
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

  ngOnInit() {
    /*
    // This was for population type selection, which has been removed
    this.groupinfo.subscribe(value => {
      this.theGroupsInfo = value;
    });
    this.radiogroups = this.theGroupsInfo.PopulationType;
    */
  }

  private groupHandler (columns) {
    // save the 'state name' data.
    //this.theGroupsByName = JSON.parse(JSON.stringify(value)).map(d => d.name);
    this.theColumns = columns;
    if (columns.length > 0 && columns[0].groupAttributes) {
      this.theColumnDefs = JSON.parse(JSON.stringify(columns[0].groupAttributes));
    } else {
      this.theColumnDefs = [];
    }
    if (typeof this.gridOptions !== 'undefined') {
      this.groupColumns = this.createGroupColumns(this.theColumnDefs);
      this.newColumnDefs = this.createColumnDefs(this.groupColumns);
      this.gridOptions.api.setColumnDefs(this.newColumnDefs);
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

  public UpateSettings() {
    // Do all the settings...
    this.ngRedux.dispatch({
      type: 'UPDATE_GROUPS',
      payload: this.theGroupsInfo
    });
  }

  public modelChange() {
    // Do them all at once.
    this.theGroupsInfo.PopulationType = this.radiogroups;
    this.UpateSettings();
  }

  //reducer helper - no duplicate names...
  public getNameDuplicate(newName) {
    return this.theGroupsByName.filter(name => name === newName).length > 0;
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
        type: 'EDIT_GROUP',
        payload: rowNode.data
      });
    }
    this.resizeGrid();
  }

  // reducer - add a row...
  public addGroup() {
    // Add group...
    this.ngRedux.dispatch({
      type: 'ADD_GROUP',
      payload: {
        name: 'Name...',
        label: 'Label...',
        groupAttributes: [],
        wt: 0
      }
    });
  }
  
  // reducer - insert a row...
  public insertGroup(insert) {
    // Insert group...
    this.ngRedux.dispatch({
      type: 'INSERT_GROUP',
      payload:
      [{
        name: 'Name...',
        label: 'Label...',
        start_age: 0,
        weight_kg: 0,
        wt: 0
      },
      insert]
    });
  }
  
  // reducer - delete a row...
  public deleteGroup(stateid) {
    this.ngRedux.dispatch({
      type: 'REMOVE_GROUP',
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
      type: 'ARRANGE_GROUPS',
      payload: stateIds
    });
    this.resizeGrid();
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
  
  public getStaticColumns() {
    // Generate the static columns that don't get edited
    return [
      {
        headerName: '',
        headerTextName: 'Include',
        field: 'on_off',
        colId: (this.columnID++).toString(),
        canDelete: false,
        width: 40,
        cellRendererFramework: MdCheckboxComponent
      },
      {
        headerName: 'Name',
        headerTextName: 'Name',
        field: 'name',
        colId: (this.columnID++).toString(),
        width: 100,
        canDelete: false,
        cellRenderer: function (params) {
          return '<span class="datatype datatype-group">' + params.value + '</span>';
        },
        cellEditorFramework: MdInputTextComponent,
        cellEditorParams: {
          input: ['name']
        },
        editable: true
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
        editable: true
      },
      {
        headerName: 'wt',
        headerTextName: 'wt',
        field: 'wt',
        colId: (this.columnID++).toString(),
        width: 100,
        canDelete: false,
        cellRenderer: function (params) {
          return '<div>' + params.value + '</div>';
        },
        cellEditorFramework: MdInputNumberComponent,
        cellEditorParams: {
          input: ['wt', '0.01']
        },
        editable: true
      }
    ];
  };
  
  public createGroupColumns(groups, newGroup?) {
    // Give me group names and values, and I'll generate a column array to send to createColumnDefs()
    var newColumnDefs = [];
    
    if (groups && groups.length > 0) {
      groups.forEach((attrib) => {
        newColumnDefs.push(this.createGroupAttribColumns(attrib));
      });
    }
    
    if (newGroup) {
      newGroup.forEach((attrib) => {
        newColumnDefs.push(this.createGroupAttribColumns(attrib));
      })
    }
    return newColumnDefs;
  }
    
  public createColumnDefs(groups) {
    var staticColumns = this.getStaticColumns();
    var combinedColumns;

    groups.forEach((column) => {
      var insertPoint = staticColumns.length - 1;
      staticColumns.splice(insertPoint, 0, column);
    })
    
    combinedColumns = staticColumns;
    this.gridOptions.api.setColumnDefs(combinedColumns);
    return combinedColumns;
  }
  
  public updateGroupAttribColumns(v) {
    var t = this.newColumnDefs;
    var insertPoint = this.newColumnDefs.length - 1;
    t.splice(insertPoint, 0, v);
    return t;
  };
  
  public addGroupAttribute(payload) {
    this.ngRedux.dispatch({
      type: 'ADD_GROUP_ATTRIB',
      payload: payload
    });
  }
  
  public removeGroupAttribute(payload) {
    this.ngRedux.dispatch({
      type: 'REMOVE_GROUP_ATTRIB',
      payload: payload
    });
  }
  
  public renameGroupAttribute(payload) {
    this.ngRedux.dispatch({
      type: 'RENAME_GROUP_ATTRIB',
      payload: payload
    });
  }
  
  public createGroupAttribColumns(a) {
    return {
      headerName: '<span class="datatype datatype-pill datatype-groupattrib">' + a.name + '</span>',
      headerTextName: a.name,
      field: a.name,
      colId: (this.columnID++).toString(),
      width: 100,
      canDelete: false,
      cellRenderer: function (params) {
       return '<div>' + params.value + '</div>';
      },
      cellEditorFramework: MdInputNumberComponent,
      cellEditorParams: {
       input: [a.name, a.value]
      },
      editable: true
    }
  }
  
  // Add new group attribute modal
  modalAdd(): void {
    let dialogRef = this.dialog.open(GroupAttribAddModalComponent, {
      data: this.theColumnDefs,
      width: '30%'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result.data !== 'Cancel') {
        this.addGroupAttribute(result);
        this.groupHandler(this.theColumns);
        this.resizeGrid();
      };
    });
  }

  // Edit/delete group attribute Modal
  modalEdit(): void {
    let dialogRef = this.dialog.open(GroupAttribEditModalComponent, {
      data: this.theColumnDefs,
      width: '30%'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result.data !== 'Cancel') {
        if (result.action === 'ren') {
          this.renameGroupAttribute(result.d);
        }
        if (result.action === 'del') {
          this.removeGroupAttribute(result.d);
        }
        this.groupHandler(this.theColumns);
        this.resizeGrid();
      };
    });
  };

  public createNewRowData() {
    return {
      name: 'Name...',
      label: 'Label...',
      groupAttributes: [],
      wt: 0
    };
  }
  
  public onAddRow() {
    if (typeof this.gridOptions.api !== 'undefined') {
      this.gridOptions.api.updateRowData({add: [this.createNewRowData()]});
      const item = this.gridOptions.api.getModel();
      this.totalRows = item.getRowCount();
      // tell the reducer...
      this.addGroup();
      this.resizeGrid();
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
    this.insertGroup(index);
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
    this.insertGroup(index + 1);
  }

  /*
  public onAddColumn() {
    if (typeof this.gridOptions !== 'undefined') {
      if (this.columnTitle !== '' && this.columnTitle !== null) {
        // grab the column definition array.
        this.columnDefs = this.gridOptions.columnDefs;
        // add the new column.
        this.columnDefs.push({
          headerName: '<span class="datatype datatype-pill datatype-groupattrib">' + this.columnTitle + '</span>',
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
        colDef.headerName = '<span class="datatype datatype-pill datatype-groupattrib">' + this.columnTitle + '</span>';
        colDef.headerTextName = this.columnTitle;
        // the column is now updated... refresh the header.
        this.gridOptions.api.refreshHeader();
        // grab all the column definitions.
        this.columnDefs = this.gridOptions.columnDefs;
        // we also update the ColumnDef array!
        for (const column of this.columnDefs) {
          if (column.colId === this.columnSelect) {
            column.headerName = '<span class="datatype datatype-pill datatype-groupattrib">' + this.columnTitle + '</span>';
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
  */
  public onRemoveSelected($event) {
    // make sure this row is selected.
    $event.target.parentNode.parentNode.click();
    const selectedData = this.gridOptions.api.getSelectedRows();
    if (selectedData !== null) {
      this.gridOptions.api.updateRowData({remove: selectedData});
      // update the status bar.
      const item = this.gridOptions.api.getModel();
      this.totalRows = item.getRowCount();
      this.infoColor = '#500';
      this.selectedRow = 'none';
      // tell the reducer...
      this.deleteGroup(selectedData['0'].id)
    }
  }

  public onRemoveSelectedRow() {
    const selectedData = this.gridOptions.api.getSelectedRows();
    if (selectedData !== null) {
      this.gridOptions.api.updateRowData({remove: selectedData});
      // update the status bar.
      const item = this.gridOptions.api.getModel();
      this.totalRows = item.getRowCount();
      this.infoColor = '#500';
      this.selectedRow = 'none';
      // tell the reducer...
      this.deleteGroup(selectedData['0'].id)
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
  
};
