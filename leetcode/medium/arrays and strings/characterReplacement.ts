function characterReplacement(s: string, k: number): number {
  // map the characters count for the current substring
  const count: Map<string, number> = new Map();
  let left: number = 0,
    len: number = 0,
    maxCount: number = 0;

  for (let i = 0; i < s.length; i++) {
    count.set(s[i], (count.get(s[i]) || 0) + 1);

    // always track the counter of the dominant char
    maxCount = Math.max(maxCount, count.get(s[i]) || 0);

    // substring is just valid while the dominant char - len of substring
    // is less than the delimiter k
    // when the substring is invalid, decrease the left char counter
    // and move the left pointer until the substring is valid again
    let subStrLen: number = i - left + 1;
    if (subStrLen - maxCount > k) {
      count.set(s[left], (count.get(s[left]) || 1) - 1);
      left++;
    }

    len = Math.max(len, i - left + 1);
  }

  return len;
}

console.log(characterReplacement("ABAB", 2));
console.log(characterReplacement("AABABBA", 1));
