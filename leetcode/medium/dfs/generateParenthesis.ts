function generateParenthesis(n: number): string[] {
  const stack = [];
  const res = [];
  dfs(0, 0, n, "", res);
  return res;
}
function dfs(left: number, right: number, n: number, s: string, res: string[]) {
  if (s.length === n * 2) {
    res.push(s);
    return;
  }
  if (left < n) {
    dfs(left + 1, right, n, s + "(", res);
  }
  if (left > right) {
    dfs(left, right + 1, n, s + ")", res);
  }
}

export {};
