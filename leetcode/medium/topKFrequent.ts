function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map();
  for (let n of nums) {
    map.get(n) ? map.set(n, map.get(n) + 1) : map.set(n, 1);
  }
  const res = [...map].sort((a, b) => b[1] - a[1]);
  return res.slice(0, k).map((e) => e[0]);
}

console.log(topKFrequent([1, 2, 3, 1, 1, 2], 2));
