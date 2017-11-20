
import * as d3 from "d3";
import { ChartElement } from './chartElement.class';
import { updateObject } from '../functions/updateObject.function';

/**
 *
 * A heRoVis Segment mark object.
 *
 * @export
 * @class Segment
 */
export class Segment extends ChartElement {

    private x1: number | Function = 0;
    private y1: number | Function = 0;
    private x2: number | Function = 0;
    private y2: number | Function = 0;
    private stroke: string | Function = '#000000';
    private strokeWidth: number | Function = 1;
    private strokeOpacity: number | Function = 1;
    private strokeDashArray: string | Function = '';
    private mouseOver: Function = () => {};
    private mouseOut: Function = () => {};
    private mouseMove: Function = () => {};
    private touchStart: Function = () => {};
    private touchMove: Function = () => {};
    private touchEnd: Function = () => {};
    private transform: string | Function = '';
    private styles: any = {};
    private clipPath: string = "";

    /**
     * Creates an instance of a Segment object.
     *
     * @param {Funtion} parent A callback function to retrieve the parent element.
     * @param {string} selector CSS class used to tag elements of chart instance.
     * @param {*} [spec] Specifications object containing key-value pairs to set.
     *
     * @memberOf Segment
     */
    constructor(parent: () => Selection, selector: string, spec?: any){
        super(parent, selector);
        if(spec) {
            this.update(spec);
        }
    }

    /**
     *
     * Draw the Segment mark(s) on the parent element;
     *
     * @return {Segment} The Segment object.
     * @memberOf Line
     *
     */
    draw(){

        var that = this;

        // Compute selections
        var selection = this.elements().data(this.data, this.id);

        // Enter selection
        selection
            .enter()
            .append("line")
            .on("mouseover", this.mouseOver)
            .on("mouseout", this.mouseOut)
            .on("mousemove", this.mouseMove)
            .on("touchstart", this.touchStart)
            .on("touchmove", this.touchMove)
            .on("touchend", this.touchEnd)
            .attr("clip-path", this.clipPath)
            .attr("class", this.selector)
            .attr("x1", this.x1)
            .attr("x2", this.x1)
            .attr("y1", this.y1)
            .attr("y2", this.y1)
            .attr("transform", this.transform)
            .attr("stroke", "#000000")
            .attr("stroke-width", 0)
            .attr("stroke-opacity", 0)
            .transition()
            .duration(this.duration)
            .delay(this.delay)
            .attr("x1", this.x1)
            .attr("x2", this.x2)
            .attr("y1", this.y1)
            .attr("y2", this.y2)
            .attr("transform", this.transform)
            .attr("stroke", this.stroke)
            .attr("stroke-width", this.strokeWidth)
            .attr("stroke-opacity", this.strokeOpacity)
            .attr("stroke-dasharray", this.strokeDashArray)
            .each(function(){
                for(let prop in that.styles) {
                    d3.select(this).style(prop, that.styles[prop]);
                }
            });

        // Update selection
        selection
            .on("mouseover", this.mouseOver)
            .on("mouseout", this.mouseOut)
            .on("mousemove", this.mouseMove)
            .on("touchstart", this.touchStart)
            .on("touchmove", this.touchMove)
            .on("touchend", this.touchEnd)
            .attr("clip-path", this.clipPath)
            .transition()
            .duration(this.duration)
            .attr("x1", this.x1)
            .attr("x2", this.x2)
            .attr("y1", this.y1)
            .attr("y2", this.y2)
            .attr("transform", this.transform)
            .attr("stroke", this.stroke)
            .attr("stroke-width", this.strokeWidth)
            .attr("stroke-opacity", this.strokeOpacity)
            .attr("stroke-dasharray", this.strokeDashArray)
            .each(function(){
                for(let prop in that.styles) {
                    d3.select(this).style(prop, that.styles[prop]);
                }
            });


        // Exit selection
        selection.exit().remove();

        // Return object itself to facilitate chaining.
        return this;

    }
}
