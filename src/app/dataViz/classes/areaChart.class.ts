import * as d3 from 'd3';
import { Chart } from './chart.class';
import { Group } from '../chartElements/group.class';
import { Area } from '../chartElements/area.class';
import { Circle } from '../chartElements/circle.class';
import { Segment } from '../chartElements/segment.class';
import { Rect } from '../chartElements/rectangle.class';
import { Axis } from '../chartElements/axis.class';
import { copyDataset } from '../functions/copyDataset.function';
import { pretty } from '../functions/pretty.function';
import { expand } from '../functions/expand.function';
import { LegendColor } from '../chartElements/legendColor.class';
import { Text } from '../chartElements/text.class';
/**
 *
 * An Area Chart object.
 *
 * @export
 * @class AreaChart
 */
export class AreaChart extends Chart {

  // Element properties
  private readonly area: Area = null;
  private readonly segment: Segment = null;
  private readonly points: Circle = null;
  private readonly xAxis: Axis = null;
  private readonly yAxis: Axis = null;
  private readonly xLabel: Text = null;
  private readonly yLabel: Text = null;
  private readonly legend: LegendColor = null;

  // Style properties
  private stack = false;

  // Scale Properties
  private xScale: any = d3.scaleLinear();
  private yScale: any = d3.scaleLinear();
  private seriesScale: any = d3.scaleBand();
  private colorScale: any = d3.scaleOrdinal(d3.schemeCategory10.slice());

  // Data properties
  private panelData: any[];
  private unScaledData: any[];
  private scaledData: any[];
  private brushedData: any[];
  private xLab = '';
  private yLab = '';
  private xFormat = '.1f';
  private yFormat = '.02f';

  /**
   * Creates an instance of an AreaChart object.
   *
   * @param {Selection} parent D3 selection of the parent element.
   * @param {string} selector CSS class used to tag elements of chart instance.
   * @param {*} [spec] Specifications object containing key-value pairs to set.
   * @memberOf AreaChart
   *
   */
  constructor(container: HTMLElement, selector: string, location: string, spec?: any){
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
      new Group(() => this.svg.elements(), selector + '-plot-layer0', {transform: 'translate(' + this.left + ',' + this.top + ')'}),
      new Group(() => this.svg.elements(), selector + '-plot-layer1', {
        transform: 'translate(' + this.left + ',' + this.top + ')',
        styles: {
          filter: 'url(' + this.location + '#' + this.selector + 'drop-shadow)'
        }
      }),
      new Group(() => this.svg.elements(), selector + '-plot-layer2', {transform: 'translate(' + this.left + ',' + this.top + ')' }),
      new Group(() => this.svg.elements(), selector + '-plot-layer3', {transform: 'translate(' + this.left + ',' + this.top + ')' }),
      new Group(
        () => this.svg.elements(),
        selector + '-plot-layer4',
        {transform: () => 'translate(' + (30 + this.width + this.left) + ',' + ((this.height / 3) - this.top) + ')'}
      )
      // new Group(() => this.svg.elements(), selector + '-plot-layer4', {transform: 'translate(' + this.left + ',' + this.top +')' })
    );

    this.area = new Area(
      () => this.layers[1].elements(),
      () => this.layers[2].elements(),
      selector + '-area',
      {
        id: d => d.id,
        pointId: d => d.x,
        x: d => d.xScale(d.x),
        y0: d => d.yScale(d.y0) + d.seriesScale(d.series),
        y1: d => d.yScale(d.y1) + d.seriesScale(d.series),
        fill: d => this.colorScale(d.group),
        fillOpacity: d => this.stack ? 0.8 : 0,
        stroke:  d => this.colorScale(d.group),
        duration: () => this.duration,
        delay: () => this.delay,
        strokeWidth: 1
      }
    );

    this.segment = new Segment(
      () => this.layers[0].elements(),
      selector + '-seg',
      {
        id: d => d.panel,
        x1: d => d.x1,
        y1: d => d.y1,
        x2: d => d.x2,
        y2: d => d.y2,
        stroke:  'black',
        strokeWidth: 4,
        duration: () => this.duration,
        delay: () => this.delay
      }
    );

    this.xAxis = new Axis(
      () => this.layers[0].elements(),
      selector + '-xAxis',
      'bottom',
      {
        id: d => d.id,
        transform: d => {
          const xTrans = 0,
                yTrans = this.seriesScale(d.id) + this.seriesScale.bandwidth();
          return 'translate(' + xTrans + ',' + yTrans + ')';
        },
        scale: () => this.xScale,
        tickValues: d => d.xTicks,
        post: (el, d, i) => {
          el.selectAll('path').remove();
          el.selectAll('line')
            .attr('stroke-width', 1)
            .attr('stroke-opacity', 0.5)
            .attr('stroke', '#666666');
          el.selectAll('text')
            .style('font-size', '14px')
            .attr('transform', 'translate(0,5)')
            .attr('fill', '#000000');
        },
        tickSizeInner: () => -this.seriesScale.bandwidth(),
        tickSizeOuter: 0,
        duration: () => this.duration,
        delay: () => this.delay,
        tickFormat: () => this.xFormat
      }
    );

    this.yAxis = new Axis(
      () => this.layers[0].elements(),
      selector + '-yAxis',
      'left',
      {
        id: d => d.panel,
        transform: d => {
          const xTrans = 0,
            yTrans = this.seriesScale(d.id);
          return 'translate(' + xTrans + ',' + yTrans + ')';
        },
        scale: () => this.yScale,
        tickValues: d => d.yTicks,
        post: (el, d, i) => {
          el.selectAll('path').remove();
          el.selectAll('line')
            .attr('stroke-width', 1)
            .attr('stroke-opacity', 0.5)
            .attr('stroke', '#666666');
          el.selectAll('text')
            .style('font-size', '14px')
            .attr('transform', 'translate(-5,0)')
            .attr('fill', '#000000');
        },
        tickSizeInner: () => -this.width,
        tickSizeOuter: 0,
        duration: () => this.duration,
        delay: () => this.delay,
        tickFormat: () => this.yFormat
      }
    );
    this.xLabel = new Text(
      () => this.layers[3].elements(),
      selector + '-x-axis-label',
      {
        x: d => this.width / 2,
        y: d => 30 + this.height - this.top - this.bottom,
        text: this.xLab,
        textAnchor: 'middle',
        dy: '.35em',
        fontSize: '16px',
        duration: () => this.duration,
        delay: () => this.delay
      }
    );
    this.yLabel = new Text(
      () => this.layers[3].elements(),
      selector + '-y-axis-label',
      {
        x: d => -(this.height - this.top - this.bottom) / 2,
        y: d => -65,
        transform: 'rotate(270)',
        text: this.yLab,
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
   *  Updated the transformed datasets and scales.
   *
   * @memberOf AreaChart
   */
  private dataPrep(){

    // Deep copy dataset
    const data = copyDataset(this.data);

    // Get Series
    const columns = d3.keys(data[0]).filter(function(column) {
      return column !== 'series' && column !== 'x'&& column !== 'id' && column !== 'title' ;
    });

    // Get panels
    const panels = d3.set(data.map(d => d.series)).values();
    this.panelData = [];

    // Nest data and prepare empty flat datasets
    const nested = d3.nest().key(function(d) {return d['series']; }).entries(data),
      flat = [],
      flatStacked = [];

    // Non-stacked dataset
    columns.forEach(column => {
      nested.forEach(panel => {
        flat.push({
          series: panel.values[0].series,
          id: panel.values[0].series + ':' + column,
          title: panel.values[0].title,
          group: column,
          values: panel.values.map(d =>{
            return {x: d.x, y0: 0, y1: d[column], series: panel.values[0].series, group: column};
          })
        });
      });
    });

    // Stacked dataset
    const stacker = d3.stack().keys(columns);
    nested.forEach(panel => {
      stacker(panel.values).forEach(column => {
        flatStacked.push({
          series: panel.values[0].series,
          id: panel.values[0].series + ':' + column.key,
          title: panel.values[0].title,
          group: column.key,
          values: column.map(d =>{
            return {x: d.data.x, y0: d[0], y1: d[1], series: panel.values[0].series, group: column.key};
          })
        });
      });
    });

    // Calculate ticks + boundaries
    const xMin: number = +d3.min(flatStacked.map(panel => d3.min(panel.values.map(obs => obs.x)))),
      xMax: number = +d3.max(flatStacked.map(panel => d3.max(panel.values.map(obs => obs.x)))),
      yMin = +d3.min(flatStacked.map(panel => d3.min(panel.values.map(obs => obs.y0).concat(panel.values.map(obs => obs.y1))))),
      yMax = +d3.max(flatStacked.map(panel => d3.max(panel.values.map(obs => obs.y0).concat(panel.values.map(obs => obs.y1))))),
      xExpanded = expand([xMin, xMax], 0, 0),
      yExpanded = expand([yMin, yMax], 0, 0),
      xTicks = pretty(xExpanded[0], xExpanded[1], 6),
      yTicks = [0, 0.2, 0.4, 0.6, 0.8, 1];

    this.seriesScale = d3.scaleBand()
      .domain(panels)
      .rangeRound([this.height - this.bottom - this.top, 0])
      .paddingInner(.1)
      .paddingOuter(0.05);

    this.unScaledData = [];

    // Decide on which dataset to used depending on stacking
    if (this.stack) {
      this.unScaledData = flatStacked;
    } else {
      this.unScaledData = flat;
    }
    // Update scales
    this.colorScale.domain(columns).range(d3.schemeCategory10.slice());

    this.xScale = d3.scaleLinear()
      .range([0, this.width])
      .domain([d3.min(xTicks), d3.max(xTicks)]);

    this.yScale = d3.scaleLinear()
      .range([this.seriesScale.bandwidth(), 0])
      .domain([0, 1]);

    // Pre-scale data
    this.unScaledData = [];
    if (this.stack) {
      this.unScaledData = flatStacked;
    } else {
      this.unScaledData = flat;
    }

    this.scaledData = this.unScaledData.map(series => {
      const newSeries = copyDataset(series) as any;
      const values = newSeries.values as any[];
      newSeries.values = values.map(point => {
        point.xScale = this.xScale;
        point.yScale = this.yScale;
        point.seriesScale = this.seriesScale;
        return point;
      });
      return newSeries;
    });
    panels.forEach(panel => this.panelData.push({id: panel, yTicks: yTicks, xTicks: xTicks}));
  }

  /**
   *
   * Draw the Area chart on the parent element;
   *
   * @return {AreaChart} The AreaChart object.
   * @memberOf AreaChart
   *
   */
  draw():AreaChart{
    // Save this for scoping issues in callbacks
    const that = this;

    // Update datasets and scales
    this.dataPrep();

    // Draw Parent Elements
    super.draw();

    // Update and draw chart elements
    this.xAxis.update({data: this.panelData}).draw();
    this.yAxis.update({data: this.panelData}).draw();
    this.area.update({
      data: this.scaledData
    }).draw();
    // this.points.update({
    //   data: this.unScaledData.map(d => d.values).reduce((a,b) => a.concat(b))
    // }).draw();
    this.xLabel
      .update({
        data: ['']
      })
      .draw();
    this.yLabel
      .update({
        data: ['']
      })
      .draw();
    this.legend
      .update({
        scale: this.colorScale,
         labelFormat: d3.format('10.2f'),
         labelOffset: 15,
        // ascending: (this.layout === 'grouped' || this.layout === 'simple') ? false : true
      })
      .draw();
    return this;
  }
}
