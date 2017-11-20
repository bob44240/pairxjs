import * as d3 from "d3";
import {updateObject} from '../functions/updateObject.function';

/**
 *
 * A heRoVis ClipPath mark object.
 *
 * @export
 * @class ClipPath
 */
export class ClipPath {

    private getParent: any;// () => Selection;// = () => null;
    private selector: String = "";

    private transform: string = "";
    private styles: any = {};
    private id: string;

    /**
     * Creates an instance of a ClipPath object.  ClipPaths are SVG ClipPath
     * elements which are used to organize other elements into layers.
     *
     * @param {Funtion} parent A callback function to retrieve the parent element.
     * @param {string} selector CSS class used to tag elements of chart instance.
     * @param {*} [spec] Specifications object containing key-value pairs to set.
     *
     * @memberOf ClipPath
     */
    constructor(parent: () => Selection, selector: string, id: string, spec?: any){

        this.getParent = parent;
        this.selector = selector;
        this.id = id;
        if (spec) {
            console.log("hi");
            this.update(spec);
        }
    }

    /**
     *  Get the ClipPath's drawn element(s).
     *
     * @return {Selection} The ClipPath's drawn elements
     *
     * @memberOf ClipPath
     */
    elements(){
        return this.getParent().selectAll("." + this.selector);
    }

    /**
     *  Update the properties of a ClipPath object.
     *
     * @param {*} spec Specifications object containing key-value pairs to update.
     * @return {ClipPath} The updated ClipPath object;
     *
     * @memberOf ClipPath
     */
    update(spec: any): ClipPath {
        updateObject(this,spec);
        return this;
    }


    /**
     *
     * Draw the ClipPath mark(s) on the parent element;
     *
     * @return {ClipPath} The ClipPath object.
     * @memberOf ClipPath
     *
     */
    draw():ClipPath {

        var that = this;

        var ClipPathEl = this.elements().data([""]);

        ClipPathEl
            .enter().append("clipPath")
            .attr("class", this.selector)
            .attr("id", this.id)
            .merge(ClipPathEl)
            .attr("transform", this.transform)
            .each(function(){
                for(let prop in that.styles) {
                    d3.select(this).style(prop, that.styles[prop]);
                }
            });

        // Return object itself to facilitate chaining.
        return this;

    }

}
