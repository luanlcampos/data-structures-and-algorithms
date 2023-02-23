function groupAnagrams(strs: string[]): string[][] {
  // we are going to use a map<sortedString, string[]>
  // loop through the array of strings:
  // 1. sort each string
  // 2. check if it's already in the map
  // 3. if so, push the unsorted string to the array of strings
  // 4. if not, add the key to the hashmap

  const map: Map<string, string[]> = new Map();

  for (let str of strs) {
    let sortedString = str.split("").sort().join("");
    map.set(sortedString, [...(map.get(sortedString) || []), str]);
  }

  return Array.from(map.values());
}

console.log(groupAnagrams(["eat", "ate", "dog", "pog"]));
