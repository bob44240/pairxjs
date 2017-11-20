import { Component } from '@angular/core';

@Component({
  selector: 'app-tool-bar',
  template: `
    <div>
      <md-toolbar class="hero-menu mat-elevation-z2">
          <img src="/assets/heRo3_Logo.svg" 
               alt="PAI heRo3..."
               height="30px" width="auto">
        <span class='app-toolbar-text-fs app-model-text'>
          /&nbsp;Models&nbsp;/&nbsp;
        </span>
        <span class='app-toolbar-text-fs app-model-link'>
          <a class="home">
              Model Editor
          </a>
        </span>
        <span class="app-fill-remaining"></span>
        <md-icon title="help please!" 
                 class="app-toolbar-icon"
                 style="padding-right:10px;cursor:help">
          help
        </md-icon>
        <a routerLink="/landingpage">
          <md-icon title="home!"
                   class="app-toolbar-icon"
                   style="padding-top:5px">
            backup
          </md-icon>
        </a>
        <md-icon class="app-toolbar-icon">person</md-icon>
        <span class="app-toolbar-r">
            <a (click)="gotoR()">
                <img src="/assets/r-button.svg" 
                      alt="r-language"
                      title="learn all about R"
                      height="22" width="auto">
            </a>
        </span>
        <md-icon title="search"
                 class="app-toolbar-icon">
          search
        </md-icon>
      </md-toolbar>
    </div>
  `,
  styleUrls: ['toolbar.component.css']
})
export class ToolbarComponent {
  public URL = 'https://rstudio-pubs-static.s3.amazonaws.com/149679_0f07bbb45e5c4f3887d64c0152e0b747.html#/1'
  public strWindowFeatures = "location=yes,height=600,width=800,scrollbars=yes,status=yes";
  
  constructor() {}
  
  public gotoR() {
    const win = window.open(this.URL, "_blank", this.strWindowFeatures);
  }
}
