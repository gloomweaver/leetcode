function rob(nums: number[]): number {
  const solve = new Array(nums.length);

  if (nums.length === 0) {
    return 0;
  }

  let robSecond = nums[0];
  let robFirst = Math.max(nums[0], nums[1] || 0);

  for (let idx = 2; idx < nums.length; idx++) {
    const current = Math.max(robSecond + nums[idx], robFirst);
    robSecond = robFirst;
    robFirst = current;
  }

  return robFirst;
}
