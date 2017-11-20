import * as d3 from 'd3';
import * as d3tip from 'd3-tip';
import { Chart } from './chart.class';
import { Group } from '../chartElements/group.class';
import { Segment } from '../chartElements/segment.class';
import { Rect } from '../chartElements/rectangle.class';
import { Axis } from '../chartElements/axis.class';
import { Text } from '../chartElements/text.class';
import { copyDataset } from '../functions/copyDataset.function';
import { pretty } from '../functions/pretty.function';
import { expand } from '../functions/expand.function';
import { LegendColor } from '../chartElements/legendColor.class';

interface BarChartObs {
  series: string;
  id: string;
  value: number;
}

/**
 *
 * A Bar Chart object.
 *
 * @export
 * @class BarChart
 */
export class BarChart extends Chart {

    // Element properties
    private readonly bars: Rect = null;
    private readonly segments: Segment = null;
    private readonly zero: Segment = null;
    private readonly xAxis: Axis = null;
    private readonly yAxis: Axis = null;
    private readonly seriesTitle: Text = null;
    private readonly xLabel: Text = null;
    private readonly legend: LegendColor = null;

    // Style properties
    private valueColors = ['#e74c3c', '#f7c1bb', '#fbedb7', '#c1f1d5', '#2ecc71'];
    private layout = 'bar';
    private sort = '';

    // Scale properties
    private groupScale: any = d3.scaleBand();
    private seriesScale: any = d3.scaleBand();
    private valueScale: any = d3.scaleLinear();
    private seriesColorScale: any = d3.scaleOrdinal(d3.schemeCategory10);
    private valueColorScale: any = d3.scaleLinear();

    // Data properties
    private label = '';
    private originalData: BarChartObs[] = [];
    private transformedData: any[] = [];
    private seriesData: string[] = [];
    private brushedData: any[] = [];
    private xTicks: number[];
    private tip = d3tip().attr('class', 'd3-tip').direction('n').offset([0,0]).html(function(d) { return d; }); // : any;
    private valueFormat = '.02f';


    /**
     * Creates an instance of BarChart.
     * @param {HTMLElement} container
     * @param {string} selector
     * @param {*} [spec]
     *
     * @memberOf BarChart
     */
    constructor(container: HTMLElement, selector: string, location: string, spec?: any) {
        // parent constructor
        super(container, selector, location);
        // Keep this refernece to avoid scoping issues
        var that = this;

        // Updated properties
        if (spec) {
            this.update(spec);
        }
        // Add layers
        this.layers.push(
            new Group(
              () => this.svg.elements(),
              selector + '-plot-layer0',
              {transform: 'translate(' + this.left + ',' + this.top + ')' }
            ),
            new Group(
              () => this.svg.elements(),
              selector + '-plot-layer1',
              {transform: 'translate(' + this.left + ',' + this.top + ')' }),
            new Group(
              () => this.svg.elements(),
              selector + '-plot-layer2',
              {transform: 'translate(' + this.left + ',' + this.top + ')' }
            ),
            new Group(
              () => this.svg.elements(),
              selector + '-plot-layer3',
              {transform: 'translate(' + this.left + ',' + this.top + ')' }
            ),
          new Group(
            () => this.svg.elements(),
            selector + '-plot-layer4',
            {transform: () => 'translate(' + (30 + this.width + this.left) + ',' + ((this.height / 6) - this.top) + ')'}
          )
        );

        this.tip = d3tip()
          .attr('class', 'd3-tip')
          .direction('n')
          .offset([0, 0])
          .html(d => d.value);

        // Define Elements
        this.bars = new Rect(
          () => this.layers[2].elements(),
          selector + '-bar',
          {
            id: d => d.series + '-' + d.group,
            x: d => this.valueScale(Math.min(d.val0, d.val1)),
            width: d => Math.max(1, Math.abs(this.valueScale(d.val0) - this.valueScale(d.val1))),
            y: d => this.groupScale(d.group) + this.seriesScale(d.series),
            height: d => this.layout === 'grouped' ? this.seriesScale.bandwidth() : this.groupScale.bandwidth(),
            fill: d => this.layout === 'grouped' || this.layout == 'simple' ? this.seriesColorScale(d.series) : this.valueColorScale(d.value),
            fillOpacity: 1,
            styles: {
              filter: 'url(' + this.location + '#' + this.selector + 'drop-shadow)'
            },
            strokeWidth: 0,
            duration: () => this.duration,
            delay: () => this.delay,
            mouseOver: d => {
              this.tip.show(d);
              let color = this.layout === 'grouped' || this.layout == 'simple' ? this.seriesColorScale(d.series) : this.valueColorScale(d.value);
              d3.selectAll('.d3-tip')
                  .style('border-color', color)
                  .style('color', color)
                  .on('touchstart', this.tip.hide);
            },
            mouseOut: this.tip.hide
          }
        );

        this.segments = new Segment(
          () => this.layers[0].elements(),
          selector + '-seg',
          {
            id: d => d.series + '-' + d.group,
            x1: d => this.valueScale(d.val1),
            x2: d => this.valueScale(d.val1),
            y1: d => this.groupScale(d.group) + this.seriesScale(d.series) + this.groupScale.bandwidth(),
            y2: d => this.groupScale(d.group) + this.seriesScale(d.series) + this.groupScale.bandwidth() * 1 / (1 - 0.35),
            stroke: '#666666',
            strokeOpacity: 1,
            strokeWidth: 1,
            strokeDashArray: '2, 2',
            duration: () => this.duration,
            delay: () => this.delay
          }
        );

        this.zero = new Segment(
          () => this.layers[1].elements(),
          selector + '-zero',
          {
            id: d =>d,
            x1: d => this.valueScale(0),
            x2: d => this.valueScale(0),
            y1: d => this.layout === 'grouped' || this.layout === 'simple' ? 0 : this.seriesScale(d),
            y2: d => this.layout === 'grouped' || this.layout === 'simple' ? this.height - this.top - this.bottom : this.seriesScale(d) + this.seriesScale.bandwidth(),
            stroke: '#666666',
            strokeOpacity: 1,
            strokeWidth: 1,
            duration: () => this.duration,
            delay: () => this.delay
          }
        );

        //
        this.xAxis = new Axis(
          () => this.layers[1].elements(),
          selector + '-xAxis',
          'bottom',
          {
              id: d => d,
              transform: d => {
                  var yTrans = (this.layout === 'grouped' || this.layout === 'simple') ? this.height - this.top - this.bottom : this.seriesScale(d) + this.seriesScale.bandwidth()
                  return 'translate(' + 0 + ',' + yTrans + ')';
              },
              scale: () => this.valueScale,
              tickValues: () => this.xTicks,
              post: (el, d, i) => {
                  el.selectAll('path')
                    .remove();
                  el.selectAll('line')
                    .attr('stroke-width', 1)
                    .attr('stroke','#666666')
                    .attr('stroke-opacity', '0.1');
                  if(i === this.seriesData.length - 1){
                      el.selectAll('text').attr('opacity',1)
                  }else{
                      el.selectAll('text').attr('opacity',0)
                  }
              },
              tickSizeInner: () => (this.layout === 'grouped' || this.layout === 'simple') ? -(this.height - this.top - this.bottom) : -this.seriesScale.bandwidth(),
              tickSizeOuter: 0,
              duration: () => this.duration,
              delay: () => this.delay,
              tickFormat: () => this.valueFormat
          }
        );


        this.yAxis = new Axis(
          () => this.layers[1].elements(),
          selector + '-yAxis',
          'left',
          {
              id: d => d,
              transform: d => {
                  const yTrans = this.layout === 'grouped' || this.layout == 'simple' ? 0 : this.seriesScale(d)
                  return 'translate(' + 0 + ',' + yTrans + ')';
              },
              scale: () => this.layout === 'simple' ? this.seriesScale : this.groupScale,
              post: (el, d, i) => {
                  el.selectAll('path').remove();
                  el.selectAll('text')
                    .each(function(d) {
                        if (d === 'Total') {
                          d3.select(this)
                            .attr('font-weight', 'bold')
                            .attr('font-size', '14px');
                        } else {
                          d3.select(this)
                          .attr('font-weight', 'normal')
                          .attr('font-size', '14px');
                        }
                    });
              },
              tickSizeInner: 0,
              tickSizeOuter: 0,
              duration: () => this.duration,
              delay: () => this.delay
          }
        );

        this.seriesTitle = new Text(
          () => this.layers[3].elements(),
          selector + '-series-title',
          {
            id: d => d,
            x: d => this.width / 2,
            y: d => this.seriesScale(d) - 13,
            text: d => d,
            textAnchor: 'middle',
            dy: '.35em',
            fontSize: '16px',
            duration: () => this.duration,
            delay: () => this.delay
          }
        );

        this.xLabel = new Text(
          () => this.layers[3].elements(),
          selector + '-axis-label',
          {
            x: d => this.width / 2,
            y: d => 30 + this.height - this.top - this.bottom,
            text: () => this.label,
            textAnchor: 'middle',
            dy: '.35em',
            fontSize: '16px',
            duration: () => this.duration,
            delay: () => this.delay
          }
        );

        this.legend = new LegendColor(
          () => this.layers[4].elements(),
          selector + '-legend',
          {
            shapeHeight: 30,
            shapeWidth: 30,
            shapePadding: 5,
            post: (el) => {
                el
                  .selectAll('.label')
                  .attr('font-size', 14)
                  .attr('fill', '#000000');

                el
                  .selectAll('.legendTitle')
                  .attr('font-size', 16)
                  .attr('fill', '#000000');

                el
                  .selectAll('rect')
                  .attr('stroke', '#666666')
                  .style('filter', 'url(' + this.location + '#' + this.selector + 'drop-shadow)')
                  .attr('stroke-width', 1);
            }
          }
        );

    }

    /**
     * Prepare data
     *
     * @memberOf BarChart
     */
    private dataPrep(){

          // Deep copy dataset
          var data = copyDataset(this.data);

          //if (this.sort === '') { this.sort = '0-9'; }
          if (this.sort === '0-9') {
              // Sort datasets
              var sortedData = d3.set(data.map(d => d.group))
                .values()
                .sort((a, b) => {
                  return d3.ascending(
                    d3.sum(data.filter(d => d.group === a), x => x.value),
                    d3.sum(data.filter(d => d.group === b), x => x.value)
                  );
                })
                .map(group => data.filter(d => d.group == group));

              sortedData = [].concat.apply([], sortedData);
          } else if(this.sort === '9-0'){
              // Sort datasets
              var sortedData = d3.set(data.map(d => d.group))
                .values()
                .sort((a, b) => {
                  return d3.descending(
                    d3.sum(data.filter(d => d.group === a), x => x.value),
                    d3.sum(data.filter(d => d.group === b), x => x.value)
                  );
                })
                .map(group => data.filter(d => d.group == group));

              sortedData = [].concat.apply([], sortedData);

          } else if(this.sort === 'A-Z'){
              // Sort datasets
              var sortedData = d3.set(data.map(d => d.group))
                .values()
                .sort((a, b) => {
                  return d3.ascending(a, b);
                })
                .map(group => data.filter(d => d.group == group));

              sortedData = [].concat.apply([], sortedData);

          }  else if(this.sort === 'Z-A'){
              // Sort datasets
              var sortedData = d3.set(data.map(d => d.group))
                .values()
                .sort((a, b) => {
                  return d3.descending(a, b);
                })
                .map(group => data.filter(d => d.group == group));
              sortedData = [].concat.apply([], sortedData);

          }  else {
              sortedData = data;
          }
          // Get each series
          var allSeries = d3.set(data.map(d => d.series)).values();

          // Transform data
          this.transformedData = [];
          d3.nest()
            .key((d: BarChartObs): string => d.series)
            .entries(sortedData)
            .forEach(series => {
                var cumulative = 0;
                if(this.layout == 'waterfall'){
                    series.values.forEach(group => {
                      if(this.layout !== 'simple') {
                        cumulative += group.value;
                        this.transformedData.push({
                            series: group.series,
                            group: group.group,
                            value: group.value,
                            val0: cumulative - group.value,
                            val1: cumulative
                        });
                      }
                    });
                }else {
                    series.values.forEach(group => {
                        cumulative += group.value;
                        if(this.layout !== 'simple') {
                          this.transformedData.push({
                              series: group.series,
                              group: group.group,
                              value: group.value,
                              val0: 0,
                              val1: group.value
                          });
                        }
                    });
                }
                // Add an observation for total
                this.transformedData.push({
                  series: series.key,
                  group: 'Total',
                  value: cumulative,
                  val0: 0,
                  val1: cumulative
                });
            });


            // Update scales
            var valMin = d3.min(this.transformedData.map(d => Math.min(d.val0, d.val1))),
                valMax = d3.max(this.transformedData.map(d => Math.max(d.val0, d.val1))),
                absMax = Math.max(valMax, -valMin, 0),
                absMin = Math.min(-valMax, valMin, 0),
                valExpanded = expand([valMin,valMax], 0, 0, 0, 0.05);

            this.xTicks = pretty(valExpanded[0], valExpanded[1], 6);

            this.valueScale
              .domain(d3.extent(this.xTicks))
              .range([0,this.width]);

            if(this.layout === 'grouped'){
                this.groupScale
                    .paddingInner(.15)
                    .paddingOuter(0)
                    .domain(this.transformedData.map(d => d.group))
                    .range([0, this.height - this.top - this.bottom]);
                this.seriesScale
                    .paddingInner(.15)
                    .paddingOuter(.25)
                    .domain(allSeries)
                    .range([0, this.groupScale.bandwidth()]);
                this.seriesColorScale
                    .range(d3.schemeCategory10.slice(0,allSeries.length))
                    .domain(allSeries);
            } else if(this.layout === 'simple') {
                this.seriesScale
                    .paddingInner(.15)
                    .paddingOuter(0)
                    .domain(allSeries)
                    .range([25, this.height - this.top - this.bottom]);
                this.groupScale
                    .paddingInner(.35)
                    .paddingOuter(.25)
                    .domain(this.transformedData.map(d => d.group))
                    .range([0, this.seriesScale.bandwidth()]);

                this.seriesColorScale
                    .range(d3.schemeCategory10.slice(0,allSeries.length))
                    .domain(allSeries);
            } else {
                this.seriesScale
                    .paddingInner(.15)
                    .paddingOuter(0)
                    .domain(allSeries)
                    .range([25, this.height - this.top - this.bottom]);
                this.groupScale
                    .paddingInner(.35)
                    .paddingOuter(.25)
                    .domain(this.transformedData.map(d => d.group))
                    .range([0, this.seriesScale.bandwidth()]);

                const indivValueMin = d3.min(this.transformedData, d => d.value),
                      indivValueMax = d3.max(this.transformedData, d => d.value),
                      indivValueMaxAbs = Math.max(indivValueMax, -indivValueMin, 0),
                      indivValueMinAbs = Math.min(-indivValueMax, indivValueMin, 0);

                const colorTicks = indivValueMin >= 0 ? pretty(0, indivValueMaxAbs, 6) : pretty(indivValueMinAbs, indivValueMaxAbs, 6);

                this.legend.update({cells: colorTicks});

                this.valueColorScale
                    .domain([d3.min(colorTicks),0.001,0,0.001,d3.max(colorTicks)])
                    .range(this.valueColors.slice());
            }

            if(this.layout === 'grouped' || this.layout === 'simple') this.seriesData = [allSeries[allSeries.length - 1]];
            else this.seriesData = allSeries;
    }
    /**
     * Draw Bar Chart
     *
     * @returns {BarChart}
     *
     * @memberOf BarChart
     */
    public draw():BarChart{
        this.dataPrep();
        super.draw();
        let x = this.svg.elements();
        x.call(this.tip);
        this.xAxis
          .update({
            data: this.seriesData
          })
          .draw();

        this.yAxis
          .update({
            data: this.seriesData
          })
          .draw();

        this.zero
          .update({
            data: this.seriesData
          })
          .draw();

        this.segments
          .update({
            data: this.layout === 'waterfall' ? this.transformedData.filter(d => d.group !== 'Total') : []
          })
          .draw();

        this.seriesTitle
          .update({
            data: (this.layout === 'grouped' || this.layout === 'simple' || this.seriesData.length === 1) ? [] : this.seriesData
          })
          .draw();

        this.bars
          .update({
            data: this.transformedData
          })
          .draw();

        this.xLabel
          .update({
            data: ['']
          })
          .draw();
        this.legend
          .update({
            scale: (this.layout === 'grouped' || this.layout === 'simple') ? this.seriesColorScale : this.valueColorScale,
            labelFormat: d3.format(this.valueFormat),
            labelOffset: 15,
            ascending: (this.layout === 'grouped' || this.layout === 'simple') ? false : true
          })
          .draw();

        return this;
    }

}
