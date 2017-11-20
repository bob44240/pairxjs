import * as d3 from 'd3';
import {updateObject} from '../functions/updateObject.function';
import {SVG} from '../chartElements/svg.class';
import {Group} from '../chartElements/group.class';

/**
 *
 *
 * @export
 * @abstract
 * @class Chart
 */
export abstract class Chart {

  // Element properties
  protected readonly container: any;
  protected readonly selector: string;
  protected readonly svg: SVG = null;
  protected readonly layers: Group[] = [];

  // Layout properties
  protected width: number = 500;
  protected height: number = 400;
  protected top: number = 50;
  protected right: number = 50;
  protected bottom: number = 50;
  protected left: number = 100;

  // Animation properties
  protected delay: number = 0;
  protected duration: number = 0;
  
  protected location: string = '';

  // Data properties
  protected data: any[]=[];

  /**
   * Creates an instance of Chart.
   * @param {Selection} parent
   * @param {string} selector
   * @param {*} [spec]
   *
   * @memberOf Chart
   */
  constructor(container: any, selector: string, location: string) {

    this.location = location;
    this.container = container;
    this.selector = selector;
    this.svg = new SVG(
      () => d3.select(this.container) as any,
      selector, {
        duration: () => this.duration,
        delay: () => this.delay
      }
    );
   // d3.select(window).on('onresize', this.resize());

  }
  resize() {}
  /**
   * Update the properties of a Chart object.
   * @param {*} spec Specifications object containing key-value pairs to update.
   * @return {Chart} The updated Chart object;
   *
   * @memberOf Chart
   */
  update(spec: any):Chart{
    return updateObject(this,spec);
  }

  draw():Chart {
    this.svg.update({
      height: this.height + this.top + this.bottom,
      width: this.width + this.left + this.right
    }).draw();
    this.layers.forEach(layer => {
      layer.draw();
    });

    return this;
  }

  remove() {
    this.svg.elements().remove();
  }

}
