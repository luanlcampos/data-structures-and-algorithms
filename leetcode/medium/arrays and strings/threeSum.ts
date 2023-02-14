function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  let res: number[][] = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      break;
    }

    if (i === 0 || nums[i] !== nums[i - 1]) {
      twoSum(nums, i, res);
    }
  }

  return res;
}

function twoSum(numbers: number[], i: number, res: number[][]): void {
  let pLeft = i + 1,
    pRight = numbers.length - 1;

  // two pointers solution
  while (pLeft < pRight) {
    let sum = numbers[i] + numbers[pLeft] + numbers[pRight];
    if (sum === 0) {
      res.push([numbers[i], numbers[pLeft], numbers[pRight]]);
      pLeft++;
      pRight--;

      // to avoid duplicates, increment low while it's equal to the one before
      while (pLeft < pRight && numbers[pLeft] === numbers[pLeft - 1]) {
        pLeft++;
      }
    } else if (sum > 0) {
      pRight--;
    } else if (sum < 0) {
      pLeft++;
    }
  }
}
