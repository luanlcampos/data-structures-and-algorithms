function twoSumII(numbers: number[], target: number): number[] {
  let pLeft = 0,
    pRight = numbers.length - 1;

  // two pointers solution
  while (pLeft < pRight) {
    let sum = numbers[pLeft] + numbers[pRight];
    if (sum === target) {
      return [pLeft + 1, pRight + 1];
    } else if (sum > target) {
      pRight--;
    } else if (sum < target) {
      pLeft++;
    }
  }

  return [];
}
