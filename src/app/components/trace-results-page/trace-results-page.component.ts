import { Component, OnInit, ViewChild, Input, OnDestroy } from '@angular/core';
import { AreaChart } from '../../dataViz/classes/areaChart.class';
import { debounce } from '../../functions/debounce';
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from '../../interfaces/model.interface';
import { Subscription } from 'rxjs/Subscription';
import { GridOptions } from 'ag-grid/main';
import { Location } from '@angular/common';
import * as d3 from 'd3';

@Component({
  selector: 'app-trace-results-page',
  templateUrl: './trace-results-page.component.html',
  styleUrls: ['./trace-results-page.component.scss']
})
export class TraceResultsPageComponent implements OnInit, OnDestroy {

  public subscriptions: Subscription[] = [];

  @ViewChild('chartParent') chartParent;
  @ViewChild('chartGrandparent') chartGrandparent;
  @ViewChild('sidebar') sidebar;
  @ViewChild('tableGrid') tableGrid;

  @select() bc_results;

  public init = false;
  public _active = false;
  public modeIndex = 0;

  public sidenavOpen = false;
  public sidenavWidth = 400;
  public chart: AreaChart;

  // Plot area Dimensions
  public width = 400;
  public height = 200;

  // Chart margins
  public top = 10;
  public left = 100;
  public right = 150;
  public bottom = 25;

  public selector = 'trace-chart';
  public stack = true;
  public data = [];
  public activeData = [];
  public tableData = [];
  public seriesFilter: string = undefined;
  public tableColumns = [];
  public strategies = [];
  public gridOptions: GridOptions;
  public traceFormat = '.02f';
  public timeFormat = '.1f';

  public onResize = debounce(() => {
    this.updateDimensions();
    this.draw(0, 0);
  }, 20, false);

  constructor(private location: Location) {
    this.gridOptions = <GridOptions>{
        columnDefs: this.tableColumns,
        onGridReady: () => this.draw(0,0),
        enableSorting: true,
        rowSelection: 'single',
        rowHeight: 48,
        //domLayout: 'autoHeight',
        suppressHorizontalScroll: true,
        context: {
          componentParent: this
        },
        overlayNoRowsTemplate: '<div style="padding:10px;border-bottom:solid thin #d0d0d0;background:#ededed;">' +
        'There are no rows to display...</div>'
    };
  }

  ngOnInit() {
    this.chart = new AreaChart(
      this.chartParent.nativeElement,
      this.selector,
      this.location.path(),
      {
        data: this.data,
        width: this.width,
        height: this.height,
        top: this.top,
        bottom: this.bottom,
        left: this.left,
        right: this.right,
        stack: this.stack,
        xLab: 'Years',
        yLab: 'Probability',
        xFormat: this.timeFormat,
        yFormat: this.traceFormat
      }
    );
    this.tableColumns = this.getColumnDefs();
    this.init = true;
    this.subscriptions.push(
      this.bc_results.subscribe(res => {
        const currentSeriesFilter = this.seriesFilter;
        res = JSON.parse(JSON.stringify(res));
        this.data = res.trace.map(row => {
          row.x = row.model_year;
          delete row.model_day;
          delete row.model_week;
          delete row.model_month;
          delete row.model_year;
          return row;
        });
        this.updateData();
        this.strategies = this.getStrategies();
        if (!currentSeriesFilter && this.strategies.length > 0) {
          this.seriesFilter = this.strategies[0];
        }
        this.draw(1000, 500);
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(x => x.unsubscribe());
  }

  public draw(duration: number, delay: number) {
    if (this.init && this._active) {
      this.updateData();
      if (this.modeIndex !== 0) {
        this.chart.update({
          duration: duration,
          delay: delay,
          data: this.activeData,
          width: this.width,
          height: this.height,
          top: this.top,
          bottom: this.bottom,
          left: this.left,
          right: this.right,
          stack: this.stack
        }).draw();
      } else {
        this.chart.remove();
        if (this.tableGrid) {
          this.tableGrid.gridOptions.api.setRowData(this.tableData);
          this.tableGrid.gridOptions.api.setColumnDefs(this.tableColumns);
          this.tableGrid.gridOptions.api.sizeColumnsToFit();
        }
      }
    }
  }

  // We need to make sure that it always redraws
  // When the tab is made active. We use this
  // setter method to force that.
  get active(): boolean {
    return this._active;
  }
  @Input()
  set active(value: boolean) {
    this._active = value;
    if (this._active && this.init) {
      this.updateDimensions();
      if (this.modeIndex === 0) {
        setTimeout(() => this.draw(0, 0), 300);
      } else {
        setTimeout(() => this.draw(0, 0), 20);
      }
    } else if(this._active && this.init && this.modeIndex !== 0) {
      this.chart.remove();
    }
  }

  updateDimensions() {
    this.height = this.chartParent.nativeElement.offsetHeight - this.top - this.bottom - 50;
    this.width = this.chartGrandparent.nativeElement.offsetWidth - this.left - this.right;
    if (this.sidebar.open) {
      this.width -= this.sidenavWidth;
    }
  }

  public setDisplayMode(index: number) {
    this.modeIndex = index;
    switch (index) {
      case(0):
        this.chart.remove();
        break;
      case(1):
        this.stack = false;
        this.chart.update({stack: this.stack});
        this.draw(1000, 500);
        break;
      case(2):
        this.stack = true;
        this.chart.update({stack: this.stack});
        this.draw(1000, 500);
        break;
      default:
    }
  }

  public updateData() {
    this.activeData = JSON.parse(JSON.stringify(this.data))
        .filter(x => x.series === this.seriesFilter)
        .map(x => {
          x.series = '';
          return x;
        });
    this.tableData = JSON.parse(JSON.stringify(this.activeData))
        .map(x => {
          Object
              .keys(x)
              .filter(y => ['series', 'x'].indexOf(x) === -1)
              .forEach(y => x[y] = d3.format(this.traceFormat)(x[y]));
          x.x = d3.format(this.timeFormat)(x.x);
          return x;
        });
    this.tableColumns = this.getColumnDefs();
  }

  public openSidenav() {
    this.sidebar.open = true;
  }

  public onSidebarToggle($event) {
    this.updateDimensions();
    this.draw(450, 0);
  }

  public getColumnDefs() {
    if (this.activeData.length > 0) {
      const ignoredKeys = ['x', 'series'];
      const predefinedColumns = [{headerName: 'Year', field: 'x'}];
      const stateColumns = Object.keys(this.activeData[0])
          .filter(x => ignoredKeys.indexOf(x) === -1)
          .map(x => { return {headerName: x, field: x}; });
      return predefinedColumns.concat(stateColumns);
    }
  }

  public getStrategies(): string[] {
    let list = this.data.map(x => x.series);
    list = list.filter((x, i, a) => a.indexOf(x) === i);
    return list;
  }

}
