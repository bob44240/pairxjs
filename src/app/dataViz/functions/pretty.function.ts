import {logBase} from './logbase.function';

/**
 * 
 * Compute a sequence of about n+1 equally spaced ‘round’ values which cover the range of the values in x.
 * The values are chosen so that they are 1, 2 or 5 times a power of 10.  A direct port of R's 'pretty'
 * algoirthm via the labeling package.
 * 
 * @export
 * @param {Number} dMin Minimum data value
 * @param {Number} dMax Maximum data value
 * @param {Number} m Desired number of labels
 * @param {Number} n Desired number of intervals (specify either m or n)
 * @param {Number} minN Minimum number of intervals.
 * @param {Number} shrinkSml factor by which scale is shrunk when range is very small.
 * @param {Number} highUBias Larger values favor larger units.
 * @param {Number} u5Bias Multiplier favoring factor 5 over 2.
 * @returns {Number[]} array of axis label locations.
 * 
 */
export function pretty(dMin: number, dMax: number, m:number , n?:number, minN?:number, shrinkSml?:number, highUBias?:number, u5Bias?:number):number[]{
  if(typeof m === 'undefined') m = 6;
  if(typeof n === 'undefined') n = Math.floor(m) - 1;
  if(typeof minN === 'undefined') minN = Math.floor(n / 3);
  if(typeof shrinkSml === 'undefined') shrinkSml = 0.75;
  if(typeof highUBias === 'undefined') highUBias = 1.5;
  if(typeof u5Bias === 'undefined') u5Bias = 0.5 + 1.5 * highUBias;
  var nDiv = n,
      h = highUBias,
      h5 = u5Bias,
      dx = dMax - dMin,
      cell,
      iSmall,
      U;

    if(dx === 0 && dMax === 0){
      cell = 1;
      iSmall = true;
      U = 1;
    }else{
      cell = Math.max(Math.abs(dMin), Math.abs(dMax));
      if(h5 >= 1.5 * h + 0.5) U = 1 + 1/(1 + h);
      else U = 1.5/(1 + h5);
      iSmall = dx < (cell * U * Math.max(1, nDiv) * 1e-07 * 3);
    }
    if(iSmall){
      if(cell > 10) cell = 9 + cell / 10;
      cell = cell * shrinkSml;
      if(minN > 1) cell = cell / minN;
    }else{
      cell = dx;
      if(nDiv > 1) cell = cell / nDiv;
    }
    if(cell < 20 * 1e-07) cell = 20 * 1e-07;
    var base = Math.pow(10, Math.floor(logBase(cell,10))),
        unit = base;
    if((2 * base) - cell < h * (cell - unit)){
      unit = 2 * base;
      if((5 * base) - cell < h5 * (cell - unit)){
        unit = 5 * base;
        if((10 * base) - cell < h * (cell - unit)) unit = 10 * base;
      }
    }
    var ns = Math.floor((dMin / unit) + 1e-07),
        nu = Math.ceil((dMax / unit) - 1e-07);
    var k = Math.floor(0.5 + nu - ns);
    if(k < minN){
      k = minN - k;
      if(ns >= 0){
        nu = nu + k / 2;
        ns = ns - k / 2 + k % 2;
      }else {
        ns = ns - k / 2;
        nu = nu + k / 2 + k % 2;
      }
      nDiv = minN;
  }else nDiv = k;
  var graphMin = ns * unit,
      graphMax = nu * unit,
      seqOut = [];

  for(var i = graphMin; i <= graphMax; i += unit) seqOut.push(i);

  return seqOut;
};