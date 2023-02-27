// run ts-node lengthOfLongestSubstring.ts

function lengthOfLongestSubstring(s: string): number {
  // keeps track of the most recent index of each letter.
  const seen = new Map();
  // keeps track of the starting index of the current substring.
  let start = 0;
  // keeps track of the maximum substring length.
  let maxLen = 0;

  for (let i = 0; i < s.length; i++) {
    // if the current char was seen, move the start to (1 + the last index of this char)
    // max prevents moving backward, 'start' can only move forward
    if (seen.has(s[i])) {
      start = Math.max(seen.get(s[i]) + 1, start);
    }
    seen.set(s[i], i);
    // maximum of the current substring length and maxLen
    maxLen = Math.max(i - start + 1, maxLen);
  }

  return maxLen;
}

console.log(lengthOfLongestSubstring("pwwkew"));

function lengthOfLongestSubstringWithSet(s: string): number {
  // two pointers
  // move right and increase counter
  // when a repeated character is found, store the length
  // move left to right and reassign counter

  let left: number = 0,
    right: number = 1;
  let maxLen: number = 0;
  let subSet: Set<string> = new Set();

  subSet.add(s[0]);
  // pwwkew
  while (right < s.length) {
    if (!subSet.has(s[right])) {
      subSet.add(s[right]);
    } else {
      left = right;
    }
    maxLen = Math.max(right - left + 1, maxLen);
    right++;
  }

  return maxLen;
}
