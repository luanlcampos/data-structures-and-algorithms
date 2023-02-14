function largestNumber(nums: number[]): string {
  let arr: string[] = nums.map((num) => num.toString());
  arr.sort((a, b) => {
    return a.concat(b) > b.concat(a) ? -1 : 1;
  });
  return arr[0] === "0" ? "0" : arr.join("");
}

console.log(largestNumber([3, 30, 34, 5, 9]));
