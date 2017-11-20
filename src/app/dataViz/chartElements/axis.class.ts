import * as d3 from 'd3';
import { ChartElement } from './chartElement.class';
import { evalCallback } from '../functions/evalCallback.function'
import { updateObject } from '../functions/updateObject.function';

/**
 *
 * A heRoVis Axis mark object.
 *
 * @export
 * @class Axis
 */
export class Axis extends ChartElement {

    // Axis properties
    private orient: string;
    private axis: Function;
    private scale: Function = d3.scaleLinear();
    private tickFormat: any = '';
    private tickValues: Function = () => null;
    private tickSizeOuter: number = 6;
    private tickSizeInner: number = 6;
    private post: Function = () => {};
    private transform: any = ''; // string | Function
    private mouseOver: Function = () => {};
    private mouseOut: Function = () => {};
    private mouseMove: Function = () => {};
    private touchStart: Function = () => {};
    private touchMove: Function = () => {};
    private touchEnd: Function = () => {};

    /**
     * Creates an instance of an Axis object.  Axis objects are used to draw axes
     * on plots.
     *
     * @param {Funtion} parent A callback function to retrieve the parent element.
     * @param {string} selector CSS class used to tag elements of chart instance.
     * @param {*} [spec] Specifications object containing key-value pairs to set.
     * @memberOf Axis
     *
     */
    constructor(parent: () => Selection, selector: string, orient: string, spec?: any){

        super(parent, selector);
        this.orient = orient;
        if(this.orient === 'top'){
            this.axis = d3.axisTop;
        }else if(this.orient === 'left'){
            this.axis = d3.axisLeft;
        }else if(this.orient === 'bottom'){
            this.axis = d3.axisBottom;
        }else{
            this.axis = d3.axisRight;
        }
        if(spec) {
            this.update(spec);
        }
    }

    draw():Axis {

        var that = this;

        // Generate svg axis component
        var scale = this.scale,
            tickSizeOuter = this.tickSizeOuter,
            tickSizeInner = this.tickSizeInner,
            tickFormat = this.tickFormat,
            tickValues = this.tickValues,
            post = this.post;

        // Compute selections
        var update = this.elements().data(this.data, this.id),
            enter = update.enter(),
            exit = update.exit();

        // Update selection
        update
            .each(function(d, i) {
                const theScale = evalCallback(scale, d, i);
                const axis = that.axis(evalCallback(theScale, d, i))
                    .tickSizeOuter(evalCallback(tickSizeOuter, d, i))
                    .tickSizeInner(evalCallback(tickSizeInner, d, i))
                    .tickValues(evalCallback(tickValues, d, i));

                // If it is a numeric axis, apply tickFormats
                if (theScale.interpolate) {
                    axis.tickFormat(d3.format(evalCallback(tickFormat, d, i)));
                }

                d3.select(this)
                    .on('mouseover', this.mouseOver)
                    .on('mouseout', this.mouseOut)
                    .on('mousemove', this.mouseMove)
                    .on('touchstart', this.touchStart)
                    .on('touchmove', this.touchMove)
                    .on('touchend', this.touchEnd)
                    .transition()
                    .duration(that.duration)
                    .attr('transform', that.transform)
                    .call(axis);

                d3.select(this).call(function(el) { post(el, d, i) });
            });

        // Enter selection
        enter.append('g')
            .attr('class', this.selector)
            .each(function(d, i){
                const theScale = evalCallback(scale, d, i);
                const axis = that.axis(evalCallback(theScale, d, i))
                    .tickSizeOuter(evalCallback(tickSizeOuter, d, i))
                    .tickSizeInner(evalCallback(tickSizeInner, d, i))
                    .tickValues(evalCallback(tickValues, d, i));

                // If it is a numeric axis, apply tickFormats
                if (theScale.interpolate) {
                    axis.tickFormat(d3.format(evalCallback(tickFormat, d, i)));
                }

                d3.select(this)
                    .on('mouseover', this.mouseOver)
                    .on('mouseout', this.mouseOut)
                    .on('mousemove', this.mouseMove)
                    .on('touchstart', this.touchStart)
                    .on('touchmove', this.touchMove)
                    .on('touchend', this.touchEnd)
                    .attr('transform',that.transform)
                    .transition()
                    .delay(that.delay)
                    .duration(that.duration)
                    .call(axis);

                d3.select(this).call(function(el) { post(el, d, i) });
            });

        // Exit selection
        exit.remove();

        // Return object itself to facilitate chaining.
        return this;
    }
}
