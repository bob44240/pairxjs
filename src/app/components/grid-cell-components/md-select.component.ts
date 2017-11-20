import {Component, ViewContainerRef, ViewChild} from "@angular/core";
import {ICellEditorAngularComp} from "ag-grid-angular/main";

@Component({
  selector: 'radio-cell',
  template: `
    <div class="container" #group tabindex="0" (keydown)="onKeyDown($event)">
      <md-select [(ngModel)]="optionPick" 
                   [style.width]="selectWidth+'px'" >
        <md-option *ngFor="let option of options" [value]="option">
            {{ option }}
        </md-option>
      </md-select>
    </div>
  `,
  styles: [`
    .container {
        border-radius: 10px;
        border: 1px solid grey;
        background: #eee;
        width: auto;
        height: 48px;
        padding-left: 15px;
        padding-right: 15px;
    }
    
    .container:focus {
        outline: none;
    }
    
    .mat-select /deep/ .mat-select-trigger {
      min-width: 0px;
    }      
  `
  ]
})
export class MdSelectComponent implements ICellEditorAngularComp {
  private params: any;
  private options: string[];
  private optionPick: string;
  private selectedIndex: number;
  private selectWidth: number;
  private optionPickOriginal: string;
  private rowNumber: number;

  @ViewChild('group', {read: ViewContainerRef}) public group;

  agInit(params: any): void {
    this.params = params;
    this.optionPick = this.params.value;
    this.optionPickOriginal = this.params.value;
    this.options = this.params.options;
    this.selectWidth = this.params.dropdownWidth;
    this.rowNumber = this.params.rowIndex;

    this.selectedIndex = this.options.findIndex((item) => {
        return item === this.params.value;
    });
  }

  // don't use afterGuiAttached for post gui events...
  // hook into ngAfterViewInit instead for this
  ngAfterViewInit() {
    this.group.element.nativeElement.focus();
    this.selectFavouriteOptionBasedOnSelectedIndex();
  }

  private selectFavouriteOptionBasedOnSelectedIndex() {
    this.optionPick = this.options[this.selectedIndex];
  }

  // done... pass the data onward...
  getValue() {
    // must wait for the row data to be updated.
    setTimeout(() => {
      if (typeof this.params.context.componentParent.editThisRow !== 'undefined') {
        if (this.optionPick !== this.optionPickOriginal) {
          this.params.context.componentParent.editThisRow(this.rowNumber);
        }
      }
    }, 500);
    // tell'em the new value...
    return this.optionPick;
  }

  isPopup(): boolean {
    return true;
  }

   // a little over complicated for what it is, but the idea 
   // is to illustrate how you might tab between multiple inputs...
   // say for example in full row editing.
  onKeyDown(event): void {
    let key = event.which || event.keyCode;
    if (key === 38 || key === 40) {
      this.preventDefaultAndPropagation(event);

      if (key == 38) {            // up
        this.selectedIndex = this.selectedIndex === 0 ? (this.options.length - 1) : this.selectedIndex - 1;
      } else if (key == 40) {     // down
        this.selectedIndex = (this.selectedIndex === this.options.length - 1) ? 0 : this.selectedIndex + 1;
      }
      this.selectFavouriteOptionBasedOnSelectedIndex();
    }
  }

  private preventDefaultAndPropagation(event) {
    event.preventDefault();
    event.stopPropagation();
  }
}