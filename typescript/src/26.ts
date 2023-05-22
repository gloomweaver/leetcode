function removeDuplicates(nums: number[]): number {
  let insertIndex = 0;
  for (let curIndex = 0; curIndex < nums.length; curIndex++) {
    if (nums[curIndex] !== nums[curIndex - 1]) {
      nums[insertIndex] = nums[curIndex];
      insertIndex++;
    }
  }
  return insertIndex;
}
