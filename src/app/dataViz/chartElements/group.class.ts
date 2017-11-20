import * as d3 from 'd3';
import {updateObject} from '../functions/updateObject.function';

/**
 *
 * A heRoVis Group mark object.
 *
 * @export
 * @class Group
 */
export class Group {

    private getParent: any; // () => Selection = () => null;
    private selector: String = '';

    private transform = '';
    private styles: any = {};

    /**
     * Creates an instance of a Group object.  Groups are SVG Group
     * elements which are used to organize other elements into layers.
     *
     * @param {Funtion} parent A callback function to retrieve the parent element.
     * @param {string} selector CSS class used to tag elements of chart instance.
     * @param {*} [spec] Specifications object containing key-value pairs to set.
     *
     * @memberOf Group
     */
    constructor(parent: () => Selection, selector: string, spec?: any){

        this.getParent = parent;
        this.selector = selector;
        this.update(spec);
    }

    /**
     *  Get the Group's drawn element(s).
     *
     * @return {Selection} The group's drawn elements
     *
     * @memberOf Group
     */
    elements(){
        return this.getParent().selectAll('.' + this.selector);
    }

    /**
     *  Update the properties of a Group object.
     *
     * @param {*} spec Specifications object containing key-value pairs to update.
     * @return {Group} The updated Group object;
     *
     * @memberOf Group
     */
    update(spec: any){
        updateObject(this, spec);
    }


    /**
     *
     * Draw the Group mark(s) on the parent element;
     *
     * @return {Group} The Group object.
     * @memberOf Group
     *
     */
    draw():Group {

        var that = this;

        var groupEl = this.elements().data(['']);

        groupEl
            .enter().append('g')
            .attr('class', this.selector)
            .merge(groupEl)
            .attr('transform', this.transform)
            .each(function(){
                for (let prop in that.styles) {
                    d3.select(this).style(prop, that.styles[prop]);
                }
            });

        // Return object itself to facilitate chaining.
        return this;

    }

}
