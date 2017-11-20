import * as d3 from 'd3';
import { copyDataset } from '../functions/copyDataset.function';

export function getFrontier(data: number[][]):number[][] {
  console.log(data);
  let temp = data.slice();
  const first = data.slice()
                  .sort((a, b) => (a[1] - b[1]) || (a[0] - b[0]))
                  .pop(),
        check = d => first[1] === d[0][1] && first[0] === d[0][0];
  while (!check(temp)) {
    const tail = temp.slice(1);
    const head = temp.slice(0,1);
    temp = tail.concat(head);
  }
  const frontier = [];
  frontier.push(temp[0]);
  for (let j = 1; j < temp.length; j++) {
    if (temp[j][0] > temp[j-1][0]) {
      frontier.push(temp[j]);
    } else {
      break;
    }
  }
  return frontier;
}