function romanToInt(s: string): number {
  const map = new Map();
  map.set("I", 1);
  map.set("V", 5);
  map.set("X", 10);
  map.set("L", 50);
  map.set("C", 100);
  map.set("D", 500);
  map.set("M", 1000);

  let sum = 0;
  for (let c = 0; c < s.length; c++) {
    let curr = map.get(s[c]);
    let next = map.get(s[c + 1]);
    if (next > curr) {
      sum += map.get(s[c + 1]) - map.get(s[c]);
      c++;
    } else {
      sum += map.get(s[c]);
    }
  }
  return sum;
}
