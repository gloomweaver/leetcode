/**
 Do not return anything, modify nums in-place instead.
 */
function swap(nums: number[], idx1: number, idx2: number): void {
  const temp = nums[idx1];
  nums[idx1] = nums[idx2];
  nums[idx2] = temp;
}

function moveZeroes(nums: number[]): void {
  let cur = 0;
  for (let idx = 0; idx < nums.length; idx++) {
    if (nums[idx] !== 0) {
      swap(nums, idx, cur);
      cur++;
    }
  }
}
