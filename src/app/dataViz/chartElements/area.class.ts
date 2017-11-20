
import * as d3 from 'd3';
import { tweenPathData } from '../functions/tweenPathData.function';
import { updateObject } from '../functions/updateObject.function';
import { makeCallback } from '../functions/makeCallback.function';
import { evalCallback } from '../functions/evalCallback.function';
import { AreaFill } from './areaFill.class';
import { AreaLine } from './areaLine.class';

/**
 *
 * A heRoVis Area mark object.
 *
 * @export
 * @class Group
 */
export class Area {

    private lineParent: () => Selection = () => null;
    private fillParent: () => Selection = () => null;
    private selector: string;

    private data: any[]=[];
    private id: Function = (d,i) => i;

    private curve: Function = d3.curveLinear;
    private x: number | Function = 0;
    private y0: number | Function = 0;
    private y1: number | Function = 0;
    private pointId: string | Function = (d,i) => evalCallback(this.x, d, i);

    private fill: string | Function = '#000000';
    private fillOpacity: number | Function = 1;

    private areaFill: AreaFill = null;
    private areaLine: AreaLine = null;

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

    private duration: number = 1000;
    private delay: number =  1000;

    /**
     * Creates an instance of Area mark.  Area marks are svg path elements
     * which correspond to series' in an area chart.
     *
     * @param {Function} lineParent A callback function to retrieve the line's parent element.
     * @param {Function} fillParent A callback function to retrieve the fill's parent element.
     * @param {string} selector CSS class used to tag elements of chart instance.
     * @param {*} [spec] Specifications object containing key-value pairs to set.
     *
     * @memberOf Area
     */
    constructor(lineParent: () => Selection, fillParent: () => Selection, selector: string, spec?: any){
        this.lineParent = lineParent;
        this.fillParent = fillParent;
        this.selector = selector;
        if(spec) {
            this.update(spec);
        }
        this.areaLine = new AreaLine(
            this.lineParent,
            this.selector + '-line',
            {}
        );
        this.areaFill = new AreaFill(
            this.fillParent,
            this.selector + '-fill',
            {}
        );
    }

    /**
     *  Update the properties of an Area object.
     *
     * @param {*} spec Specifications object containing key-value pairs to update.
     * @return {Area} The updated Area object;
     *
     * @memberOf Area
     */
    update(spec: any):any {
        return updateObject(this, spec);
    }

    /**
     *
     * Draw the Area mark(s) on the parent element;
     *
     * @return {Area} The Area object.
     * @memberOf Area
     *
     */
    draw(){

        this.areaFill.update({
            data: this.data,
            id: this.id,
            pointId: this.pointId,
            x: this.x,
            y0: this.y0,
            y1: this.y1,
            fill: this.fill,
            fillOpacity: this.fillOpacity,
            mouseOver: this.mouseOver,
            mouseOut: this.mouseOut,
            mouseMove: this.mouseMove,
            touchStart: this.touchStart,
            touchEnd: this.touchEnd,
            touchMove: this.touchMove,
            duration: this.duration,
            delay: this.delay,
            transform: this.transform,
            curve: this.curve
        }).draw();

        this.areaLine.update({
            data: this.data,
            id: this.id,
            pointId: this.pointId,
            x: this.x,
            y: this.y1,
            stroke: this.stroke,
            strokeOpacity: this.strokeOpacity,
            strokeWidth: this.strokeWidth,
            strokeDashArray: this.strokeDashArray,
            mouseOver: this.mouseOver,
            mouseOut: this.mouseOut,
            mouseMove: this.mouseMove,
            touchStart: this.touchStart,
            touchEnd: this.touchEnd,
            touchMove: this.touchMove,
            duration: this.duration,
            delay: this.delay,
            transform: this.transform,
            curve: this.curve
        }).draw();


        // Return object itself to facilitate chaining.
        return this;
    }
}
