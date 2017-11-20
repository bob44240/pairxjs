import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChild,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular/main';

declare var Prism: any;

@Component({
  selector: 'app-formula-bar-view-cell',
  template: `
    <div>
      <code #codeblock class="language-r"></code>
    </div>
  `,
  styles: [`
  `]
})
export class MdFormulaBarViewComponent implements ICellRendererAngularComp, AfterViewInit, OnChanges {
  private params: any;
  private content;
  @ViewChild('codeblock') codeElement: ElementRef;

  ngAfterViewInit() {
    this.highlight();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.highlight();
  }

  agInit(params: any): void {
    this.params = params;
    this.content = this.params.value;
    this.highlight();
  }

  refresh(): boolean {
    this.highlight();
    return false;
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
}
