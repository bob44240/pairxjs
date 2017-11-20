import { Component, OnInit, ViewChild, Input, OnDestroy } from '@angular/core';
import { BarChart } from '../../dataViz/classes/barChart.class';
import { debounce } from '../../functions/debounce';
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from '../../interfaces/model.interface';
import { Subscription } from 'rxjs/Subscription';
import { GridOptions, RowAccumulator } from 'ag-grid/main';
import { Location } from '@angular/common';
import * as d3 from 'd3';

@Component({
  selector: 'app-outcomes-results-page',
  templateUrl: './outcomes-results-page.component.html',
  styleUrls: ['./outcomes-results-page.component.scss']
})
export class OutcomesResultsPageComponent implements OnInit, OnDestroy {

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
    public chart: BarChart;

    public sortOptions: any[] = [
      {value: 'Orig', label: 'Original Order'},
      {value: 'A-Z', label: 'Alphabetaical (A-Z)'},
      {value: 'Z-A', label: 'Alphabetaical (Z-A)'},
      {value: '0-9', label: 'Numeric (0-9)'},
      {value: '9-0', label: 'Numeric (9-0)'}
    ];

    public sort = 'Orig';

    // Plot area Dimensions
    public width = 400;
    public height = 200;

    // Chart margins
    public top = 10;
    public left = 100;
    public right = 150;
    public bottom = 25;

    public selector = 'outcomes-chart';
    public stack = true;
    public layout = 'bar';
    public data = [];
    public activeData = [];
    public strategies = [];
    public outcomes = [];
    public title = 'Outcomes';
    public numberFormat = '.02f';
    public valueColors = ['#e74c3c', '#f7c1bb', '#fbedb7', '#c1f1d5', '#2ecc71'];

    // Filter properties
    public seriesType = 'Absolute';
    public referent: string = undefined;
    public seriesFilter = (new Array(99)).fill(true, 0, 99);
    public outcomesFilter: string = undefined;
    public discounting = true;

    // Grid properties
    public tableColumns = [];
    public tableData = [];
    public gridOptions: GridOptions;

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
      this.chart = new BarChart(
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
          label: this.outcomesFilter,
          sort: this.sort,
          valueFormat: this.numberFormat,
          valueColors: this.valueColors
        }
      );
      this.init = true;
      this.subscriptions.push(
        this.bc_results.subscribe(res => {
          const currentReferent = this.referent;
          const currentSeriesFilter = this.seriesFilter;
          const currentOutcomeFilter = this.outcomesFilter;
          res = JSON.parse(JSON.stringify(res));
          this.data = res.outcomes.map(row => {
            return row;
          });
          this.updateData();
          this.strategies = this.getStrategies();
          this.outcomes = this.getOutcomes();
          // if (!currentSeriesFilter && this.strategies.length > 0) {
          //   this.seriesFilter = this.strategies[0];
          // }
          if (!currentReferent && this.strategies.length > 0) {
            this.referent = this.strategies[0];
          }
          if (!currentOutcomeFilter && this.outcomes.length > 0) {
            this.outcomesFilter = this.outcomes[0];
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
            layout: this.layout,
            label: this.outcomesFilter,
            sort: this.sort,
            valueFormat: this.numberFormat,
            valueColors: this.valueColors
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
          this.draw(0, 0);
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
          this.layout = 'bar';
          this.draw(1000, 500);
          break;
        case(2):
          this.layout = 'waterfall';
          this.draw(1000, 500);
          break;
        default:
      }
    }

    public updateData() {
      const seriesList = new Set();
      let title = '';
      this.activeData = JSON.parse(JSON.stringify(this.data))
          .filter(x => {
            let seriesSelected;
            let index;
            if (this.seriesType === 'Absolute') {
              index = this.strategies.indexOf(x.series);
              seriesSelected = index !== -1 && this.seriesFilter[index];
            } else {
              const split = x.series.split(' vs. ');
              if (split.length === 2) {
                index = this.strategies.indexOf(split[1]);
                seriesSelected = split[0] === this.referent && index !== -1 && this.seriesFilter[index];
              } else {
                seriesSelected = false;
              }
            }
            if (seriesSelected) {
              seriesList.add(x.series);
              title = this.outcomesFilter + ' for ' + x.series;
            }
            return seriesSelected && (x.outcome === this.outcomesFilter) && (x.disc === this.discounting);
          })
          .map(x => {
            return x;
          });
      if (seriesList.size === 1) {
        this.title = title;
      } else {
        this.title = this.outcomesFilter;
      }
      this.updateTableData();
    }

    public updateTableData() {
      const data = JSON.parse(JSON.stringify(this.data))
        .filter(x => x.outcome = this.outcomesFilter && (x.disc === this.discounting));
      const items = this.getLineItems(this.outcomesFilter);
      const tableData = [];
      const strats = [this.referent];
      const comps = [];
      this.strategies.forEach((x, i) => {
        if (x !== this.referent && this.seriesFilter[i]) {
          strats.push(x);
          comps.push(x);
        }
      });
      items.forEach(outcome => {
        const row = {
          __category: outcome
        };
        strats.forEach(strat => {
          const item = data.filter(x => x.group === outcome && x.series === strat);
          row[strat] = d3.format(this.numberFormat)(item[0].value);
        });
        comps.forEach(strat => {
          const compString = this.referent + ' vs. ' + strat;
          const item = data.filter(x => x.group === outcome && x.series === compString);
          row['delta___' + strat] = d3.format(this.numberFormat)(item[0].value);
        });
        tableData.push(row);
      });
      this.tableColumns = [{headerName: '', field: '__category'}];
      strats.forEach(x => {
        this.tableColumns.push({headerName: x, field: x});
      });
      this.tableColumns.push({
        headerName: this.referent + ' vs.',
        children: comps.map(x => {
          return {headerName: x, field: 'delta___' + x};
        })
      });
      const totalRow = {};
      if (tableData.length > 0) {
        Object.keys(tableData[0]).forEach(x => {
          if (x === '__category') {
            totalRow[x] = 'Total';
          } else {
            totalRow[x] = d3.format(this.numberFormat)(d3.sum(tableData, y => y[x]));
          }
        });
      }
      this.tableData = tableData.concat(totalRow);
    }

    public openSidenav() {
      this.sidebar.open = true;
    }

    public onSidebarToggle($event) {
      this.updateDimensions();
      this.draw(450, 0);
    }

    public getStrategies(): string[] {
      let list = this.data
          .map(x => x.series)
          .filter(x => !(x.match(' vs. ')));
      list = list.filter((x, i, a) => a.indexOf(x) === i);
      return list;
    }

    public getOutcomes(): string[] {
      let list = this.data.map(x => x.outcome);
      list = list.filter((x, i, a) => a.indexOf(x) === i);
      return list;
    }

    public getLineItems(outcome: string): string[] {
      let list = this.data
          .filter(x => x.outcome === outcome)
          .map(x => x.group);
      list = list.filter((x, i, a) => a.indexOf(x) === i);
      return list;
    }

}
