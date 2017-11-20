
/**
 * Evaluate callback function on dataset element OR return fixed value.
 *
 * @export
 * @param {(Function | any)} x either a callback function to be evaluated on dataset element or a fixed
 *                           value to be returned.
 * @param {*} d              Dataset on which callback should be evaluated
 * @param {number} i         Index of dataset element on which callback should be evaluated
 * @returns {*}              either specified fixed value or result of callback function on dataset element.
 */
export function evalCallback(x: any | Function, d: any, i: number):any{
    var isFunc = typeof x === "function",
        isScale = isFunc && x.hasOwnProperty('range'),
        isCallback = isFunc && !(isScale);

    if(isCallback){
        // If x is a function that ISN'T a d3-scale, treat it as a callback and evaluate.
        return x(d, i);
    }else{
        // If x isn't a callback, just return x
        return x;
    }
}
