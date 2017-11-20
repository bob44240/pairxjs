
/**
 * Convert argument into a callback function.
 *
 * @export
 * @param {Function | Any} x either a callback function or a fixed value
 * @returns {*} A callback function.
 */
export function makeCallback(x: any | Function):Function{
    var isFunc = typeof x === "function",
        isScale = isFunc && x.hasOwnProperty('range'),
        isCallback = isFunc && !(isScale);

    if(isCallback){
        // If x is a function that ISN'T a d3-scale, return as is.
        return x;
    }else{
        // If x isn't a callback, return a function that returns x;
        return function(d?:any, i?:number){ return x; };
    }
}
