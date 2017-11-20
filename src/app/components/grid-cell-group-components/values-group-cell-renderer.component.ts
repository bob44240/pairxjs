import {Component, Inject} from "@angular/core";
import {MdDialog, 
        MdDialogRef,
        MdDialogConfig,
        MD_DIALOG_DATA} from '@angular/material';
import {ICellRendererAngularComp} from "ag-grid-angular/main";

@Component({
  selector: 'group-row-cell',
  templateUrl: 'values-group-cell-renderer.component.html',
  styleUrls: ['values-group-cell-renderer.component.scss']
})
// main class starts here...
export class ValuesGroupCellRendererComponent implements ICellRendererAngularComp {
  // everything is here!
  private params: any;
  // [important!] our parent component...
  public values: any;
  // group-row title information...
  public group: string;
  public label: string;
  public count: string;
  // edit control flag...
  public doedit = false;
  // edit control targets...
  public nameedit: string;
  public labeledit: string;
  // need modal dialog crap...
  public dialogRef: MdDialogRef<any>;
    
  constructor(public dialog: MdDialog) {}
  
  agInit(params: any): void {
    // everything is 'baked' into params...
    this.params = params;
    // get access to our component parent...
    this.values = params.context.componentParent;
    // grab some important items...
    this.group = params.node.key;
    this.label = params.node.allLeafChildren["0"].data.label;
    this.count = params.node.allChildrenCount;
    // set up the edits...
    this.nameedit = this.group;
    this.labeledit = this.label;
  }

  refresh(): boolean {
    return false;
  }
  
  edittext() {
    this.doedit = true;
  }
  
  saveedit() {
    // check for duplicate name!
    if (typeof this.values.getNameDuplicate !== 'undefined') {
      if (this.group !== this.nameedit) {
        const match = this.values.getNameDuplicate(this.nameedit);
        if (match === true) {
          // tell'em about the error...
          this.dialogRef = this.dialog.open(ValuesGroupNameDialog,
            { data: { title: 'Edit name error', 
                      message: 'The new name, ' + this.nameedit + ', is already in use!' } 
            });
          // restore the edit...
          this.nameedit = this.group;
          // done...
          return;
        }
      }
    }
    // do the row update...
    this.UpdateRows();
    // grab the new stuff...
    this.group = this.nameedit;
    this.label = this.labeledit;
    // show the text...
    this.doedit = false;
  }
  
  canceledit() {
    // grab the new stuff...
    this.nameedit = this.group;
    this.labeledit = this.label;
    // show the text...
    this.doedit = false;
  }
  
  addrow() {
    this.onAddRow();
  }
  
  nameChange($event) {
  }
  
  labelChange($event) {
  }
  
  public createNewRowData() {
    return {
      name: this.group,
      label: '',
      strategy: 'All',
      state: 'RF',
      formula: 'Add Formula...',
    };
  }
  
  public onAddRow() {
    if (typeof this.values.gridOptions.api !== 'undefined') {
      this.values.gridOptions.api.updateRowData({add: [this.createNewRowData()]});
      if (typeof this.values.addThisRow !== 'undefined') {
        // tell the reducer...
        this.values.addThisRow(this.group);
        // show'em all again...
        this.values.gridOptions.api.forEachNode(function(node) {
          if (node.key === this.group) {
              node.setExpanded(true);
          }
        }.bind(this));
      }
    }
  }

  public UpdateRows() {
    let rowData = [];
    // fresh copy all data...
    this.values.gridOptions.api.forEachNode(function (node) {
      // not the group rows...
      if (typeof node.data !== 'undefined') {
        rowData.push(node.data);
      }
    });
    // map the object array => change name/label
    rowData.map((element, index) => 
      {
        if (element.name === this.group) {
          element.name = this.nameedit;
          if (element.label !== '') {
            element.label = this.labeledit;
          }
        }
      });
    // plug the rows back into the grid...
    this.values.gridOptions.api.setRowData(rowData);
    // do it again => update the reducer...
    this.values.gridOptions.api.forEachNode(function (node) {
      // not the group rows...
      if (typeof node.data !== 'undefined') {
        if (node.data.name === this.nameedit) {
          // tell the reducer...
          if (typeof this.values.editThisGroupRow !== 'undefined') {
            // tell the reducer...
            this.values.editThisGroupRow(node.data);
          }
        }
      }
    }.bind(this));
    // show'em all again...
    this.values.gridOptions.api.forEachNode(function(node) {
      if (node.key === this.nameedit) {
          node.setExpanded(true);
      }
    }.bind(this));
  }
}

@Component({
  selector: 'app-values-group-name-modal',
  template: `
    <div class="container" layout="column" 
         (keyup.esc)="dialogRef.close({data: 'ok'})">
      <md-card-title>{{data.title}}</md-card-title>
      <div class="container">
        {{data.message}}
      </div>
      <div class="modal-control" align="right" style="margin-top:8px;">
        <button md-button (click)="Close('ok')">
          Ok</button>
      </div>
    </div>
  `,
})
export class ValuesGroupNameDialog {
  constructor(public dialogRef: MdDialogRef<ValuesGroupNameDialog>,
              @Inject(MD_DIALOG_DATA) public data: any) {}
  public Close(result) {
    this.dialogRef.close({data: result })
  }
}