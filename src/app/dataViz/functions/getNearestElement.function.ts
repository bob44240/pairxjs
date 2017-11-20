import * as d3 from "d3";
/**
 * Find the index of the element closest to the given value.
 *
 * @param {number[]} elements number of array of elements to select from.
 * @param {number} value value to find element closest to.
 * @return {number} index of closest element.
 *
 */
export function getNearestElement(elements: number[], value: number):number{

    var distance = elements.map(a =>  Math.abs(a - value)),
        min = d3.min(distance),
        index = distance.indexOf(min);

    return index;

};
