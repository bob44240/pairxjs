
import * as d3 from 'd3';
import { ChartElement } from './chartElement.class';
import { tweenPathData } from '../functions/tweenPathData.function';
import { updateObject } from '../functions/updateObject.function';
import { makeCallback } from '../functions/makeCallback.function';
import { evalCallback } from '../functions/evalCallback.function';

/**
 *
 * A heRoVis AreaFill mark object.
 *
 * @export
 * @class Group
 */
export class AreaFill extends ChartElement {

    // ref Argument of type 'Function' is not assignable to parameter of type 'CurveFactory'.
    // Type 'Function' provides no match for the signature '(context: CanvasRenderingContext2D | Path): CurveGenerator'
    private curve: any = d3.curveLinear;
    private x: any = 0; // number | Function = 0;

    private y0: any = 0; //  number | Function = 0;
    private y1: any = 0; // number | Function = 0;
    private pointId: any = (d,i) => evalCallback(this.x, d, i);
    private fill: string | Function = '#000000';
    private fillOpacity: number | Function = 1;
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

    /**
     * Creates an instance of AreaFill mark.  Area marks are svg path elements
     * which correspond to series' in an area chart.
     *
     * @param {Funtion} parent A callback function to retrieve the parent element.
     * @param {string} selector CSS class used to tag elements of chart instance.
     * @param {*} [spec] Specifications object containing key-value pairs to set.
     *
     * @memberOf AreaFill
     */
    constructor(parent: () => Selection, selector: string, spec?: any) {
        super(parent, selector);
        if(spec) {
            this.update(spec);
        }
    }

    /**
     *
     * Draw the AreaFill mark(s) on the parent element;
     *
     * @return {AreaFill} The AreaFill object.
     * @memberOf AreaFill
     *
     */
    draw():AreaFill {
        // Capture 'this' to avoid scoping issues within callbacks.
        var that = this;

        this.data.forEach(d => d.values.forEach(a => {
          var b = this.x(a);
        }));

        // Extract previously bound data from element to use in tweening.
        var oldData = [];
        this.elements().each(function(){ oldData.push(d3.select(this).datum()) });

        // Create area generator object
        var area = d3.area()
            .x(this.x)
            .y0(this.y0)
            .y1(this.y1)
            .curve(this.curve);

        // Compute slections
        var update = this.elements().data(this.data, this.id),
            enter = update.enter(),
            exit = update.exit();

        update
          .on('mouseover', this.mouseOver)
          .on('mouseout', this.mouseOut)
          .on('mousemove', this.mouseMove)
          .on('touchstart', this.touchStart)
          .on('touchmove', this.touchMove)
          .on('touchend', this.touchEnd)
          .transition()
          .duration(this.duration)
          .attrTween('d', function(d,i){

              // Factory function to create a tweening function between the path element of
              // old data and that of the new data.  It is necessary to handle the case where
              // the number of points differs between the new and old data.  This tweening function
              // ensures a graceful transition without the 'unwrapping' that would otherwise occur.

              // Generate path strings for starting of tweening, end of tweening, and final
              var old = oldData[oldData.map(that.id).indexOf(that.id(d,i))];

              var startTweenData = tweenPathData(old.values, d.values, makeCallback(that.pointId)),
                  endTweenData = tweenPathData(d.values, old.values, makeCallback(that.pointId)),
                  startTweenPath = area(startTweenData),
                  endTweenPath = area(endTweenData),
                  finalTweenPath = area(d.values);
              // Return an interpolater function which uses interpolateString between startTweenPath,
              // and endTweenPath and then returns the final path at the end.
              return function(t){
                if(t==1){
                  return finalTweenPath;
                }else{
                  return d3.interpolateString(startTweenPath, endTweenPath)(t);
                }
            }
          })
          .attr('transform', this.transform)
          .attr('fill', this.fill)
          .attr('fill-opacity', this.fillOpacity);

        // Enter selection
        enter
          .append('path')
          .on('mouseover', this.mouseOver)
          .on('mouseout', this.mouseOut)
          .on('mousemove', this.mouseMove)
          .on('touchstart', this.touchStart)
          .on('touchmove', this.touchMove)
          .on('touchend', this.touchEnd)
          .attr('class', this.selector)
          .attr('transform', this.transform)
          .attr('fill', '#000000')
          .attr('fill-opacity', 0)
          .transition()
          .duration(this.duration)
          .delay(this.delay)
          .attr('d', d => area(d.values))
          .attr('transform', this.transform)
          .attr('fill', this.fill)
          .attr('fill-opacity', this.fillOpacity);

        // Exit selection
        exit.remove();

        // Return object itself to facilitate chaining.
        return this;
    }
}
