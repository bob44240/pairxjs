import * as d3 from 'd3';
import {updateObject} from '../functions/updateObject.function';

/**
 *
 * A heRoVis SVG object.
 *
 * @export
 * @class SVG
 */
export class SVG {

  public selection: Selection = null;
  private selector: string;
  private duration = 1000;
  private delay = 0;

  private height = 400;
  private width = 300;
  private getParent: () => any = () => null;

  /**
   * Creates an instance of SVG.
   *
   * @param {Funtion} parent A callback function to retrieve the parent element.
   * @param {string} selector CSS class used to tag elements of chart instance.
   * @param {*} [spec] Specifications object containing key-value pairs to set.
   *
   * @memberOf SVG
   */
  constructor(parent: () => Selection, selector: string, spec?: any){
    this.getParent = parent;
    this.selector = selector;
    if (spec) {
      this.update(spec);
    }
  }

  /**
   *  Get the SVG's drawn element(s).
   *
   * @return {Selection} The SVG's drawn elements.
   *
   * @memberOf SVG
   */
  elements(){
    return this.getParent().selectAll('.' + this.selector);
  }


  /**
   *  Update the properties of a SVG object.
   *
   * @param {*} spec Specifications object containing key-value pairs to update.
   * @return {SVG} The updated SVG object;
   *
   * @memberOf SVG
   */
  update(spec: any):any {
    return updateObject(this,spec);
  }

  /**
   *
   * Draw the SVG on the parent element;
   *
   * @return {SVG} The SVG object.
   * @memberOf SVG
   *
   */
  draw(){
    const d3El = this.elements().data(['']);

    const enter = d3El.enter().append('svg');

    enter
      .attr('class', this.selector)
      .attr('height', this.height)
      .attr('width', this.width);
    d3El.transition()
      .duration(this.duration)
      .attr('height', this.height)
      .attr('width', this.width);

    const defs = enter.append('defs');

    const filter = defs.append('filter')
      .attr('id', this.selector + 'drop-shadow')
      .attr('height', '130%');

    // SourceAlpha refers to opacity of graphic that this filter will be applied to
    // convolve that with a Gaussian with standard deviation 3 and store result
    // in blur
    filter.append('feGaussianBlur')
      .attr('in', 'SourceAlpha')
      .attr('stdDeviation', 1)
      .attr('result', 'blur');

    // translate output of Gaussian blur to the right and downwards with 2px
    // store result in offsetBlur
    filter.append('feOffset')
      .attr('in', 'blur')
      .attr('dx', 1)
      .attr('dy', 1)
      .attr('result', 'offsetBlur');

    // overlay original SourceGraphic over translated blurred opacity by using
    // feMerge filter. Order of specifying inputs is important!
    const feMerge = filter.append('feMerge');

    feMerge.append('feMergeNode')
      .attr('in', 'offsetBlur')
    feMerge.append('feMergeNode')
      .attr('in', 'SourceGraphic');

    // Return object itself to facilitate chaining.
    return this;
  }

}
