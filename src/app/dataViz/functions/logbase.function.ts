/**
 * 
 * Calculate the logarithm of a number.
 * @param {Number} x number to be logged
 * @param {Number} base optional argument specifying base (default = e)
 * 
 */
export function logBase(x: number, base?: number):number {

  //If base not given, assume e
  if(!base) base = Math.log(1);
  
  return Math.log(x) / Math.log(base);
};