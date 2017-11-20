import * as d3 from 'd3';
import { ChartElement } from './chartElement.class';
import { updateObject } from '../functions/updateObject.function';
import { getFrontier } from '../functions/getFrontier.function';
import { Group } from '../chartElements/group.class';

/**
 *
 * A heRoVis Frontier mark object.
 *
 * @export
 * @class Frontier
 */
export class Frontier extends ChartElement {

    private layers: Group[] = [];

    // Property Attributes
    private styles: any = {};
    private frontierData: number[][] = [];
    private cx: number | Function = 0;
    private cy: number | Function = 0;
    private r: number | Function = 0;
    private stroke: string | Function = '#000000';
    private strokeWidth: number | Function = 1;
    private strokeOpacity: number | Function = 1;
    private fill: string | Function = '#000000';
    private fillOpacity: number | Function = 1;
    private transform: string | Function = '';
    private click: Function = () => {};
    private mouseOver: Function = () => {};
    private mouseOut: Function = () => {};
    private mouseMove: Function = () => {};
    private touchStart: Function = () => {};
    private touchMove: Function = () => {};
    private touchEnd: Function = () => {};

    /**
     * Creates an instance of a Frontier object.
     *
     * @param {Funtion} parent A callback function to retrieve the parent element.
     * @param {string} selector CSS class used to tag elements of chart instance.
     * @param {*} [spec] Specifications object containing key-value pairs to set.
     * @memberOf Frontier
     *
     */
    constructor(parent: () => Selection, selector: string, spec?: any){

        super(parent, selector);
        if (spec) {
            this.update(spec);
        }

        this.layers.push(
            new Group(() => this.getParent(), selector + '-l1', {}),
            new Group(() => this.getParent(), selector + '-l2', {})
        );

    }

    /**
     *
     * Draw the Frontier mark(s) on the parent element.
     *
     * @return {Frontier} The Frontier object.
     * @memberOf Frontier
     *
     */
    draw():Frontier {

        this.layers.forEach(layer => layer.draw());

        this.layers[0].elements()
            .selectAll('path.' + this.selector)
            .remove();

        // Compute selections
        const update = this.layers[1].elements()
                         .selectAll('circle.' + this.selector)
                         .data(this.data, this.id),
              that = this;
        const enter = update.enter(),
              exit = update.exit();

        const updateFn = () => this.drawFrontier();

        // Update selection
        update
            .on('mouseover', this.mouseOver)
            .on('mouseout', this.mouseOut)
            .on('mousemove', this.mouseMove)
            .on('touchstart', this.touchStart)
            .on('touchmove', this.touchMove)
            .on('touchend', this.touchEnd)
            .on('click', this.click)
            .transition()
            .duration(this.duration)
            .attr('cx', this.cx)
            .attr('r', this.r)
            .attr('cy', this.cy)
            .attr('transform', this.transform)
            .attr('stroke', this.stroke)
            .attr('stroke-width', this.strokeWidth)
            .attr('stroke-opacity', this.strokeOpacity)
            .attr('fill', this.fill)
            .attr('fill-opacity', this.fillOpacity)
            .tween('side-effects', () => () => updateFn())
            .each(function(){
                for (const prop of that.styles) {
                    d3.select(this).style(prop, that.styles[prop]);
                }
            });

        // Enter selection
        enter.append('circle')
            .attr('class', this.selector)
            .on('mouseover', this.mouseOver)
            .on('mouseout', this.mouseOut)
            .on('mousemove', this.mouseMove)
            .on('touchstart', this.touchStart)
            .on('touchmove', this.touchMove)
            .on('touchend', this.touchEnd)
            .on('click', this.click)
            .attr('cx', this.cx)
            .attr('r', 0)
            .attr('cy', this.cy)
            .attr('stroke', '#000000')
            .attr('stroke-width', 0)
            .attr('stroke-opacity', 0)
            .attr('fill', '#000000')
            .attr('fill-opacity', 0)
            .attr('progress', 0)
            .transition()
            .duration(this.duration)
            .delay(this.delay)
            .attr('r', this.r)
            .attr('transform', this.transform)
            .attr('stroke', this.stroke)
            .attr('stroke-width', this.strokeWidth)
            .attr('stroke-opacity', this.strokeOpacity)
            .attr('fill', this.fill)
            .attr('fill-opacity', this.fillOpacity)
            .attr('progress', 1)
            .tween('side-effects', () => () => updateFn())
            .each(function (){
                for (const prop of that.styles) {
                    d3.select(this).style(prop, that.styles[prop]);
                }
            });

        // Exit selection
        exit.remove();

        // Return object itself to facilitate chaining.
        return this;

    }

    drawFrontier() {

        const pointData = [];
        this.layers[1].elements()
            .selectAll('circle.' + this.selector)
            .each(function() {
                if (Number(d3.select(this).attr('progress')) >= 0.25) {
                    pointData.push([
                        Number(d3.select(this).attr('cx')),
                        Number(d3.select(this).attr('cy')),
                    ]);
                }
            });
        let hullData = [];
        let frontierData = []
        if (pointData.length > 1) {
            hullData = d3.polygonHull(pointData);
            if (!hullData) {
                hullData = pointData;
            }
            frontierData = getFrontier(hullData);
        }


       const frontierUpdate = this.layers[0].elements()
                                .selectAll('path.' + this.selector)
                                .data([frontierData]);

       const frontierEnter = frontierUpdate.enter(),
           frontierExit = frontierUpdate.exit();

        const line = d3.line()
                     .x(d => {
                       return d[0];
                     })
                     .y(d => d[1])
                     .curve(d3.curveLinear);
        frontierUpdate
          .attr('d', line)
          .attr('transform', this.transform)
          .attr('fill-opacity', 0)
          .attr('stroke', 'black')
          .attr('stroke-width', 1)
          .attr('stroke-opacity', 1);

        // Enter selection
        frontierEnter
          .append('path')
          .attr('class', this.selector)
          .attr('d', line)
          .attr('transform', this.transform)
          .attr('fill-opacity', 0)
          .attr('stroke', 'black')
          .attr('stroke-width', 1)
          .attr('stroke-opacity', 1);

        frontierExit.remove();
    }
}
