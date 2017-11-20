import {Component} from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular/main';

@Component({
    selector: 'app-checkbox-cell',
    template: `
      <md-checkbox class="grid-checkbox" [ngModel]="checked" (ngModelChange)="onChange($event)"></md-checkbox>
    `,
    styles: [`
      /deep/
      .grid-checkbox {
        /* horizontally align the checkbox */
        width: 100%;
        display: inline-block !important;
        margin-left: -50px !important;
        margin-top: -4px; /* to offset the cells internal padding - could be done in cells CSS instead*/

        /* vertically align the checkbox when not using the ag-material theme - should be the same as the 
        rowHeight - cell padding
           (you can of course alter the cell padding via CSS instead if you'd prefer)
        line-height: 42px;
         */
      }
    `
    ]
})
export class MdCheckboxComponent implements ICellRendererAngularComp {
  private params: any;
  private checked: boolean = false;
  private rowNumber: number;

  agInit(params: any): void {
    this.params = params;
    this.checked = this.params.value === 'On';
    this.rowNumber = this.params.rowIndex;
  }

  // demonstrates how you can do "inline" editing of a cell
  onChange(checked: boolean) {
    this.checked = checked;
    this.params.node.setDataValue(this.params.colDef, (this.checked ? 'On' : 'Off'));
    // must wait for the row data to be updated.
    setTimeout(() => {
      if (typeof this.params.context.componentParent.editThisRow !== 'undefined') {
        this.params.context.componentParent.editThisRow(this.rowNumber);
      }
    }, 500);
  }

  refresh(): boolean {
    return false;
  }
}
