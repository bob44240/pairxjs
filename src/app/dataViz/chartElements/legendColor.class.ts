import * as d3 from 'd3';
import { ChartElement } from './chartElement.class';
import { legendColor } from 'd3-svg-legend';
//import { updateObject } from '../functions/updateObject.function';

/**
 *
 * A d3-svg-legend color legend
 *
 * @export
 * @class LegendColor
 */
export class LegendColor extends ChartElement {

    // Element Properties
    private title: string = null;
    private scale: any = null;
    private labelFormat: Function = null;
    private labelOffset: number = null;
    private shapeWidth: number = null;
    private shapeHeight: number = null;
    private cells: number[] = [];
    private ascending: boolean = true;
    private shapePadding: number = null;
    private post: Function = () => {};

    /**
     * Creates an instance of a LegendColor object.
     *
     * @param {Funtion} parent A callback function to retrieve the parent element.
     * @param {string} selector CSS class used to tag elements of chart instance.
     * @param {*} [spec] Specifications object containing key-value pairs to set.
     *
     * @memberOf LegendColor
     */
    constructor(parent: () => Selection, selector: string, spec?: any){
        super(parent, selector);
        if(spec) {
            this.update(spec);
        }
    }

    /**
     *
     * Draw the LegendColor on the parent element;
     *
     * @return {Text} The LegendColor object.
     * @memberOf LegendColor
     *
     */
    draw(): LegendColor {
      var temp: any = legendColor()
        .title(this.title)
        .scale(this.scale);

        var legend = temp
        .cells(this.cells)
        .ascending(this.ascending)
        .shapeWidth(this.shapeWidth)
        .shapeHeight(this.shapeHeight)
        .shapePadding(this.shapePadding)
        .labelOffset(this.labelOffset)
        .labelFormat(this.labelFormat);
        // var legend = legendColor()
        //   .title(this.title)
        //   .scale(this.scale)
        //   .cells(this.cells)
        //   .ascending(this.ascending)
        //   .shapeWidth(this.shapeWidth)
        //   .shapeHeight(this.shapeHeight)
        //   .labelOffset(this.labelOffset)
        //   .labelFormat(this.labelFormat);

        this.remove();

        this.getParent()
            .call(legend);
        this.getParent()
            .call(this.post);

        // Return object itself to facilitate chaining.
        return this;

    }

    remove() {

        this.getParent()
            .selectAll('.legendCells')
            .remove();

        this.getParent()
            .selectAll('.legendTitle')
            .remove();
    }
}
