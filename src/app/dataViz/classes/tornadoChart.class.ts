import * as d3 from 'd3';
import { Chart } from './chart.class';
import { Segment } from '../chartElements/segment.class';
import { Group } from '../chartElements/group.class';
import { Axis } from '../chartElements/axis.class';
import { Text } from '../chartElements/text.class';
import { Rect } from '../chartElements/rectangle.class';
import { Circle } from '../chartElements/circle.class';
import { copyDataset } from '../functions/copyDataset.function';
import { updateObject } from '../functions/updateObject.function';
import { pretty } from '../functions/pretty.function';
import { expand } from '../functions/expand.function';

interface TornadoObs {
    series: string;
    scenario: string;
    low: number;
    base: number;
    high: number;
}

/**
 *
 * A Tornado Chart object.
 *
 * @export
 * @class TornadoChart
 */
export class TornadoChart extends Chart {

    // Data properties
    private dataLong: any[];
    private seriesData: any[] = [];

    // Element properties
    private readonly bars: Rect = null;
    private readonly basecase: Segment = null;
    private readonly xAxis: Axis = null;
    private readonly yAxis: Axis = null;
    private readonly seriesTitle: Text = null;
    private readonly xLabel: Text = null;

    // Scale properties
    private scenarioScale: any = d3.scaleBand();
    private seriesScale: any = d3.scaleBand();
    private valueScale: any = d3.scaleLinear();
    private typeColorScale: any = d3.scaleOrdinal(d3.schemeCategory10);
    private xTicks: number[];
    private label = '';

    constructor(container: HTMLElement, selector: string, location: string, spec?: any) {
        // Parent constructor
        super(container, selector, location);
        // Update properties
        this.update(spec);
        // Setup layers
        this.layers.push(
            new Group(
                () => this.svg.elements(),
                selector + "-plot-layer0",
                {transform: "translate(" + this.left + "," + this.top +")" }
            ),
            new Group(
                () => this.svg.elements(),
                selector + "-plot-layer1",
                {transform: "translate(" + this.left + "," + this.top +")" }
            ),
            new Group(
                () => this.svg.elements(),
                selector + "-plot-layer2",
                {transform: "translate(" + this.left + "," + this.top +")" }
            ),
            new Group(
                () => this.svg.elements(),
                selector + "-plot-layer3",
                {transform: "translate(" + this.left + "," + this.top +")" }
            )
        );
        // Setup Bars
        this.bars = new Rect(
            () => this.layers[1].elements(),
            this.selector + "-bars",
            {
                id: d => d.series + "-" + d.scenario + "-" + d.type,
                x: d => this.valueScale(Math.min(d.base, d.value)),
                width: d => Math.abs(this.valueScale(d.base) - this.valueScale(d.value)),
                y: d => this.scenarioScale(d.scenario) + this.seriesScale(d.series),
                height: d => this.scenarioScale.bandwidth(),
                fill: d => this.typeColorScale(d.type),
                fillOpacity: 0.5,
                stroke: d => this.typeColorScale(d.type)
            }
        );


        this.basecase = new Segment(
          () => this.layers[2].elements(),
          selector + "-zero",
          {
            id: d => d,
            x1: d => this.valueScale(d.values[0].base),
            x2: d => this.valueScale(d.values[0].base),
            y1: d => this.seriesScale(d.key),
            y2: d => this.seriesScale(d.key) + this.seriesScale.bandwidth(),
            stroke: "#666666",
            strokeOpacity: 1,
            strokeWidth: 1,
            duration: () => this.duration,
            delay: () => this.delay
          }
        );

        // X-axis
        this.xAxis = new Axis(
          () => this.layers[2].elements(),
          selector + "-xAxis",
          "bottom",
          {
              id: d => d.key,
              transform: d => {
                  var yTrans = this.seriesScale(d.key) + this.seriesScale.bandwidth()
                  return "translate(" + 0 + "," + yTrans + ")";
              },
              scale: () => this.valueScale,
              tickValues: () => this.xTicks,
              post: (el, d, i) => {
                  el.selectAll("path")
                    .remove();
                  el.selectAll("line")
                    .attr("stroke-width",1)
                    .attr("stroke","#666666")
                    .attr("stroke-opacity","0.1");
                  if(i === this.seriesData.length - 1){
                      el.selectAll("text").attr("opacity",1)
                  }else{
                      el.selectAll("text").attr("opacity",0)
                  }
              },
              tickSizeInner: () => -this.seriesScale.bandwidth(),
              tickSizeOuter: 0,
              duration: () => this.duration,
              delay: () => this.delay
          }
        );


        this.yAxis = new Axis(
          () => this.layers[2].elements(),
          selector + "-yAxis",
          "left",
          {
              id: d => d.key,
              transform: d => {
                  var yTrans = this.seriesScale(d.key)
                  return "translate(" + 0 + "," + yTrans + ")";
              },
              scale: () => this.scenarioScale,
              post: (el, d, i) => {
                  el.selectAll("path").remove();
                  el.selectAll("text")
                    .each(function(d) {
                        if(d === "Total") d3.select(this).attr("font-weight", "bold");
                        else d3.select(this).attr("font-weight", "normal");
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
          selector + "-series-title",
          {
            id: d => d.key,
            x: d => (this.width - this.left - this.right) / 2,
            y: d => this.seriesScale(d.key) - 13,
            text: d => d.key,
            textAnchor: "middle",
            dy: ".35em",
            duration: () => this.duration,
            delay: () => this.delay
          }
        );

        this.xLabel = new Text(
          () => this.layers[3].elements(),
          selector + "-axis-label",
          {
            x: d => (this.width - this.left - this.right) / 2,
            y: d => 30 + this.height - this.top - this.bottom,
            text: this.label,
            textAnchor: "middle",
            dy: ".35em",
            fontSize: 13,
            duration: () => this.duration,
            delay: () => this.delay
          }
        );
    }

    private dataPrep() {

        this.dataLong = [];
        // Get each series
        this.seriesData = d3.nest()
            .key((d: TornadoObs): string => d.series)
            .entries(this.data);

        copyDataset(this.data)
            .sort((a, b) => {
                let aRng = d3.extent([a.low, a.base, a.high]);
                let bRng = d3.extent([b.low, b.base, b.high]);
                return d3.descending(aRng[1] - aRng[0], bRng[1] - bRng[0]);
            })
            .forEach(d => {
                this.dataLong.push({
                    series: d.series,
                    scenario: d.scenario,
                    type: 'low',
                    base: d.base,
                    value: d.low
                });
                this.dataLong.push({
                    series: d.series,
                    scenario: d.scenario,
                    type: 'high',
                    base: d.base,
                    value: d.high
                });
            });

            // Update scales
            var valMin = d3.min(this.dataLong.map(d => Math.min(d.base, d.value))),
                valMax = d3.max(this.dataLong.map(d => Math.max(d.base, d.value))),
                absMax = Math.max(valMax, -valMin, 0),
                absMin = Math.min(-valMax, valMin, 0),
                valExpanded = expand([valMin,valMax], 0, 0, 0, 0.05);

            this.xTicks = pretty(valExpanded[0], valExpanded[1], 6);

            this.valueScale
              .domain(d3.extent(this.xTicks))
              .range([0,this.width]);

            this.seriesScale
                .paddingInner(.15)
                .paddingOuter(0)
                .domain(this.seriesData.map(d => d.key))
                .range([25, this.height - this.top - this.bottom]);
            this.scenarioScale
                .paddingInner(.35)
                .paddingOuter(.25)
                .domain(this.dataLong.map(d => d.scenario))
                .range([0, this.seriesScale.bandwidth()]);


    }

    public draw() {

        this.dataPrep();
        super.draw();
        this.xLabel
          .update({data: [""], duration: this.duration, delay: this.delay})
          .draw();
        this.seriesTitle
          .update({data: this.seriesData, duration: this.duration, delay: this.delay})
          .draw();
        this.xAxis
          .update({data: this.seriesData, duration: this.duration, delay: this.delay})
          .draw();
        this.yAxis
          .update({data: this.seriesData, duration: this.duration, delay: this.delay})
          .draw();
        this.basecase
            .update({data: this.seriesData, duration: this.duration, delay: this.delay})
            .draw();
        this.bars
            .update({ data: this.dataLong, duration: this.duration, delay: this.delay})
            .draw();

        return this;
    }

}
