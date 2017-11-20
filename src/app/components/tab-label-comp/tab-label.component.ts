import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-tab-label-markup',
  template: `
    <div title="{{tabToolTip}}">
      <div [ngStyle]="getTabStyles()">{{tabName}}</div>
      <div [style.background-image]="backgroundImg"
           [ngStyle]="{ 'background': 'no-repeat center',
                                     'width': '100px', 
                                     'height': '30px' }">
        <img *ngIf='tabSelect' [src]="selectedImage"
             width="218" height="30" style="margin-left: -59px;"/>
      </div>
    </div>
  `
})
export class TabLabelComponent implements OnInit {

  @Input() tabName = 'SETTINGS';
  @Input() tabImage = 'new-node.svg';
  @Input() tabType = 'middle';
  @Input() tabDisabled = true;
  @Input() tabSelect = false;
  @Input() tabToolTip = '';

  imageUrl: string;
  backgroundImg: any;
  selectedImage = '/assets/selected-left.svg';

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.setTabImage();
  }

  setTabImage() {
    this.imageUrl = 'url(/assets/' + this.tabImage + ')';
    this.backgroundImg = this.sanitizer.bypassSecurityTrustStyle(this.imageUrl);
  }

  getTabStyles() {
    const tabStyles = {
      'font-size': this.tabSelect ? '16px' : '12px',
      'color' : this.tabDisabled ? '#fff' : '#fff'
    };
    return tabStyles;
  }
}
