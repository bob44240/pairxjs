/**
 * Calculate an array's expanded range
 *
 * @export
 * @param {number[]} d array of numbers for which expanded range will be calculated
 * @param {number} absLower absolute amount to expand range
 * @param {number} relLower relative amount to expand range
 * @param {number} absUpper absolute amount to expand range on upper side (optonal)
 * @param {number} relUpper realtive amount to expand range on upper side (optonal)
 * @returns {number[]} expanded range [lower,upper]
 */
export function expand(d: number[], absLower: number, relLower: number, absUpper?: number, relUpper?: number):number[]{

  //If no upper values are provided, assume expansion is symmetric
  if(!absUpper) absUpper = absLower;
  if(!relUpper) relUpper = relLower;

  // Compute range and expand
  var rng = [Math.min.apply(null,d),Math.max.apply(null,d)],
      span = rng[1] - rng[0],
      expandMin = rng[0] - span * relLower - absLower,
      expandMax =  rng[1] + span * relUpper + absUpper;

  return [expandMin, expandMax];
};
