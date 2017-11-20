import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChild,
  ViewContainerRef,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import {trigger, animate, style, transition, state} from '@angular/animations';
import {ICellEditorAngularComp} from 'ag-grid-angular/main';

declare var Prism: any;

@Component({
  selector: 'app-formula-bar-edit-cell',
  template: `
    <div class="container">
      <div on-mouseover="inputShow()"
           on-mouseout="inputHide()"
           style="width:100%;background-color:#00004c;
                padding:8px 0px 4px 0px;white-space:nowrap;">
        <a>
          <img src="/assets/formula.svg"
               alt="variables"
               style="cursor:pointer;vertical-align:top;"
               title="formula!"
               height="24px" width="auto">
        </a>
        <div (click)="toggleEdit()"
             style="display:inline-block;background-color:#f0f0f0;
                    font-size:20px;width:80%;overflow:hidden;">
          <code #codeblock class="language-r" style="padding-left:6px;border-radius:4px;">
          </code>
        </div>
        <a>
          <img src="/assets/trash-white.svg"
               alt="clear"
               style="cursor:pointer;vertical-align:top;"
               (click)="emptyInput()"
               title="clear!"
               height="26px" width="auto">
        </a>
        <a>
          <img src="/assets/refresh.svg"
               alt="refresh"
               style="cursor:pointer;vertical-align:top;"
               (click)="highlight()"
               title="refresh!"
               height="24px" width="auto">
        </a>
        <div [@visibilityChanged]="visibility"
             style="margin:-14px 0px -14px 30px;"
             [style.display]="formulaDisplay">
          <md-input-container style="width:92%;color:#fff;font-size:18px;">
            <input #input mdInput [required]="true"
                   (keyup)="updateFormula($event)"
                   autofocus
                   [(ngModel)]="content">
          </md-input-container>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .container {
      border-radius: 5px;
      background: #00004c;
      width: 650px;
      padding-left: 15px;
    }

    img {
      -moz-transition: all 0.3s;
      -webkit-transition: all 0.3s;
      transition: all 0.3s;
    }

    img:hover {
      -moz-transform: scale(1.2);
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
    }

    code {
      white-space: pre-wrap; /* Since CSS 2.1 */
      white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
      white-space: -pre-wrap; /* Opera 4-6 */
      white-space: -o-pre-wrap; /* Opera 7 */
      word-wrap: normal; /* Internet Explorer 5.5+ */
      text-align: center;
    }
  `],
  animations: [
    trigger('visibilityChanged', [
      state('shown', style({opacity: 1})),
      state('hidden', style({opacity: 0})),
      transition('* => *', animate('.5s'))
    ])
  ]
})
export class MdFormulaBarEditComponent implements ICellEditorAngularComp, AfterViewInit, OnChanges {
  private params: any;
  private visibility = 'shown';
  private formulaDisplay = 'none';

  @ViewChild('input', {read: ViewContainerRef}) public input;
  @ViewChild('codeblock') codeElement: ElementRef;
  @Input() content = '';
  @Input() varnames: string[];
  @Input() badvarnames: string[];

  agInit(params: any): void {
    this.params = params;
    this.content = this.params.value;
  }

  getValue() {
    return this.content;
  }

  isPopup(): boolean {
    return true;
  }

  ngAfterViewInit() {
    this.highlight();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.highlight();
  }

  highlight() {
    const keywords = '\/$^\/';
    const badkeywords = '\/$^\/';
    // if (this.varnames.length > 0 ) {
    //  keywords = '\\b(?:' + this.varnames.reduce((a, b) => a + '|' + b) + ')\\b';
    // }
    // if (this.badvarnames.length > 0) {
    //  badkeywords = '\\b(?:' + this.badvarnames.reduce((a, b) => a + '|' + b) + ')\\b';
    // }
    Prism.languages.r['herovar'] = new RegExp(keywords, 'g');
    Prism.languages.r['badherovar'] = new RegExp(badkeywords, 'g');
    this.codeElement.nativeElement.innerHTML = this.content;
    Prism.highlightElement(this.codeElement.nativeElement);
  }

  updateFormula(event) {
    this.highlight();
  }

  inputShow() {
    // this.visibility = 'shown';
    setTimeout(() => {
      this.input.element.nativeElement.focus();
    }, 500);
  }

  inputHide() {
    // this.visibility = 'hidden';
  }

  emptyInput() {
    this.content = '';
    this.highlight();
  }

  toggleEdit() {
    if (this.formulaDisplay === 'none') {
      this.formulaDisplay = 'block';
      setTimeout(() => {
        this.input.element.nativeElement.focus();
        this.input.element.nativeElement.select();
      }, 500);
    } else {
      this.formulaDisplay = 'none';
    }
  }

}
