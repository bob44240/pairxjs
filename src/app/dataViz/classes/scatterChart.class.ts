import * as d3 from 'd3';
import { Chart } from './chart.class';
import { Group } from '../chartElements/group.class';
import { ClipPath } from '../chartElements/clipPath.class';
import { Hex } from '../chartElements/hex.class';
import { Contour } from '../chartElements/contour.class';
import { Segment } from '../chartElements/segment.class';
import { Axis } from '../chartElements/axis.class';
import { Rect } from '../chartElements/rectangle.class';
import { Text } from '../chartElements/text.class';
import { copyDataset } from '../functions/copyDataset.function';
import { pretty } from '../functions/pretty.function';
import { expand } from '../functions/expand.function';
import { contourDensity } from 'd3-contour';
import { hexbin } from 'd3-hexbin';

/**
 *
 * An Scatterplot Chart object.
 *
 * @export
 * @class ScatterChart
 */
export class ScatterChart extends Chart {

    // Element properties
    private readonly xAxis: Axis = null;
    private readonly yAxis: Axis = null;
    private readonly hexes: Hex = null;
    private readonly contours: Contour = null;
    private readonly shadowHexes: Hex = null;
    private readonly segments: Segment = null;
    private readonly plotArea: ClipPath = null;
    private readonly plotAreaRect: Rect = null;
    private readonly xLabel: Text = null;
    private readonly yLabel: Text = null;

    // Scale properties
    private xScale: any = d3.scaleLinear();
    private yScale: any = d3.scaleLinear();
    private colorscale: any = d3.scaleSequential(d3.interpolateViridis).domain([0, 6]);

    // Data properties
    private xTicks: number[] = [];
    private yTicks: number[] = [];

    private threshold = 30000;
    private xLab = '';
    private yLab = '';

    private contourData: any[] = [];
    private hexData: any[] = [];

    private type = 'hex';


    /**
     * Creates an instance of an ScatterChart object.
     *
     * @param {Selection} parent D3 selection of the parent element.
     * @param {string} selector CSS class used to tag elements of chart instance.
     * @param {*} [spec] Specifications object containing key-value pairs to set.
     * @memberOf ScatterChart
     *
     */
    constructor(container: HTMLElement, selector: string, location: string, spec?: any){

        super(container, selector, location);
        // Keep this refernece to avoid scoping issues
        var that = this;
        // Updated properties
        if (spec) {
            this.update(spec);
        }
        // Add layers
        this.layers.push(
            new Group(() => this.svg.elements(), selector + '-plot-layer0', {transform: 'translate(' + this.left + ',' + this.top + ')' }),
            new Group(() => this.svg.elements(), selector + '-plot-layer1', {transform: 'translate(' + this.left + ',' + this.top + ')' }),
            new Group(() => this.svg.elements(), selector + '-plot-layer2', {transform: 'translate(' + this.left + ',' + this.top + ')',
              styles: {
                  filter: 'url(' + this.location + '#' + this.selector + 'drop-shadow)'
              }
            }),
            new Group(() => this.svg.elements(), selector + '-plot-layer3', {transform: 'translate(' + this.left + ',' + this.top +')' }),
            new Group(() => this.svg.elements(), selector + '-plot-layer4',
              {
                transform: 'translate(' + (30 + this.width + this.left) + ',' + ((this.height / 2) - this.top) +')'
              }
            )
        );

        this.plotArea = new ClipPath(() => this.layers[3].elements(), selector + '-clip-path', selector + 'hex-viewport');

        this.plotAreaRect = new Rect(
          () => this.plotArea.elements(),
          this.selector + '-plot-area-rect',
          {
            x: d => 0,
            y: d => 0,
            width: d => this.width - this.left - this.right,
            height: d => this.height - this.top - this.bottom,
            fill: d => '#ffffff',
            stroke: '#ffffff',
            strokeWidth: 0,
            fillOpacity: 0,
            duration: this.duration,
            delay: this.delay
          }
        );

        this.hexes = new Hex(
          () => this.layers[2].elements(),
          this.selector + '-hex',
          {
            fill: d => this.colorscale(d.length),
            stroke: '#000000',
            strokeWidth: 1,
            fillOpacity: 1,
            duration: 0,
            clipPath: 'url(#' + selector + 'hex-viewport' + ')',
            delay: (d, i) => this.delay + 500 + i * 12
          }
        );

        this.contours = new Contour(
          () => this.layers[2].elements(),
          this.selector + '-contour',
          {
            fill: d => this.colorscale(d.value),
            stroke: '#000000',
            strokeWidth: 1,
            fillOpacity: 1,
            strokeOpacity: 0,
            duration: 1000,
            clipPath: 'url(#' + selector + 'hex-viewport' + ')',
            delay: (d, i) => this.delay + i * 300,
            styles: {
              filter: 'url(' + this.location + '#' + this.selector + 'drop-shadow)'
            }
          }
        );

        this.segments = new Segment(
          () => this.layers[3].elements(),
          selector + '-seg',
          {
            id: d => d.series + '-' + d.group,
            x1: d => this.xScale(this.xScale.domain()[0]),
            x2: d => this.xScale(this.xScale.domain()[1]),
            y1: d => this.yScale(this.xScale.domain()[0] * this.threshold),
            y2: d => this.yScale(this.xScale.domain()[1] * this.threshold),
            stroke: '#cc5500',
            strokeOpacity: 1,
            strokeWidth: 2,
            duration: () => this.duration,
            delay: () => this.delay,
            clipPath: 'url(#' + selector + 'hex-viewport' + ')',
            styles: {
              filter: 'url(' + this.location + '#' + this.selector + 'drop-shadow)'
            },
          }
        );

        this.xAxis = new Axis(
          () => this.layers[0].elements(),
          selector + '-xAxis',
          'bottom',
          {
              transform: d => 'translate(0,' + (this.height - this.top - this.bottom) + ')',
              scale: () => this.xScale,
              tickValues: () => this.xTicks,
              duration: () => this.duration,
              delay: () => this.delay,
              post: (el, d, i) => {
                  el.selectAll('path').remove();
                    //.attr('stroke-width',1);
                    //.attr('stroke','#666666');
                  el.selectAll('line')
                    .attr('stroke-width',0.2)
                    .attr('stroke','#666666');
                  el.selectAll('text')
                    .attr('fill','#666666');
              },
              tickSizeInner: () => -(this.height - this.top - this.bottom),
              tickSizeOuter: 0
          }
        );

        this.yAxis = new Axis(
          () => this.layers[0].elements(),
          selector + '-yAxis',
          'left',
          {
              transform: d => 'translate(0,0)',
              scale: () => this.yScale,
              tickValues: () => this.yTicks,
              duration: () => this.duration,
              delay: () => this.delay,
              post: (el, d, i) => {
                  el.selectAll('path').remove();
                    //.attr('stroke-width',1);
                    //.attr('stroke','#666666');
                  el.selectAll('line')
                    .attr('stroke-width',0.2)
                    .attr('stroke','#666666');
                  el.selectAll('text')
                    .attr('fill','#666666');
              },
              tickSizeInner: () => -(this.width - this.left - this.right),
              tickSizeOuter: 0
          }
        );

        this.xLabel = new Text(
          () => this.layers[3].elements(),
          selector + '-xaxis-label',
          {
            x: d => (this.width - this.left - this.right) / 2,
            y: d => 30 + this.height - this.top - this.bottom,
            text: this.xLab,
            textAnchor: 'middle',
            dy: '.35em',
            fontSize: 13,
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
            fontSize: 13,
            duration: () => this.duration,
            delay: () => this.delay,
            transform: () => {
              const yOff = (this.height - this.top - this.bottom) / 2;
              const xOff = -60;
              return 'translate(' + xOff + ',' + yOff + ') rotate(-90)';
            }
          }
        );
    }

    dataPrep() {

        const len = this.data.length;
        const xExtent = [Math.min(d3.min(this.data, d => d.x),0), Math.max(d3.max(this.data, d => d.x),0)];
        this.xTicks = pretty(xExtent[0], xExtent[1], 8);
        const yExtent = [Math.min(d3.min(this.data, d => d.y),0), Math.max(d3.max(this.data, d => d.y),0)];
        this.yTicks = pretty(yExtent[0], yExtent[1], 8);

        this.xScale
            .domain(expand(this.xTicks, 0, 0.05))
            .range([0, this.width - this.left - this.right]);

        this.yScale
            .domain(expand(this.yTicks, 0, 0.05))
            .range([this.height - this.top - this.bottom, 0]);

        if (this.type == 'contour') {
          const contourTicks = [0.01,0.02,0.05,0.1,0.2,0.4,0.6,0.75,0.9,0.99];
          const contourGen = contourDensity()
            .thresholds(contourTicks)
            .x(d => this.xScale(d.x))
            .y(d => this.yScale(d.y));
          this.contourData = contourGen(this.data);
          this.hexData = [];
          this.colorscale = d3.scaleSequential(d3.interpolateViridis).domain([0, d3.max(this.contourData, d => d.value)]);
        } else {

          const hexbinGen = hexbin()
            .radius(5)
            .x(d => this.xScale(d.x))
            .y(d => this.yScale(d.y));

          this.hexData = hexbinGen(this.data);
          this.contourData = [];

          this.hexes.update({d: d => 'M' + d.x + ',' + d.y + hexbinGen.hexagon()});
          this.colorscale = d3.scaleSequential(d3.interpolateViridis).domain([0, len / 120]);
        }
    }

    draw(): ScatterChart {
        this.dataPrep();
        super.draw();
        this.plotArea.draw();
        this.plotAreaRect.update({data: ['']}).draw();
        this.hexes.update({data: this.hexData}).draw();
        this.contours.update({data: this.contourData}).draw();
        this.segments.update({data: ['']}).draw();
        this.xAxis.update({data: ['']}).draw();
        this.yAxis.update({data: ['']}).draw();
        this.yLabel.update({data: ['']}).draw();
        this.xLabel.update({data: ['']}).draw();
        return this;
    }
}
