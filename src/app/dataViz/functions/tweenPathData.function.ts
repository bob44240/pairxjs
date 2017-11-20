import * as d3 from "d3";
import {getNearestRow} from './getNearestRow.function';
/**
 * Make two path datasets suitable for tweening.
 *
 * @param {Any[]} start Dataset to which points are added.
 * @param {Any[]} end Dataset from which points are taken.
 * @param {Function} accessor Function to access position value.
 * @return {Any[]} index of closest element.
 *
 */
export function tweenPathData(a:any[], b:any[], accessor: Function):any[]{
    b.forEach(d => {
        var index = a.map(x => accessor(x)).indexOf(accessor(d));
        if(index === -1) a.push(getNearestRow(a, accessor, accessor(d)));
    });

    a.sort((a,b) => d3.ascending(accessor(a), accessor(b)));

    return a;

};
