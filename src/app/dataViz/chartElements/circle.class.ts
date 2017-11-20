import * as d3 from "d3";
import { ChartElement } from './chartElement.class';
import { updateObject } from '../functions/updateObject.function';

/**
 *
 * A heRoVis Circle mark object.
 *
 * @export
 * @class Circle
 */
export class Circle extends ChartElement {

    // Property Attributes
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
     * Creates an instance of a Circle object.
     *
     * @param {Funtion} parent A callback function to retrieve the parent element.
     * @param {string} selector CSS class used to tag elements of chart instance.
     * @param {*} [spec] Specifications object containing key-value pairs to set.
     * @memberOf Circle
     *
     */
    constructor(parent: () => Selection, selector: string, spec?: any){

        super(parent, selector);
        if(spec) {
            this.update(spec);
        }

    }

    /**
     *
     * Draw the Circle mark(s) on the parent element.
     *
     * @return {Circle} The Circle object.
     * @memberOf Circle
     *
     */
    draw():Circle {

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
            .on("click", this.click)
            .transition()
            .duration(this.duration)
            .attr("cx", this.cx)
            .attr("r", this.r)
            .attr("cy", this.cy)
            .attr("transform", this.transform)
            .attr("stroke", this.stroke)
            .attr("stroke-width", this.strokeWidth)
            .attr("stroke-opacity", this.strokeOpacity)
            .attr("fill", this.fill)
            .attr("fill-opacity", this.fillOpacity);

        // Enter selection
        enter.append("circle")
            .attr("class", this.selector)
            .on("mouseover", this.mouseOver)
            .on("mouseout", this.mouseOut)
            .on("mousemove", this.mouseMove)
            .on("touchstart", this.touchStart)
            .on("touchmove", this.touchMove)
            .on("touchend", this.touchEnd)
            .on("click", this.click)
            .attr("cx", this.cx)
            .attr("r", 0)
            .attr("cy", this.cy)
            .attr("stroke", "#000000")
            .attr("stroke-width", 0)
            .attr("stroke-opacity", 0)
            .attr("fill", "#000000")
            .attr("fill-opacity", 0)
            .transition()
            .duration(this.duration)
            .delay(this.delay)
            .attr("r", this.r)
            .attr("transform", this.transform)
            .attr("stroke", this.stroke)
            .attr("stroke-width", this.strokeWidth)
            .attr("stroke-opacity", this.strokeOpacity)
            .attr("fill", this.fill)
            .attr("fill-opacity", this.fillOpacity);

        // Exit selection
        exit.remove();

        // Return object itself to facilitate chaining.
        return this;

    }
}
