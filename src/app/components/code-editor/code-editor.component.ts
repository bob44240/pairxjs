import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { debounce } from '../../functions/debounce';
import { ComputeService } from './../../services/compute.service';
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from '../../interfaces/model.interface';
import { HeroMat2ModalDialogComponent } from '../hero-mat2-modal-dialog/hero-mat2-modal-dialog.component';
import { HeroMatRenameDialogComponent } from '../hero-mat-rename-dialog/hero-mat-rename-dialog.component';
import { MdDialogModule, MdDialogRef, MdDialog } from '@angular/material';

interface ICodeFile {
  id: string;
  name: string;
  text: string;
}

declare var ace: any;
declare var $: any;
declare var ocpu: any;

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss']
})
export class CodeEditorComponent implements AfterViewInit, OnInit, OnDestroy {

  public subscriptions: Subscription[] = [];

  @ViewChild('editorElement') element: ElementRef;
  @select() scripts;
  public content = '';
  public init = false;
  public activeIndex = 0;
  private _active = false;
  public editor: any = null;
  public testHTML: SafeHtml = null;
  private mdRequest: Subscription;

  public files: ICodeFile[];

  constructor(
    private ngRedux: NgRedux<IAppState>, private sanitizer: DomSanitizer,
    private computeService: ComputeService,
    public dialog: MdDialog
  ) { }

  ngOnInit() {
    this.testHTML = this.sanitizer.bypassSecurityTrustHtml('');
    this.subscriptions.push(
      this.scripts.subscribe(scriptArray => this.files = scriptArray)
    );
  }

  ngAfterViewInit() {

    // Initialize the code editor
    this.editor = ace.edit(this.element.nativeElement);
    this.editor.setTheme('ace/theme/chrome');
    this.editor.getSession().setMode('ace/mode/r');
    this.editor.setFontSize('14px');
    this.editor.setOptions({
      wrap: true,
      indentedSoftWrap: false
    });

    // Have the preview window update every time the editor
    // changes, use debouncing to make sure server isn't
    // flooded with requests.
    const update = debounce(() => this.renderPreview(), 2000, false);
    const change = debounce(() => this.updateText(), 1000, false);
    this.editor.on('change', update);

    // Also make sure the text contents is updated onchange
    this.editor.on('change', change);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(x => x.unsubscribe());
  }

    // Input getter/setter: active.
    // do a start-up wake-up push.
    get active(): boolean {
      return this._active;
    }
    @Input()
    set active(value: boolean) {
      this._active = value;
      // Render the preview window
      this.renderPreview();
      if (this._active && !this.init) {
        this.init = true;
      }
    }

  selectFile(i: number) {
    // Update the active index and contents
    if (!this.files[i]) {
      i = 0;
    }
    if (this.files[i]) {
      this.activeIndex = i;
      this.editor.getSession().setValue(this.files[i].text);
      // Clear out the preview and re-render
      this.testHTML = this.sanitizer.bypassSecurityTrustHtml('');
      this.renderPreview();
    }
  }

  updateText() {
    const file = this.files[this.activeIndex];
    if (file) {
      file.text = this.editor.getSession().getValue();
      this.ngRedux.dispatch({
        type: 'EDIT_SCRIPT',
        payload: file
      });
    }
  }

  renderPreview() {
    // Unsubscribe to previous request if there is one
    if (this.init && this._active) {
      if (this.mdRequest) {
        this.mdRequest.unsubscribe();
      }
      this.mdRequest = this.computeService.renderMd(this.editor.getSession().getValue())
        .first()
        .subscribe(text => {
          if (!text) {
            text = '';
          }
          this.testHTML = this.sanitizer.bypassSecurityTrustHtml(text);
        });
    }
  }

  newFile() {
    const dia = this.dialog.open(HeroMatRenameDialogComponent, {
      data: {
        placeholder: 'New Script Name',
        OKButton: 'Add Table'
      },
      width: '30%'
    });
    dia.afterClosed().subscribe(response => {
      if (response.name.length > 1) {
        this.ngRedux.dispatch({
          type: 'ADD_SCRIPT',
          payload: {
            name: response.name,
            text: ''
          }
        });
      }
    });
  }

  deleteScript(script) {
    const dia = this.dialog.open(HeroMat2ModalDialogComponent, {
      data: {
        name: script.name
      },
      width: '30%'
    });
    dia.componentInstance.Title = script.name;
    dia.afterClosed().first().subscribe(response => {
      if (response.data === 'Yes') {
        this.ngRedux.dispatch({
          type: 'REMOVE_SCRIPT',
          payload: script.id
        });
      }
    });
  };

  renameScript(script) {
    const dia = this.dialog.open(HeroMatRenameDialogComponent, {
      data: {
        OKButton: 'Rename',
        placeholder: script.name
      },
      width: '30%'
    });
    dia.afterClosed().first().subscribe(response => {
      if (response.name.length > 2) {
        const newScript = script;
        newScript.name = response.name;
        this.ngRedux.dispatch({
          type: 'EDIT_SCRIPT',
          payload: newScript
        });
      }
    });
  };
}
