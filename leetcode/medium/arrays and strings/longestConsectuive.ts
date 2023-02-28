function longestConsecutive(nums: number[]): number {
  let longest: number = 0;
  const set: Set<number> = new Set([...nums]);

  let counter = 1;
  for (let num of set) {
    counter = 1;
    if (!set.has(num - 1)) {
      while (set.has(++num)) {
        counter++;
      }
    }
    longest = Math.max(longest, counter);
  }

  return longest;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 9
