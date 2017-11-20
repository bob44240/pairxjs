import * as d3 from "d3";
import { ChartElement } from './chartElement.class';
import { updateObject } from '../functions/updateObject.function';

/**
 *
 * A heRoVis Text mark object.
 *
 * @export
 * @class Text
 */
export class Text extends ChartElement {

    // Element Properties
    private x: number | Function = 0;
    private y: number | Function = 0;
    private text: string | Function = "";
    private textAnchor: string | Function = null;
    private dy: string | Function = null;
    private fontWeight: string | Function = "normal";
    private fontSize: string | Function = null;
    private fill: string | Function = '#000000';
    private opacity: number | Function = 1;
    private transform: string | Function = '';
    private mouseOver: Function = () => {};
    private mouseOut: Function = () => {};
    private mouseMove: Function = () => {};
    private touchStart: Function = () => {};
    private touchMove: Function = () => {};
    private touchEnd: Function = () => {};

    /**
     * Creates an instance of a Text object.  A Text object is a set of SVG text
     * elements.
     *
     * @param {Funtion} parent A callback function to retrieve the parent element.
     * @param {string} selector CSS class used to tag elements of chart instance.
     * @param {*} [spec] Specifications object containing key-value pairs to set.
     *
     * @memberOf Text
     */
    constructor(parent: () => Selection, selector: string, spec?: any){
        super(parent, selector);
        if(spec) {
            this.update(spec);
        }
    }

    /**
     *
     * Draw the Text mark(s) on the parent element;
     *
     * @return {Text} The Text object.
     * @memberOf Text
     *
     */
    draw():Text {

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
            .attr("font-weight", this.fontWeight)
            .transition()
            .duration(this.duration)
            .attr("x", this.x)
            .attr("y", this.y)
            .text(this.text)
            .attr("font-weight", this.fontWeight)
            .attr("dy", this.dy)
            .attr("text-anchor", this.textAnchor)
            .style("font-size", this.fontSize)
            .attr("transform", this.transform)
            .attr("fill", this.fill)
            .attr("opacity", this.opacity);

        // Enter selection
        enter.append("text")
            .on("mouseover", this.mouseOver)
            .on("mouseout", this.mouseOut)
            .on("mousemove", this.mouseMove)
            .on("touchstart", this.touchStart)
            .on("touchmove", this.touchMove)
            .on("touchend", this.touchEnd)
            .attr("class", this.selector)
            .text(this.text)
            .attr("x", this.x)
            .attr("y", this.y)
            .attr("font-weight", this.fontWeight)
            .attr("dy", this.dy)
            .attr("text-anchor", this.textAnchor)
            .style("font-size", this.fontSize)
            .attr("transform", this.transform)
            .attr("opacity", 0)
            .transition()
            .duration(this.duration)
            .delay(this.delay)
            .attr("x", this.x)
            .attr("y", this.y)
            .attr("fill", this.fill)
            .attr("opacity", this.opacity);

        // Exit selection
        exit.remove();

        // Return object itself to facilitate chaining.
        return this;

    }
}
