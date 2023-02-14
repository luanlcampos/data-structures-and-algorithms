function groupAnagrams(strs: string[]): string[][] {
  const map: Map<string, string[]> = new Map();

  for (let str of strs) {
    // sort the string
    let sortedString = str.split("").sort().join("");

    // check if the sorted string is a key in the map, if so,
    // add the unsorted string to the key valu
    if (map.has(sortedString)) {
      map.set(sortedString, [...map.get(sortedString), str]);
    }
    // if not, add the key to the map
    else {
      map.set(sortedString, [str]);
    }
  }

  return Array.from(map.values());
}
