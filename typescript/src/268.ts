function missingNumber(nums: number[]): number {
  const n = nums.length;
  const sum = Math.trunc((n * (n + 1)) / 2);
  return nums.reduce((acc, val) => acc - val, sum);
}
