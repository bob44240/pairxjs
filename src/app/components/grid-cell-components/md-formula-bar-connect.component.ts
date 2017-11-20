import {
  Component,
  AfterViewInit,
  QueryList,
  ViewChildren,
  ViewContainerRef
} from '@angular/core';
import { ICellEditorAngularComp } from 'ag-grid-angular/main';
import { FormulaEditorService } from './../../services/formula-editor.service';

@Component({
  selector: 'app-formula-bar-connect-cell',
  template: `
    <div class="container class-with-tooltip" title="{{formula}}" tabindex="0">
      <div style="color:#006;">
        Use the Formula Bar above to enter your formula.
      </div>
      <div style="color:#060;">
        <span>Click</span>
        <img src="/assets/x.svg"
               style="margin:0px 1px 4px 1px;"
               height="16px" width="auto">
        <span>to cancel. Click</span>
        <img src="/assets/check.svg"
               style="margin:0px 1px 2px px;"
               height="16px" width="auto">
        <span>to save the formula.</span>
      </div>
    </div>
  `,
  styles: [`
    .container {
      border: 1px solid grey;
      background: #fff;
      width: 100%;
      height: 100%;
    }
  `]
})
export class MdFormulaBarConnectComponent implements ICellEditorAngularComp, AfterViewInit {
  private params: any;
  private formula: string;
  private formulabar: string;
  private formulaOriginal: string;
  private rowNumber: number;

  constructor(private formulaEditorService: FormulaEditorService) { }

  agInit(params: any): void {
    this.params = params;
    this.formula = this.params.value;
    this.formulaOriginal = this.params.value;
    this.formulabar = this.params.input[0];
    this.rowNumber = this.params.rowIndex;
    // comntact the formula bar...
    const fbTicket = this.formulaEditorService.addTicket(this.formulabar, this.formula);
    fbTicket.subscribe(value => {
      if (value !== 'abort') {
        this.formula = value;
      }
      // that is it... we are done!
      this.params.stopEditing();
    });
 }

  ngAfterViewInit() {
  }

  // done... pass the data onward...
  getValue() {
    // must wait for the row data to be updated.
    setTimeout(() => {
      if (typeof this.params.context.componentParent.editThisRow !== 'undefined') {
        if (this.formula !== this.formulaOriginal) {
          this.params.context.componentParent.editThisRow(this.rowNumber);
        }
      }
    }, 500);
    // tell'em the new value...
    return `${this.formula}`;
  }

  isPopup(): boolean {
    return false;
  }

  onKeyDown(event): void {
    const key = event.which || event.keyCode;
    if (key === 13) {
    }
  }
  private preventDefaultAndPropagation(event) {
    event.preventDefault();
    event.stopPropagation();
  }
}
