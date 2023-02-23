function productExceptSelfN2(nums: number[]): number[] {
  const ans: number[] = [];
  // store a sum variable that will store the skipped value
  // loop through array and when i === skipped value, don't calculate
  // [1,2,3,4]
  let currIndex: number = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (j !== currIndex) {
        ans[currIndex]
          ? (ans[currIndex] *= nums[j])
          : (ans[currIndex] = nums[j]);
      }
    }
    currIndex++;
  }

  return ans;
}

function productExceptSelf(nums: number[]): number[] {
  // create an empty array to store the result
  const ans: number[] = [];

  // use two loops to calculate the prefix and postfix products of the input array
  // In the first loop, calculate the prefix product of the input array elements and
  // store it in the corresponding index of the result array.

  let prefix: number = 1;
  for (let i = 0; i < nums.length; i++) {
    ans[i] = prefix;
    prefix *= nums[i];
  }

  // In the second loop, calculate the postfix product of the input array elements
  // and update the corresponding index of the result array by multiplying it with the postfix product.
  let postfix: number = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    ans[i] *= postfix;
    postfix *= nums[i];
  }

  return ans;
}

console.log(productExceptSelf([1, 2, 3, 4]));
