function letterCombinations(digits: string): string[] {
  // base case
  if (digits.length === 0) return [];

  const map = new Map();

  map.set("2", ["a", "b", "c"]);
  map.set("3", ["d", "e", "f"]);
  map.set("4", ["g", "h", "i"]);
  map.set("5", ["j", "k", "l"]);
  map.set("6", ["m", "n", "o"]);
  map.set("7", ["p", "q", "r", "s"]);
  map.set("8", ["t", "u", "v"]);
  map.set("9", ["w", "x", "y", "z"]);

  return dfs(0, "", [], digits, map);
}

const dfs = (
  position: number,
  str: string,
  res: string[],
  digits: string,
  map: Map<string, string[]>
): string[] => {
  if (position === digits.length) {
    res.push(str);
  } else {
    let letters = map.get(digits[position]) || [];
    for (let i = 0; i < letters.length; i++) {
      dfs(position + 1, str + letters[i], res, digits, map);
    }
  }
  return res;
};

console.log(letterCombinations("234"));

export {};
