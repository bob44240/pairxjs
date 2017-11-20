import {getNearestElement} from "./getNearestElement.function";


/**
 * Get the row in a dataset closest to a given value.
 * @param {any[]} data Dataset to expand.
 * @param {Function} accessor Function to access position value.
 * @param {number} value Value of position column of other dataset.
 * @return {Any} new dataset row with addiional points to match those of other dataset.
 */
export function getNearestRow(data: any[], accessor: Function, value: number):any{

    var values = data.map(d => accessor(d));
    var index = getNearestElement(values,value);
    var keys = Object.keys(data[index]),
        outObj = {};

    for(var j = 0; j < keys.length; j++){
      outObj[keys[j]] = data[index][keys[j]];
    }

    return outObj;
  };
