import * as d3 from "d3";
import { ChartElement } from './chartElement.class';
import { updateObject } from '../functions/updateObject.function';

/**
 *
 * A heRoVis Rect mark object.
 *
 * @export
 * @class Group
 */
export class Rect extends ChartElement {

    // Property Attributes
    private x: number | Function = 0;
    private y: number | Function = 0;
    private width: number | Function = 0;
    private height: number | Function = 0;
    private stroke: string | Function = '#000000';
    private strokeWidth: number | Function = 1;
    private strokeOpacity: number | Function = 1;
    private fill: string | Function = '#000000';
    private fillOpacity: number | Function = 1;
    private transform: string | Function = '';
    private mouseOver: Function = () => {};
    private mouseOut: Function = () => {};
    private mouseMove: Function = () => {};
    private touchStart: Function = () => {};
    private touchMove: Function = () => {};
    private touchEnd: Function = () => {};
    private styles: any = {};

    /**
     * Creates an instance of a Rect object.
     *
     * @param {Funtion} parent A callback function to retrieve the parent element.
     * @param {string} selector CSS class used to tag elements of chart instance.
     * @param {*} [spec] Specifications object containing key-value pairs to set.
     * @memberOf Rect
     *
     */
    constructor(parent: () => Selection, selector: string, spec?: any) {

        super(parent, selector);
        if(spec) {
            this.update(spec);
        }
    }

    /**
     *  Get the Rect's drawn element(s).
     *
     * @return {Selection} The Rect's drawn elements.
     *
     * @memberOf Rect
     */
    elements() {
        return this.getParent().selectAll("." + this.selector);
    }

    /**
     *
     * Draw the Rect mark(s) on the parent element.
     *
     * @return {Rect} The Rect object.
     * @memberOf Rect
     *
     */
    draw() {

        var that = this;

        // Compute selections
        var update = this.elements().data(this.data, this.id);

        var enter = update.enter(),
            exit = update.exit();

        // Update selection
        update
            .on("mouseover", this.mouseOver)
            .on("mouseout", this.mouseOut)
            .on("mousemove", this.mouseMove)
            .on("touchstart", this.touchStart)
            .on("touchmove", this.touchMove)
            .on("touchend", this.touchEnd)
            .transition()
            .duration(this.duration)
            .attr("x", this.x)
            .attr("width", this.width)
            .attr("y", this.y)
            .attr("height", this.height)
            .attr("transform", this.transform)
            .attr("stroke", this.stroke)
            .attr("stroke-width", this.strokeWidth)
            .attr("stroke-opacity", this.strokeOpacity)
            .attr("fill", this.fill)
            .attr("fill-opacity", this.fillOpacity)
            .each(function(){
                for(let prop in that.styles) {
                    d3.select(this).style(prop, that.styles[prop]);
                }
            });

        // Enter selection
        enter.append("rect")
            .attr("class", this.selector)
            .on("mouseover", this.mouseOver)
            .on("mouseout", this.mouseOut)
            .on("mousemove", this.mouseMove)
            .on("touchstart", this.touchStart)
            .on("touchmove", this.touchMove)
            .on("touchend", this.touchEnd)
            .attr("x", this.x)
            .attr("width", this.width)
            .attr("y", this.y)
            .attr("height", this.height)
            .attr("stroke", "#000000")
            .attr("stroke-width", 0)
            .attr("stroke-opacity", 0)
            .attr("fill", "#000000")
            .attr("fill-opacity", 0)
            .transition()
            .duration(this.duration)
            .delay(this.delay)
            .attr("x", this.x)
            .attr("width", this.width)
            .attr("y", this.y)
            .attr("height", this.height)
            .attr("transform", this.transform)
            .attr("stroke", this.stroke)
            .attr("stroke-width", this.strokeWidth)
            .attr("stroke-opacity", this.strokeOpacity)
            .attr("fill", this.fill)
            .attr("fill-opacity", this.fillOpacity)
            .each(function(){
                for(let prop in that.styles) {
                    d3.select(this).style(prop, that.styles[prop]);
                }
            });

        // Exit selection
        exit.remove();

        // Return object itself to facilitate chaining.
        return this;

    }
}
