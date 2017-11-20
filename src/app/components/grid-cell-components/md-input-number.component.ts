import {
  Component,
  AfterViewInit,
  QueryList,
  ViewChildren,
  ViewContainerRef
} from '@angular/core';
import {ICellEditorAngularComp} from 'ag-grid-angular/main';

@Component({
  selector: 'app-input-number-cell',
  template: `
    <div class="container" tabindex="0" (keydown)="onKeyDown($event)">
      <md-input-container class="example-full-width">
        <input #input mdInput [required]="true" style="width:75px;"
               type="number" min="0" max="1000" step={{params.input[1]}}
               [(ngModel)]="Name" placeholder="{{params.input[0]}}">
      </md-input-container>
    </div>
  `,
  styles: [`
    .container {
      border-radius: 15px;
      border: 1px solid grey;
      background: #fff;
      width: 100px;
      padding-left: 15px;
    }
  `]
})
export class MdInputNumberComponent implements ICellEditorAngularComp, AfterViewInit {
  private params: any;
  private Name: string;
  private NameOriginal: string;
  private rowNumber: number;

  @ViewChildren('input', {read: ViewContainerRef}) public inputs: QueryList<any>;
  private focusedInput = 0;

  agInit(params: any): void {
    this.params = params;

    // simple implementation...
    if (typeof params.value === 'undefined') {
      params.value = 0;
    }
    this.Name = this.params.value;
    this.NameOriginal = this.params.value;
    this.rowNumber = this.params.rowIndex;
  }

  // don't use afterGuiAttached for post gui events...
  // hook into ngAfterViewInit instead for this
  ngAfterViewInit() {
    this.focusOnInputNextTick(this.inputs.first);
  }

  private focusOnInputNextTick(input: ViewContainerRef) {
    setTimeout(() => {
      input.element.nativeElement.focus();
      input.element.nativeElement.select();
    }, 0);
  }

  // done... pass the data onward...
  getValue() {
    // must wait for the row data to be updated.
    setTimeout(() => {
      if (typeof this.params.context.componentParent.editThisRow !== 'undefined') {
        if (this.Name !== this.NameOriginal) {
          this.params.context.componentParent.editThisRow(this.rowNumber);
        }
      }
    }, 500);
    // tell'em the new value...
    return `${this.Name}`;
  }

  isPopup(): boolean {
    return true;
  }

   // a little over complicated for what it is, but the idea 
   // is to illustrate how you might tab between multiple inputs...
   // say for example in full row editing.
  onKeyDown(event): void {
    const key = event.which || event.keyCode;
    if (key === 9) { // tab
      this.preventDefaultAndPropagation(event);

      // either move one input along, or cycle back to 0
      this.focusedInput = this.focusedInput === this.inputs.length - 1 ? 0 : (this.focusedInput + 1);

      const focusedInput = this.focusedInput;
      const inputToFocusOn = this.inputs.find((item: any, index: number) => {
        return index === focusedInput;
      });

      this.focusOnInputNextTick(inputToFocusOn)
    } else if (key === 13) { // enter
      // perform some validation on enter - in this example
      // we assume all inputs are mandatory in a proper
      // application you'd probably want to inform the user
      // that an input is blank.
      this.inputs.forEach((input) => {
        if (!input.element.nativeElement.value) {
          this.preventDefaultAndPropagation(event);
          this.focusOnInputNextTick(input);
        }
      });
    }
  }

  private preventDefaultAndPropagation(event) {
    event.preventDefault();
    event.stopPropagation();
  }
}
