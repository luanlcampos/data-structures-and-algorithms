function twoSum(nums: number[], target: number): number[] {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let compliment: number = target - nums[i];
    if (map.has(compliment)) {
      return [map.get(compliment), i];
    } else {
      map.set(nums[i], i);
    }
  }
  return [];
}
