import * as d3 from 'd3';
import { Chart } from './chart.class';
import { Group} from '../chartElements/group.class';
import { Segment } from '../chartElements/segment.class';
import { Axis } from '../chartElements/axis.class';
import { Text } from '../chartElements/text.class';
import { Frontier } from '../chartElements/frontier.class';
import { pretty } from '../functions/pretty.function';
import { expand } from '../functions/expand.function';
import { LegendColor } from '../chartElements/legendColor.class';

/**
 *
 * An CE Chart object.
 *
 * @export
 * @class CEChart
 */
export class CEChart extends Chart {

    // Element properties
    private readonly xAxis: Axis = null;
    private readonly yAxis: Axis = null;
    private readonly frontier: Frontier = null;
    private readonly xLabel: Text = null;
    private readonly yLabel: Text = null;
    private readonly legend: LegendColor = null;

    // Scale properties
    private xScale: Function = null;
    private yScale: Function = null;
    private colors: string[] = d3.schemeCategory10;
    private seriesColorScale: Function = d3.scaleOrdinal(this.colors);

    private xFormat = '.2f';
    private yFormat = ',.0f';

    // Data properties
    private current: string = null;
    private xTicks: number[] = [];
    private yTicks: number[] = [];

    private xLab = '';
    private yLab = '';

    private layout = 'frontier';

    /**
     * Creates an instance of an CEChart object.
     *
     * @param {Selection} parent D3 selection of the parent element.
     * @param {string} selector CSS class used to tag elements of chart instance.
     * @param {*} [spec] Specifications object containing key-value pairs to set.
     * @memberOf CEChart
     *
     */
    constructor(container: HTMLElement, selector: string, location: string, spec?: any) {

        // parent constructor
        super(container, selector, location);
        // Keep this refernece to avoid scoping issues
        const that = this;
        // Updated properties
        if (spec) {
            this.update(spec);
        }
        // Add layers
        this.layers.push(
            new Group(() => this.svg.elements(), selector + '-plot-layer0', {transform: 'translate(' + this.left + ',' + this.top +')' }),
            new Group(() => this.svg.elements(), selector + '-plot-layer1', {transform: 'translate(' + this.left + ',' + this.top +')' }),
            new Group(() => this.svg.elements(), selector + '-plot-layer2', {transform: 'translate(' + this.left + ',' + this.top +')' }),
            new Group(() => this.svg.elements(), selector + '-plot-layer3', {transform: 'translate(' + this.left + ',' + this.top +')' }),
            new Group(
                () => this.svg.elements(),
                selector + '-plot-layer4',
                {transform: () => 'translate(' + (30 + this.width + this.left) + ',' + ((this.height / 3) - this.top) + ')'}
            )
        );

        this.frontier = new Frontier(
          () => this.layers[1].elements(),
          this.selector + '-frontier',
          {
            id: d => d.series,
            cx: d => this.xScale(d.eff),
            cy: d => this.yScale(d.cost),
            r: 7,
            fill: d => this.seriesColorScale(d.series),
            stroke: '#000000',
            duration: () => this.duration,
            strokeWidth: 1,
            fillOpacity: 1,
            delay: 0,
            styles: {
                filter: 'url(' + this.location + '#' + this.selector + 'drop-shadow)'
            }
          }
        );

        this.xAxis = new Axis(
          () => this.layers[0].elements(),
          selector + '-xAxis',
          'bottom',
          {
              transform: d => 'translate(0,' + (this.current === null ? (this.height - this.top - this.bottom) : this.yScale(0)) + ')',
              scale: () => this.xScale,
              tickValues: () => this.xTicks,
              duration: () => this.duration,
              delay: () => this.delay,
              tickFormat: this.xFormat,
              tickSizeInner: () => -(this.height - this.top - this.bottom),
              tickSizeOuter: 0,
              post: (el, d, i) => {
                  el.selectAll('path')
                    .remove();
                  el.selectAll('line')
                    .attr('stroke-width', 1)
                    .attr('stroke', '#666666')
                    .attr('stroke-opacity', '0.1');
                  el.selectAll('text').attr('font-size', '14px');
              }
          }
        );

        this.yAxis = new Axis(
          () => this.layers[0].elements(),
          selector + '-yAxis',
          'left',
          {
              transform: d => this.current === null ? 'translate(0,0)' : 'translate(' + this.xScale(0) + ',' + 0 + ')',
              scale: () => this.yScale,
              tickValues: () => this.yTicks,
              duration: () => this.duration,
              delay: () => this.delay,
              tickFormat: this.yFormat,
              tickSizeInner: () => -(this.width),
              tickSizeOuter: 0,
              post: (el, d, i) => {
                  el.selectAll('path')
                    .remove();
                  el.selectAll('line')
                    .attr('stroke-width', 1)
                    .attr('stroke', '#666666')
                    .attr('stroke-opacity', '0.1');
                  el.selectAll('text').attr('font-size', '14px');
              }
          }
        );

        this.xLabel = new Text(
            () => this.layers[3].elements(),
            selector + '-xaxis-label',
            {
              x: d => this.width  / 2,
              y: d => 30 + this.height - this.top - this.bottom,
              text: this.xLab,
              textAnchor: 'middle',
              dy: '.35em',
              fontSize: 16,
              duration: () => this.duration,
              delay: () => this.delay
            }
          );

          this.yLabel = new Text(
            () => this.layers[3].elements(),
            selector + '-yaxis-label',
            {
              y: 0,
              x: 0,
              text: this.yLab,
              textAnchor: 'middle',
              fontSize: 16,
              duration: () => this.duration,
              delay: () => this.delay,
              transform: () => {
                const yOff = (this.height - this.top - this.bottom) / 2;
                const xOff = -60;
                return 'translate(' + xOff + ',' + yOff + ') rotate(-90)';
              }
            }
          );

        this.legend = new LegendColor(
            () => this.layers[4].elements(),
            selector + '-legend',
            {
              shapeHeight: 30,
              shapeWidth: 30,
              shapePadding: 5,
              labelOffset: 10,
              ascending: false,
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

    dataPrep() {
          // Setup scales
          const minCost = Math.min(d3.min(this.data, d => d.cost), 0),
              maxCost = Math.max(d3.max(this.data, d => d.cost), 0),
              minEff = Math.min(d3.min(this.data, d => d.eff), 0),
              maxEff = Math.max(d3.max(this.data, d => d.eff), 0),
              xRng = expand([minEff, maxEff], 0, 0, 0, 0.05),
              yRng = expand([minCost, maxCost], 0, 0, 0, 0.05);

          this.xTicks = pretty(xRng[0], xRng[1], 6);
          this.yTicks = pretty(yRng[0], yRng[1], 6);

          // Update scales
          this.seriesColorScale = d3.scaleOrdinal(this.colors)
                                    .domain(this.data.map(d => d.series));
          this.xScale = d3.scaleLinear()
                          .range([0, this.width])
                          .domain(d3.extent(expand(this.xTicks, 0, 0.05)));
          this.yScale = d3.scaleLinear()
                          .range([this.height - this.bottom - this.top, 0])
                          .domain(d3.extent(expand(this.yTicks, 0, 0.05)));

    }

    draw(): CEChart {
        this.dataPrep();
        super.draw();

        if (this.layout === 'frontier') {
          this.frontier.update({data: this.data}).draw();
          this.xAxis.update({data: ['']}).draw();
          this.yAxis.update({data: ['']}).draw();
          this.yLabel.update({data: ['']}).draw();
          this.xLabel.update({data: ['']}).draw();
          this.legend.update({scale: this.seriesColorScale}).draw();
        } else {
          this.frontier.update({data: []}).draw();
          this.xAxis.update({data: []}).draw();
          this.yAxis.update({data: []}).draw();
          this.yLabel.update({data: []}).draw();
          this.xLabel.update({data: []}).draw();
          this.legend.remove();
        }

        return this;
    }

}