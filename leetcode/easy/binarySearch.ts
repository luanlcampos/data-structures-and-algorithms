function search(nums: number[], target: number): number {
  let left = 0,
    right = nums.length - 1;
  // cases
  // 1 - if pivot = target, return right
  // 2 - if pivot < target, move the left to the pivot + 1
  // 3 - if pivot > target, move right to the pivot - 1

  while (left <= right) {
    let pivot = Math.floor((left + right) / 2);

    if (nums[pivot] === target) return pivot;
    else if (nums[pivot] < target) {
      left = pivot + 1;
    } else if (nums[pivot] > target) {
      right = pivot - 1;
    }
  }

  return -1;
}
