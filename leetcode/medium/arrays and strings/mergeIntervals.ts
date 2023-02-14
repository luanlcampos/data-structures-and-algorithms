function merge(intervals: number[][]): number[][] {
  // first sort all array elements based on the first element of each interval
  // now the lowest interval will be always first, so we can only compare the ending intervals
  // [[0, 4], [1, 4]]
  //
  intervals.sort((a, b) => a[0] - b[0]);
  let res: number[][] = [];

  for (let int of intervals) {
    let len = res.length;
    // add the first interval or add interval if the last added item ending interval
    // is lower than the current interval starting

    if (len === 0 || res[len - 1][1] < int[0]) {
      res.push(int);
    }
    // in case that the current starting interval is greater or equal
    // then the previous interval ending, we should change the previous interval
    // ending to the max value between prev and current ending
    else {
      res[len - 1][1] = Math.max(res[len - 1][1], int[1]);
    }
  }
  return res;
}

console.log(
  merge([
    [1, 4],
    [0, 4],
  ])
);
