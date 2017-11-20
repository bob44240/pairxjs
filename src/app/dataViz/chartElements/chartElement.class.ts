import * as d3 from 'd3';
import {updateObject} from '../functions/updateObject.function';

/**
 *
 * A heRoVis Rect mark object.
 *
 * @export
 * @class Group
 */
export abstract class ChartElement {

    // Element properties
    protected readonly getParent: any //() => Selection = () => null;
    protected readonly selector: string;

    // Data properties
    protected data: any[]=[];

    // Attribute properties
    protected id: any = (d,i) => i ;// number | string | Function = (d,i) => i;

    // Transition Properties
    protected duration: number = 1000;
    protected delay: number =  1000;

    /**
     * Creates an instance of ChartElement.
     * @param {() => Selection} parent
     * @param {string} selector
     * @param {*} [spec]
     *
     * @memberOf ChartElement
     */
    constructor(parent: () => Selection, selector: string, spec?: any){
        this.getParent = parent;
        this.selector = selector;
    }

    /**
     * Get elements
     *
     * @returns
     *
     * @memberOf ChartElement
     */
    elements(){
        return this.getParent().selectAll('.' + this.selector);
    }

    /**
     * Update
     *
     * @param {*} spec
     * @returns
     *
     * @memberOf ChartElement
     */
    update(spec: any){
        // Update and return for chaining.

        return updateObject(this,spec);
    }

    /**
     * Draw
     *
     * @abstract
     *
     * @memberOf ChartElement
     */
    abstract draw():ChartElement
}
