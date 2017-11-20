import { Component,
         Inject,
         OnInit,
         AfterViewInit,
         ViewChild,
         ElementRef,
         Input,
         OnChanges,
         OnDestroy } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from '../../interfaces/model.interface';
import {MdDialog, 
        MdDialogRef,
        MdDialogConfig,
        MD_DIALOG_DATA} from '@angular/material';

// unbelievable bull-shit...
interface Window {
  requestFileSystem: any;
  webkitRequestFileSystem: any;
  PERSISTENT: any;
  File: any;
  FileReader: any;
  FileList: any;
  Blob: any;
}
interface Navigator {
  webkitPersistentStorage: any;
}
// access to js functions....
declare var $: any;
declare var prettyPrint: any;
declare var window: Window;
declare var navigator: Navigator;

@Component({
  selector: 'app-model-settings',
  template: `
    <div>
      <div class="model-editor-tab mat-elevation-z6">
          <span>
            Model Editor Maintenance
          </span>
      </div>
      <div style="float:left;">
        <section style="margin-top: 12px;">
          <div style="margin-left: 8px;">
            <button md-raised-button color="accent" (click)="SaveModel();"
                    title="save the current model to local storage..."
                    style="width: 150px; margin-bottom: 4px;">
              Save Model
            </button>
          </div>
          <div style="margin-left: 8px;">
            <button md-raised-button color="accent" (click)="ExportModel();"
                    title="export the current model to your local disk..."
                    style="width: 150px; margin-bottom: 4px;">
              Export Model
            </button>
          </div>
          <div id="container">    
            <input type="file" id="file" class="inputfile" (change)='ImportModel($event)'/>
            <label for="file" title="import a model from your local disk...">
              Import Model
            </label>          
          </div>
        </section>
      </div>
      <div class="edit-panel">
        <table style="width: 95%" cellspacing="0">
          <tr>
            <td>
              <md-input-container style="width: 98%">
                <input mdInput required 
                       placeholder="Model Filename"
                       [(ngModel)]="modelFilename">
              </md-input-container>
            </td>
            <td>
              <md-input-container style="width: 98%">
                <input mdInput required 
                       placeholder="Model Author"
                       [(ngModel)]="modelAuthor">
              </md-input-container>
            </td>
          </tr>
        </table>
        <table style="width: 95%" cellspacing="0">
          <tr>
            <td>
              <md-input-container style="width: 98%">
                <input mdInput [mdDatepicker]="minDatePicker" 
                       [(ngModel)]="modelCreationDate" 
                       placeholder="Creation Date">
                <button mdSuffix [mdDatepickerToggle]="minDatePicker"></button>
              </md-input-container>
              <md-datepicker #minDatePicker [touchUi]="touch"></md-datepicker>
            </td>
            <td>
              <md-input-container style="width: 98%">
                <input mdInput [mdDatepicker]="maxDatePicker" 
                       [(ngModel)]="modelUpdateDate" 
                       placeholder="Update Date">
                <button mdSuffix [mdDatepickerToggle]="maxDatePicker"></button>
              </md-input-container>
              <md-datepicker #maxDatePicker [touchUi]="touch"></md-datepicker>
            </td>
          </tr>
        </table>
        <table style="width: 95%" cellspacing="0">
         <tr>
            <td>
              <md-input-container style="width: 100%">
                <input mdInput required 
                       placeholder="Model Project Description"
                        [(ngModel)]="modelDescription">
              </md-input-container>
            </td>
          </tr>
        </table>
        <table style="width: 95%" cellspacing="0">
         <tr>
            <td>
              <md-card [style.color]="statusColor">
                {{systemStatus}}
              </md-card>
            </td>
          </tr>
        </table>
      </div>
      <div class="clearfix"></div>
      <div id="colors">
        <h4>Reducer Data Viewer</h4>
        <pre #prettyElement id="colorcodeme" 
             [innerHtml]="colorCodeMeJson" 
             class="prettyprint lang-json"></pre>
      </div>
      <div id="files-server">
        <h4>Server Model Template File List</h4>
        <ul #filelistserverElement></ul>
      </div>
      <div id="files-local">
        <h4>Local Storage Model File List</h4>
        <ul #filelistlocalElement></ul>
      </div>
    </div>
  `,
  styles: [`
    img {
      -moz-transition: all 0.3s;
      -webkit-transition: all 0.3s;
      transition: all 0.3s;
    }

    img:hover {
      -moz-transform: scale(1.1);
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
    
    .inputfile {
      opacity: 0;
      overflow: hidden;
      position: absolute;
      z-index: -1;
    }
    
    label {
      width: 150px;
      border: 1px solid #000;
      border-radius: 4px;
      box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
      font-size: 16px;
      color: #000;
      margin-left: 8px;
      padding: 6px 12px;
      background-color: #ddd;
      display: inline-block;
    }
    
    label:hover {
      color: #fff;
      background-color: #000;
    }

    #colors {
      width: 40%;
      float: left;
    }

    #colorcodeme {
      -webkit-margin-before: -1em;
      color: #006;
      background: #F7F7F7;
      overflow-y: hidden;
      overflow-x: auto;
      border: 1px solid #000;
      font-size: 16px;
    }
    
    #files-local {
      width: 30%;
      float: right;
   }

    #files-local ul {
      -webkit-margin-before: -1em;
      padding-left: 8px;
      padding-top: 6px;
      height: 500px;
      overflow-y: auto;
      list-style: none;
      background: #F7F7F7;
      border-top: 1px solid #000;
      border-bottom: 1px solid #000;
    }
    
    #files-server {
      width: 30%;
      float: right;
   }

    #files-server ul {
      -webkit-margin-before: -1em;
      padding-left: 8px;
      padding-top: 6px;
      height: 500px;
      overflow-y: auto;
      list-style: none;
      background: #F7F7F7;
      border: 1px solid #000;
    }
    
    @media (min-width: 1001px) {
      .edit-panel {
        margin-top: 10px;
        float: right; 
        width: 86%;
      }
    }

    @media (max-width: 1000px) {
      .edit-panel {
        margin-top: 10px;
        width: 100%;
        clear: both;
      }
    }
    
    .mat-card {
      padding: 7px;
      font-size: 16px;
    }
    
    .clearfix {
      *zoom: 1;
    }

    .clearfix:before,
    .clearfix:after {
      display: table;
      line-height: 0;
      content: "";
    }

    .clearfix:after {
      clear: both;
    }
  `]
})
// main class starts here...
export class ModelSettingsComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {

  public subscriptions: Subscription[] = [];

  // All state transfer objects.
  @select() statestatus: Observable<any>;
  @select() modelheader: Observable<any>;
  public theStateStatus: any;
  public theModelHeader: any;
  // @Input getter/setter variables... see below.
  private _active = false;
  // access to the dom...
  @ViewChild('prettyElement') prettify: ElementRef;
  @ViewChild('filelistlocalElement') fileListLocal: ElementRef;
  @ViewChild('filelistserverElement') fileListServer: ElementRef;
  // operational area.
  public modelState: any;
  public goodDataString = '';
  public colorCodeMeJson = '';
  public isReady: boolean = false;
  // local file system...
  private filesystem: any = null;
  // reducer 'dirty' status...
  public reducerDirty: boolean = false;
  // model file information...
  public modelFilename: string = '';
  public modelAuthor: string = '';
  public modelDescription: string = '';
  public modelCreationDate: Date = new Date();
  public modelUpdateDate: Date = new Date();
  // system status message...
  public systemStatus: string = 'System Ready...';
  public statusColor: string = '#060';
  // template targets...
  protected modelFileListJSON: any = null;
  protected modelFileList: any = [];
  protected modelTemplate: any = null;
  protected headers: Headers;
  // file reader...
  protected reader: any = null;
  protected modelFileData: any = null;
  // need modal dialog crap...
  public dialogRef: MdDialogRef<any>;

  constructor(private ngRedux: NgRedux<IAppState>,
              private http: Http,
              public dialog: MdDialog) {
    // build 'json-content' headers...
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  ngOnInit() {
    // Grab the state status data.
    this.subscriptions.push(
      this.statestatus.subscribe(value => {
        this.statestatusHandler(value);
      })
    );
    // Grab the model header data.
    this.subscriptions.push(
      this.modelheader.subscribe(value => {
        this.modelheaderHandler(value);
      })
    );
  }

  private statestatusHandler (value) {
    // save the 'state name' data.
    this.theStateStatus = value;
    // update the reducer 'dirty' status...
    this.reducerDirty = this.theStateStatus.isDirty;
  }
  
  private modelheaderHandler (value) {
    // save the 'state name' data.
    this.theModelHeader = value;
  }
  
  ngAfterViewInit() {
    // the dom is ready...
    this.isReady = true;
    // allow for vendor prefixes...
    window.requestFileSystem = window.requestFileSystem ||
                               window.webkitRequestFileSystem;
    // start by requesting a FileSystem...
    if (window.requestFileSystem) {
      this.initFileSystem();
    } else {
      alert('Sorry! Your browser doesn\'t support the FileSystem API :(');
      // do the message update...
      this.setStatusCard('Sorry! Your browser doesn\'t support the FileSystem API :(', '#800');
    }
    // setup the file system...
    this.checkFileAPI();
    // read the server model template file list...
    this.LoadServerFileList()
  }

  // request a FileSystem and set the filesystem variable...
  private initFileSystem() {
    try {
      navigator.webkitPersistentStorage.requestQuota(1024 * 1024 * 20,
        function(grantedSize) {
          // request a file system with the granted size...
          window.requestFileSystem(window.PERSISTENT, grantedSize, function(fs) {
            // save the filesystem...
            this.filesystem = fs;
            // show the files...
            this.listFiles();
          }.bind(this));
        }.bind(this));
    }
    catch (e) {
      // do the message update...
      this.setStatusCard('initFileSystem() failed... ' + e.message, '#800');
    }
  }
  
  // check for the various File API support...
  private checkFileAPI() {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
      this.reader = new FileReader();
    } else {
      alert('The File APIs are not fully supported by your browser. Fallback required!');
      // do the message update...
      this.setStatusCard('The File APIs are not fully supported by your browser. Fallback required!', '#800');
    }
  }
  
  // get a list of all local storage files...
  private listFiles() {
    try {
      const dirReader = this.filesystem.root.createReader();
      let entries = [];
      // internal function... get all entries...
      let fetchEntries = function() {
        dirReader.readEntries(function(results) {
          if (!results.length) {
            this.displayEntries(entries.sort().reverse());
          } else {
            entries = entries.concat(results);
            fetchEntries();
          }
        }.bind(this));
      }.bind(this);
      // get the next entry...
      fetchEntries();
    }
    catch (e) {
      // do the message update...
      this.setStatusCard('listFiles() failed... ' + e.message, '#800');
    }
  }

  // show all entries in the file list control...
  private displayEntries(entries) {
    try {
      // clear out the current file browser entries...
      this.fileListLocal.nativeElement.innerHTML = '';
      // do it once for each file entry...
      entries.forEach(function(entry, i) {
        let li = document.createElement('li');
        // loadfile icon - dynamically created...
        let loadLink = document.createElement('img');
        loadLink.setAttribute('src', '/assets/loadfile.svg');
        loadLink.setAttribute("style", "margin-left:4px;cursor:pointer;height:24px;width:auto;vertical-align:top;");
        loadLink.setAttribute('title', 'click to load this file!');
        li.appendChild(loadLink);
        // delete icon - dynamically created...
        let delLink = document.createElement('img');
        delLink.setAttribute('src', '/assets/trash.svg');
        delLink.setAttribute("style", "margin-left:4px;cursor:pointer;height:22px;width:auto;vertical-align:top;");
        delLink.setAttribute('title', 'click to delete this file!');
        li.appendChild(delLink);
        // filename - dynamically created...
        let link = document.createElement('span');
        link.innerHTML = entry.name;
        link.setAttribute("style", "margin-left:4px;color:#006;font-size:18px;");
        li.appendChild(link);
        // save the new entry in the file list control...
        this.fileListLocal.nativeElement.appendChild(li);
        // event listener - load the file on link clicked...
        loadLink.addEventListener('click', function(e) {
          e.preventDefault();
          this.loadFileCheck('0', entry.name);
        }.bind(this));
        // event listener - delete the file on link clicked...
        delLink.addEventListener('click', function(e) {
          e.preventDefault();
          this.deleteFile(entry.name);
        }.bind(this));
      }.bind(this));
    }
    catch (e) {
      // do the message update...
      this.setStatusCard('displayEntries() failed... ' + e.message, '#800');
    }
  }

  // save a file to the local file system...
  private saveFile(filename, content) {
    this.filesystem.root.getFile(filename, {create: true}, function(fileEntry) {
      // write access to the file system...
      fileEntry.createWriter(function(fileWriter) {
        // write completion handler...
        fileWriter.onwriteend = function(e) {
          // update the file browser...
          this.listFiles();
          // do the message update...
          this.setStatusCard(filename + ' successfully save to local storage...', '#060');
        }.bind(this);
        // error handler...
        fileWriter.onerror = function(e) {
          // do the message update...
          this.setStatusCard('Error saving ' + filename, '#800');
        }.bind(this);
        // do the blob thing...
        const contentBlob = new Blob([content], {type: 'text/plain'});
        // just do it!
        fileWriter.write(contentBlob);
      }.bind(this));
    }.bind(this));
  }
  
  // get a file from the local file system or the server...
  private loadFileCheck(loader, filename) {
    // has the current model been changed?
    if(this.reducerDirty === true) {
      // prompt the user...
      this.dialogRef = this.dialog.open(ModelSettingsDialog,
        { data: { title: 'Model Settings - Overwrite Model',
                  buttonlabel: 'Overwrite Model',
                  message: 'Overwrite all current Model changes?' } 
        });
      // deal with the dialog results...
      this.dialogRef.afterClosed().subscribe(result => {
        if (typeof result === 'undefined') {
          return;
        } else if (result.data == 'ok') {
          // overwrite model... go load the file..
          this.fileLoadDispatch(loader, filename);
        }
      });
    } else {
      // model is clean... just load the file..
      this.fileLoadDispatch(loader, filename);
    }
  }
  
  // load the file requested by index... local or server...
  private fileLoadDispatch(index, filename) {
    switch(index) {
      case '0':
        this.loadLocalStorageFile(filename);
        break;
      case '1':
        this.loadServerModelTemplate(filename);
        break;
      case '2':
        this.loadModelFromLocalDisk(filename);
        break;
      default:
        break;
    }
  }

  // get a file from the local file system...
  private loadLocalStorageFile(filename) {
    this.filesystem.root.getFile(filename, {}, function(fileEntry) {
      // deal with the file entry...
      fileEntry.file(function(file) {
        const reader = new FileReader();
        // grab the contents...
        reader.onload = function(e) {
          // convert the string to data...
          let modeldata = JSON.parse(e.currentTarget.result);
          // load state...
          this.ngRedux.dispatch({
            type: 'LOAD_MODEL',
            payload: {
              state: modeldata
            }
          });
          // show it...
          this.prettyModel();
          // do the message update...
          this.setStatusCard('Local Storage file, '+ filename + ', successfully loaded into the reducer...', '#060');
        }.bind(this);
        // deal with trouble...
        reader.onerror = function(e) {
          // do the message update...
          this.setStatusCard('Error loading ' + filename, '#800');
        }.bind(this);
        // execute the file read...
        reader.readAsText(file);
      }.bind(this));
    }.bind(this));
  }

  // delete a file from the local file system...
  private deleteFile(filename) {
    // prompt the user...do they really want to delete this model...
    this.dialogRef = this.dialog.open(ModelSettingsDialog,
      { data: { title: 'Model Settings - Delete Model', 
                buttonlabel: 'Delete Model',
                message: 'Do you really want to delete this Model?' } 
      });
    // deal with the dialog results...
    this.dialogRef.afterClosed().subscribe(result => {
      if (typeof result === 'undefined') {
        return;
      } else if (result.data == 'ok') {
        // delete the model...
        this.filesystem.root.getFile(filename, {create: false}, function(fileEntry) {
          // deal with the file entry...
          fileEntry.remove(function(e) {
          // update the file browser...
          this.listFiles();
          // do the message update...
          this.setStatusCard(filename + ' successfully deleted from the local storage...', '#060');
        }.bind(this));
      }.bind(this));
      }
    });
  }
  
  private setStatusCard(message, color) {
    this.systemStatus = message;
    this.statusColor = color;
  }
  
  // Input getter/setter: active.
  // do a start-up wake-up push.
  get active(): boolean {
    return this._active;
  }

  @Input()
  set active(value: boolean) {
    this._active = value;
    if (this._active) {
      if(this.isReady) {
        this.prettyModel();
      }
    }
  }
  
  ngOnChanges(): void {
  }

  ngOnDestroy() {
    this.subscriptions.forEach(x => x.unsubscribe());
  }
  
  public prettyModel() {
    // get the reducer data...
    this.modelState = this.ngRedux.getState();
    // stringify the reducer object...
    this.goodDataString = JSON.stringify(this.modelState, null, 2);
    // just do it... cleanup the code...
    this.colorCodeMeJson = this.htmlEscape(this.goodDataString);
    // try to prevent css trouble...
    this.prettify.nativeElement.className = 'prettyprinted lang-json';
    // prettify the div contents...
    prettyPrint();
    // setup the model filename control...
    if (typeof this.modelState.modelheader.filename !== 'undefined') {
      this.modelFilename = this.modelState.modelheader.filename;
    }
    // setup the model author control...
    if (typeof this.modelState.modelheader.author !== 'undefined') {
      this.modelAuthor = this.modelState.modelheader.author;
    }
    // setup the model description control...
    if (typeof this.modelState.modelheader.description !== 'undefined') {
      this.modelDescription = this.modelState.modelheader.description;
    }
    // setup the model create date control...
    if (typeof this.modelState.modelheader.creatDate !== 'undefined') {
      this.modelCreationDate = new Date(this.modelState.modelheader.creatDate);
    }
    // setup the model update date control...
    if (typeof this.modelState.modelheader.updateDate !== 'undefined') {
      this.modelUpdateDate = new Date(this.modelState.modelheader.updateDate);
    }
  };
  
  // cleanup bad characters...
  public htmlEscape(s) {
    return s
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }
  
  // save a model...
  public SaveModel() {
    // clear the reducer 'dirty' flag...
    this.ngRedux.dispatch({
      type: 'RESET_DIRTY',
      payload: {
      }
    });
    // get the reducer data...
    this.modelState = this.ngRedux.getState();
    // get the model filename...
    this.modelState.modelheader.filename = '';
    if (this.modelFilename !== '') {
      this.modelState.modelheader.filename = this.modelFilename;
    }
    // get the model author...
    this.modelState.modelheader.author = '';
    if (this.modelAuthor !== '') {
      this.modelState.modelheader.author = this.modelAuthor;
    }
    // get the model description...
    this.modelState.modelheader.description = '';
    if (this.modelDescription !== '') {
      this.modelState.modelheader.description = this.modelDescription;
    }
    // get the model create date...
    this.modelState.modelheader.creatDate = '';
    if (typeof this.modelCreationDate !== 'undefined') {
      this.modelState.modelheader.creatDate = this.modelCreationDate.toLocaleDateString();
    }
    // get the model create date...
    this.modelState.modelheader.updateDate = '';
    if (typeof this.modelUpdateDate !== 'undefined') {
      this.modelState.modelheader.updateDate = this.modelUpdateDate.toLocaleDateString();
    }
    // stringify the reducer object...
    this.goodDataString = JSON.stringify(this.modelState, null, 2);
    // just save it now...
    this.saveFile(this.modelFilename, this.goodDataString);
  }
  
  // export a model...
  public ExportModel() {
    // clear the reducer 'dirty' flag...
    this.ngRedux.dispatch({
      type: 'RESET_DIRTY',
      payload: {
      }
    });
    // get the reducer data...
    this.modelState = this.ngRedux.getState();
    // get the model filename...
    this.modelState.modelheader.filename = '';
    if (this.modelFilename !== '') {
      this.modelState.modelheader.filename = this.modelFilename;
    }
    // get the model author...
    this.modelState.modelheader.author = '';
    if (this.modelAuthor !== '') {
      this.modelState.modelheader.author = this.modelAuthor;
    }
    // get the model description...
    this.modelState.modelheader.description = '';
    if (this.modelDescription !== '') {
      this.modelState.modelheader.description = this.modelDescription;
    }
    // get the model create date...
    this.modelState.modelheader.creatDate = '';
    if (typeof this.modelCreationDate !== 'undefined') {
      this.modelState.modelheader.creatDate = this.modelCreationDate.toLocaleDateString();
    }
    // get the model create date...
    this.modelState.modelheader.updateDate = '';
    if (typeof this.modelUpdateDate !== 'undefined') {
      this.modelState.modelheader.updateDate = this.modelUpdateDate.toLocaleDateString();
    }
    // stringify the reducer object...
    this.goodDataString = JSON.stringify(this.modelState, null, 2);
    // just save it now...
    var a = document.createElement("a");
    var file = new Blob([this.goodDataString], {type: 'application/json'});
    a.href = URL.createObjectURL(file);
    a.download = 'model.json';
    a.click();
  }
  
  // import a model dispatcher...
  public ImportModel(filename) {
    // check for 'dirty' reducer then dispatch...
    this.loadFileCheck('2', filename);
  }

  // import a model from the local disk...
  public loadModelFromLocalDisk(filename) {
    // make sure we can do this...
    if(filename.path["0"].files && filename.path["0"].files["0"]) {
        // got it... plug in the model...
        this.reader.onload = function (e) {
          // convert the string to data...
          this.modelFileData = JSON.parse(e.target.result);
          // load state...
          this.ngRedux.dispatch({
            type: 'LOAD_MODEL',
            payload: {
              state: this.modelFileData
            }
          });
          // show it...
          this.prettyModel();
          // do the message update...
          this.setStatusCard('Imported local disk file , '+ filename.path["0"].files["0"].name + ', successfully loaded into the reducer...', '#060');
        }.bind(this);
        // do it... read the model data from the local disk...
        this.reader.readAsText(filename.path["0"].files["0"]);
    }
 }
  
  // grab the server model template file list...
  public LoadServerFileList() {
    // just grab the data...
    this.http.get('/data/modelFileList.json')
      .map(res => res.json())
      .catch(this.handleError.bind(this))
      .subscribe((data) => {
        this.modelFileListJSON = data;
        // deal with each model template filename...
        this.modelFileListJSON.templates.forEach(item => {
          this.modelFileList.push(item['filename']);
        },this);
        // clear out the current file browser entries...
        this.fileListServer.nativeElement.innerHTML = '';
        // do it once for each filename...
        this.modelFileList.forEach(function(filename, i) {
          let li = document.createElement('li');
          // loadfile icon - dynamically created...
          let loadLink = document.createElement('img');
          loadLink.setAttribute('src', '/assets/loadfile.svg');
          loadLink.setAttribute("style", "margin-left:4px;cursor:pointer;height:24px;width:auto;vertical-align:top;");
          loadLink.setAttribute('title', 'click to load this file!');
          li.appendChild(loadLink);
          // filename - dynamically created...
          let link = document.createElement('span');
          link.innerHTML = filename;
          link.setAttribute("style", "margin-left:4px;color:#006;font-size:18px;");
          li.appendChild(link);
          // save the new entry in the file list control...
          this.fileListServer.nativeElement.appendChild(li);
          // event listener - load the file on link clicked...
          loadLink.addEventListener('click', function(e) {
            e.preventDefault();
            this.loadFileCheck('1', filename);
          }.bind(this));
        }.bind(this));
        // do the message update...
        this.setStatusCard('The server model file list, modelFileList.json, successfully processed...', '#060');
      });
  }
  
  // load the empty model...
  public loadServerModelTemplate(filename) {
    // just grab the data...
    this.http.get('/data/' + filename)
      .map(res => res.json())
      .catch(this.handleError.bind(this))
      .subscribe((data) => {
        this.modelTemplate = data;
        // load state...
        this.ngRedux.dispatch({
          type: 'LOAD_MODEL',
          payload: {
            state: this.modelTemplate
          }
        });
        // show it...
        this.prettyModel();
        // do the message update...
        this.setStatusCard('Server Template file, ' + filename + ', successfully loaded into the reducer...', '#060');
      });
  }
  
  private handleError(error: any) {
      // do the message update...
      this.setStatusCard(error, '#800');
      return Observable.throw(error);
  }
}

@Component({
  selector: 'app-model-settings-modal',
  template: `
    <div class="container" layout="column" 
         (keyup.esc)="dialogRef.close({data: 'Cancel'})">
      <md-card-title>{{data.title}}</md-card-title>
      <div class="container">
        {{data.message}}
      </div>
      <div class="modal-control" align="right" style="margin-top:8px;">
        <button md-button color="accent" (click)="Close('ok')">
        {{data.buttonlabel}}</button>
        <button md-button (click)="Close('cancel')">
          Cancel</button>
      </div>
    </div>
  `,
})
export class ModelSettingsDialog {
  constructor(public dialogRef: MdDialogRef<ModelSettingsDialog>,
              @Inject(MD_DIALOG_DATA) public data: any) {}
  public Close(result) {
    this.dialogRef.close({data: result })
  }
}