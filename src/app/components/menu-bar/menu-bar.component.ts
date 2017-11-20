import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  template: `
    <div (window:resize)="onResize()" class="heRo-menu">
      <md-menu #fileMenu="mdMenu">
        <button md-menu-item> New </button>
        <button md-menu-item> Save </button>
        <button md-menu-item> Save As </button>
        <button md-menu-item> Open </button>
      </md-menu>
      <md-menu #editMenu="mdMenu">
        <button md-menu-item> Undo </button>
        <button md-menu-item> Redo </button>
      </md-menu>
      <md-menu #viewMenu="mdMenu">
        <button md-menu-item> Editor </button>
        <button md-menu-item> Viewer </button>
        <button md-menu-item> Dashboard </button>
      </md-menu>
      <md-toolbar *ngIf="this.width >= 601" class="heRo-main-toolbar">
        <span class='hero-h'>h</span>
        <span class='hero-e'>ē</span>
        <span class='hero-r'>R</span>
        <span class='hero-o'>o</span>
        <span class="toolbar-spacer"></span>
        <span><button md-menu-item [mdMenuTriggerFor]="fileMenu" class="toolbar-text">File</button></span>
        <span><button md-menu-item [mdMenuTriggerFor]="editMenu" class="toolbar-text">Edit</button></span>
        <span><button md-menu-item [mdMenuTriggerFor]="viewMenu" class="toolbar-text">View</button></span>
        <span><button md-menu-item class="toolbar-text">Settings</button></span>
        <span><button md-menu-item class="toolbar-text">Help</button></span>
      </md-toolbar>
      <md-menu #mainMenu="mdMenu">
        <button md-menu-item [mdMenuTriggerFor]="fileMenu" >File</button>
        <button md-menu-item [mdMenuTriggerFor]="editMenu">Edit</button>
        <button md-menu-item [mdMenuTriggerFor]="viewMenu">View</button>
        <button md-menu-item >Settings</button>
        <button md-menu-item >Help</button>
      </md-menu>
      <md-toolbar *ngIf="this.width < 601" class="heRo-main-toolbar">
        <span class='hero-h'>h</span>
        <span class='hero-e'>ē</span>
        <span class='hero-r'>R</span>
        <span class='hero-o'>o</span>
        <span class="heRo-filler"></span>
        <span>
          <button md-icon-button [mdMenuTriggerFor]="mainMenu">
            <md-icon class="toolbar-text">menu</md-icon>
          </button>
        </span>
      </md-toolbar>
      <br>
    </div>
  `,
  styles: [`
      .toolbar-text {
          color: white;
      }
      .toolbar-spacer {
        min-width: 30px;
      }
  `]
})
export class MenuBarComponent implements OnInit {

  private width: number;

  constructor() { }

  ngOnInit() {
      this.onResize();
  }

  onResize() {
      this.width = window.innerWidth;
  }

}
