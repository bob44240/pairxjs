import * as d3 from "d3";
import { ChartElement } from './chartElement.class';
import { updateObject } from '../functions/updateObject.function';
import { evalCallback } from '../functions/evalCallback.function'

/**
 *
 * A heRoVis Contour mark object.
 *
 * @export
 * @class Group
 */
export class Contour extends ChartElement {

    // Property Attributes
    private x: number | Function = 0;
    private y: number | Function = 0;
    private radius: number = 20;
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
    private clipPath: string = "";

    /**
     * Creates an instance of a Contour object.
     *
     * @param {Funtion} parent A callback function to retrieve the parent element.
     * @param {string} selector CSS class used to tag elements of chart instance.
     * @param {*} [spec] Specifications object containing key-value pairs to set.
     * @memberOf Contour
     *
     */
    constructor(parent: () => Selection, selector: string, spec?: any) {

        super(parent, selector);
        if(spec) {
            this.update(spec);
        }
    }

    /**
     *  Get the Contour's drawn element(s).
     *
     * @return {Selection} The Rect's drawn elements.
     *
     * @memberOf Contour
     */
    elements() {
        return this.getParent().selectAll("." + this.selector);
    }

    /**
     *
     * Draw the Contour mark(s) on the parent element.
     *
     * @return {Contour} The Rect object.
     * @memberOf Contour
     *
     */
    draw() {

        var that = this;
        // Compute selections
        var update = this.elements().data(this.data);

        var enter = update.enter(),
            exit = update.exit();

        // Update selection
        update
            .transition()
            .delay(this.delay)
            .duration(() => this.duration)
            .attr("d", d3.geoPath())
            .attr("clip-path", this.clipPath)
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
        enter.append("path")
            .attr("class", this.selector)
            .attr("stroke-width", this.strokeWidth)
            .attr("fill-opacity", 0)
            .attr("stroke-opacity", 0)
            .attr("fill", this.fill)
            .attr("stroke", this.stroke)
            .transition()
            .delay(this.delay)
            .duration(() => this.duration)
            .attr("d", d3.geoPath())
            .attr("clip-path", this.clipPath)
            .attr("transform", this.transform)
            .attr("fill-opacity", this.fillOpacity)
            .attr("stroke-opacity", this.strokeOpacity)
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
