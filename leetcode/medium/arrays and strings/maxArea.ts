function maxArea(height: number[]): number {
  let left: number = 0,
    right: number = height.length - 1;
  let res = -1;

  // idea is to start with the left in the 0 and right in the last
  // 1. calculate the amount of water and store it in the res
  // 2. move the shorter line and calculate again
  // if greater than res, update res

  while (left < right) {
    // 1.
    // get area height by getting the smallest value
    let areaHeight: number = Math.min(height[left], height[right]);

    // get diff between left and height
    let diff: number = right - left;

    let area: number = areaHeight * diff;

    if (area > res) {
      res = area;
    }

    // 2. move shortest pointer
    if (height[left] > height[right]) {
      right--;
    } else {
      left++;
    }
  }

  return res;
}
