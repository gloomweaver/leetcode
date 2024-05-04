function productExceptSelf(nums: number[]): number[] {
  let left = 1;
  const res = new Array(nums.length).fill(0);
  for (let idx = nums.length - 1; idx > 0; idx--) {
    res[idx] = nums[idx] * (res[idx + 1] ?? 1);
  }
  for (let idx = 0; idx < nums.length; idx++) {
    res[idx] = left * (res[idx + 1] ?? 1);
    left *= nums[idx];
  }
  return res;
}

console.log(productExceptSelf([1, 2, 3, 4, 5]));
