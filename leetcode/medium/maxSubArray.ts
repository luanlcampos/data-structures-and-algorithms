function maxSubArray(nums: number[]): number {
  let currentSubArray = nums[0];
  let maxSubArray = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSubArray = Math.max(nums[i], currentSubArray + nums[i]);
    maxSubArray = Math.max(maxSubArray, currentSubArray);
  }

  return maxSubArray;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
