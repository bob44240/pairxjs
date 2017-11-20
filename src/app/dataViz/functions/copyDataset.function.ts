/**
 * Make a deep copy of a dataset.
 *
 * @param {Any[]} obj Dataset to copy.
 * @return {Any[]} Copy of dataset
 *
 */
export function copyDataset(obj:any[]):any[]{
  return JSON.parse(JSON.stringify(obj));
};
