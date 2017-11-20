
import * as d3 from 'd3';
import { ChartElement } from './chartElement.class';
import { tweenPathData } from '../functions/tweenPathData.function';
import { updateObject } from '../functions/updateObject.function';
import { makeCallback } from '../functions/makeCallback.function';
import { evalCallback } from '../functions/evalCallback.function';

/**
 *
 * A heRoVis AreaLine mark object.
 *
 * @export
 * @class AreaLine
 */
export class AreaLine extends ChartElement {

  private curve: any = d3.curveLinear;
  private x: any = 0;
  private y: any = 0;
  private pointId: any = (d,i) => evalCallback(this.x, d, i);
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
   * Creates an instance of a AreaLine object.  A AreaLine object is a set of SVG paths
   * elements representing a line.
   *
   * @param {Funtion} parent A callback function to retrieve the parent element.
   * @param {string} selector CSS class used to tag elements of chart instance.
   * @param {*} [spec] Specifications object containing key-value pairs to set.
   *
   * @memberOf AreaLine
   */
  constructor(parent: () => Selection, selector: string, spec?: any) {
    super(parent, selector);
    if (spec) {
      this.update(spec);
    }
  }

  /**
   *
   * Draw the AreaLine mark(s) on the parent element;
   *
   * @return {AreaLine} The AreaLine object.
   * @memberOf Line
   *
   */
  draw():AreaLine {
    // Capture 'this' to avoid scoping issues within callbacks.
    var that = this;

    // Extract previously bound data from element to use in tweening.
    var oldData = [];
    this.elements().each(function(){ oldData.push(d3.select(this).datum()) });

    // Create area generator object
    var line = d3.line()
      .x(this.x)
      .y(this.y)
      .curve(this.curve);

    // Compute selections
    var update = this.elements().data(this.data, this.id),
      enter = update.enter(),
      exit = update.exit();

    // Update selection
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

        // Generate path strings for starting of tweening, end of tweening, and final
        var old = oldData[oldData.map(that.id).indexOf(that.id(d,i))],
          startTweenData = tweenPathData(old.values, d.values, makeCallback(that.pointId)),
          endTweenData = tweenPathData(d.values, old.values, makeCallback(that.pointId)),
          startTweenPath = line(startTweenData),
          endTweenPath = line(endTweenData),
          finalTweenPath = line(d.values);

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
      .attr('stroke', this.stroke)
      .attr('stroke-width', this.strokeWidth)
      .attr('stroke-opacity', this.strokeOpacity)
      .attr('stroke-dasharray', this.strokeDashArray)
      .attr('fill-opacity', 0);

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
      .attr('stroke', '#000000')
      .attr('stroke-width', 0)
      .attr('stroke-opacity', 0)
      .attr('fill-opacity', 0)
      .transition()
      .duration(this.duration)
      .delay(this.delay)
      .attr('d', d => line(d.values))
      .attr('transform', this.transform)
      .attr('stroke', this.stroke)
      .attr('stroke-width', this.strokeWidth)
      .attr('stroke-opacity', this.strokeOpacity)
      .attr('stroke-dasharray', this.strokeDashArray);


    // Exit selection
    exit.remove();

    // Return object itself to facilitate chaining.
    return this;

  }
}
