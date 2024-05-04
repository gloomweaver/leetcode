function maxSubArray(nums: number[]): number {
  let res = nums[0];
  let max = nums[0];
  for (let idx = 1; idx < nums.length; idx++) {
    const num = nums[idx];
    res = Math.max(res + num, num);
    max = Math.max(res, max);
  }
  return max;
}
