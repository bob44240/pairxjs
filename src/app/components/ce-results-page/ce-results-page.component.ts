import { Component, OnInit, ViewChild, Input, OnDestroy } from '@angular/core';
import { CEChart } from '../../dataViz/classes/ceChart.class';
import { debounce } from '../../functions/debounce';
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from '../../interfaces/model.interface';
import { Subscription } from 'rxjs/Subscription';
import { GridOptions, RowAccumulator } from 'ag-grid/main';
import { Location } from '@angular/common';
import * as d3 from 'd3';

@Component({
  selector: 'app-ce-results-page',
  templateUrl: './ce-results-page.component.html',
  styleUrls: ['./ce-results-page.component.scss']
})
export class CeResultsPageComponent implements OnInit, OnDestroy {

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
    public chart: CEChart;

    // Plot area Dimensions
    public width = 400;
    public height = 200;

    // Chart margins
    public top = 10;
    public left = 100;
    public right = 150;
    public bottom = 25;

    public selector = 'frontier-chart';
    public data = [];
    public activeData = [];
    public strategies = [];
    public econOutcomes = [];
    public econOutcomesFilter: string = undefined;
    public healthOutcomes = [];
    public healthOutcomesFilter: string = undefined;
    public title = 'CE Frontier (costs_hc per qaly, $)';
    public numberFormat = '.02f';
    public xLabel = 'qalys';
    public yLabel = 'costs_hc';

    // Filter properties
    //public seriesFilter = (new Array(99)).fill(true, 0, 99);
    //public discounting = true;

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
      this.chart = new CEChart(
        this.chartParent.nativeElement,
        this.selector,
        this.location.path(),
        {
          data: this.activeData,
          width: this.width,
          height: this.height,
          top: this.top,
          bottom: this.bottom,
          left: this.left,
          right: this.right,
          yLab: this.yLabel,
          xLab: this.xLabel
          //label: this.outcomesFilter,
          //sort: this.sort,
          //valueFormat: this.numberFormat,
          //valueColors: this.valueColors
        }
      );
      this.init = true;
      this.subscriptions.push(
        this.bc_results.subscribe(res => {
          //const currentReferent = this.referent;
          //const currentSeriesFilter = this.seriesFilter;
          const currentHealthOutcomeFilter = this.healthOutcomesFilter;
          const currentEconOutcomeFilter = this.econOutcomesFilter;
          res = JSON.parse(JSON.stringify(res));
          this.data = res.ce;
          this.data.sort((a, b) => d3.ascending(a.series, b.series));
          this.healthOutcomes = this.getHealthOutcomes();
          this.econOutcomes = this.getEconOutcomes();
          this.updateData();
          //this.strategies = this.getStrategies();
          //this.outcomes = this.getOutcomes();
          // if (!currentSeriesFilter && this.strategies.length > 0) {
          //   this.seriesFilter = this.strategies[0];
          // }
          // if (!currentReferent && this.strategies.length > 0) {
          //   this.referent = this.strategies[0];
          // }
          if (!currentHealthOutcomeFilter && this.healthOutcomes.length > 0) {
            this.healthOutcomesFilter = this.healthOutcomes[0];
          }
          if (!currentEconOutcomeFilter && this.econOutcomes.length > 0) {
            this.econOutcomesFilter = this.econOutcomes[0];
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
            yLab: this.yLabel,
            xLab: this.xLabel
            // layout: this.layout,
            // label: this.outcomesFilter,
            // sort: this.sort,
            // valueFormat: this.numberFormat,
            // valueColors: this.valueColors
          }).draw();
        } else {
          this.chart.remove();
          if (this.tableGrid) {
            //this.tableGrid.gridOptions.api.setRowData(this.tableData);
            //this.tableGrid.gridOptions.api.setColumnDefs(this.tableColumns);
            //this.tableGrid.gridOptions.api.sizeColumnsToFit();
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
          //this.layout = 'bar';
          this.draw(1000, 500);
          break;
        case(2):
          //this.layout = 'waterfall';
          this.draw(1000, 500);
          break;
        default:
      }
    }

    public updateData() {
      const seriesList = new Set();
      this.activeData = JSON.parse(JSON.stringify(this.data))
      .map(x => {
        x.health_outcome = x.health_outcome.substring(6);
        x.econ_outcome = x.econ_outcome.substring(6);
        return x;
      })
      .filter(x => {
        return x.health_outcome === this.healthOutcomesFilter && x.econ_outcome === this.econOutcomesFilter;
      });
    }

    public updateTableData() {
      // const data = JSON.parse(JSON.stringify(this.data))
      //   .filter(x => x.outcome = this.outcomesFilter && (x.disc === this.discounting));
      // const items = this.getLineItems(this.outcomesFilter);
      // const tableData = [];
      // const strats = [this.referent];
      // const comps = [];
      // this.strategies.forEach((x, i) => {
      //   if (x !== this.referent && this.seriesFilter[i]) {
      //     strats.push(x);
      //     comps.push(x);
      //   }
      // });
      // items.forEach(outcome => {
      //   const row = {
      //     __category: outcome
      //   };
      //   strats.forEach(strat => {
      //     const item = data.filter(x => x.group === outcome && x.series === strat);
      //     row[strat] = d3.format(this.numberFormat)(item[0].value);
      //   });
      //   comps.forEach(strat => {
      //     const compString = this.referent + ' vs. ' + strat;
      //     const item = data.filter(x => x.group === outcome && x.series === compString);
      //     row['delta___' + strat] = d3.format(this.numberFormat)(item[0].value);
      //   });
      //   tableData.push(row);
      // });
      // this.tableColumns = [{headerName: '', field: '__category'}];
      // strats.forEach(x => {
      //   this.tableColumns.push({headerName: x, field: x});
      // });
      // this.tableColumns.push({
      //   headerName: this.referent + ' vs.',
      //   children: comps.map(x => {
      //     return {headerName: x, field: 'delta___' + x};
      //   })
      // });
      // const totalRow = {};
      // if (tableData.length > 0) {
      //   Object.keys(tableData[0]).forEach(x => {
      //     if (x === '__category') {
      //       totalRow[x] = 'Total';
      //     } else {
      //       totalRow[x] = d3.format(this.numberFormat)(d3.sum(tableData, y => y[x]));
      //     }
      //   });
      // }
      // this.tableData = tableData.concat(totalRow);
    }

    public openSidenav() {
      this.sidebar.open = true;
    }

    public onSidebarToggle($event) {
      this.updateDimensions();
      this.draw(450, 0);
    }

    // public getStrategies(): string[] {
    //   let list = this.data
    //       .map(x => x.series)
    //       .filter(x => !(x.match(' vs. ')));
    //   list = list.filter((x, i, a) => a.indexOf(x) === i);
    //   return list;
    // }

    public getHealthOutcomes(): string[] {
      let list = this.data.map(x => x.health_outcome.substring(6));
      list = list.filter((x, i, a) => a.indexOf(x) === i);
      return list;
    }

    public getEconOutcomes(): string[] {
      let list = this.data.map(x => x.econ_outcome.substring(6));
      list = list.filter((x, i, a) => a.indexOf(x) === i);
      return list;
    }

    // public getLineItems(outcome: string): string[] {
    //   let list = this.data
    //       .filter(x => x.outcome === outcome)
    //       .map(x => x.group);
    //   list = list.filter((x, i, a) => a.indexOf(x) === i);
    //   return list;
    // }

}
