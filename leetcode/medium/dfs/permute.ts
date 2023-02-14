function permute(nums: number[]): number[][] {
  let res: number[][] = [];
  dfs(nums, new Set(), res);
  return res;
}

function dfs(nums: number[], curr: Set<number>, res: number[][]): void {
  if (curr.size == nums.length) {
    res.push(Array.from(curr));
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    if (curr.has(nums[i])) continue;
    curr.add(nums[i]);
    dfs(nums, curr, res);
    curr.delete(nums[i]);
  }
}

console.log(permute([1, 2, 3]));

export {};
