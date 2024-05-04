function swap(nums: number[], idx1: number, idx2: number): void {
  const temp = nums[idx1];
  nums[idx1] = nums[idx2];
  nums[idx2] = temp;
}

function partition(nums: number[], begin: number, end: number): number {
  const pivotIndex = begin + Math.trunc((end - begin) * Math.random());
  const pivotValue = nums[pivotIndex];
  swap(nums, pivotIndex, end);
  let cur = begin;
  for (let i = begin; i < end; i++) {
    if (nums[i] < pivotValue) {
      swap(nums, i, cur);
      cur++;
    }
  }
  swap(nums, cur, end);
  return cur;
}

function quicksort(nums: number[], begin = 0, end = nums.length - 1): void {
  if (begin >= end) return;
  const pivotIndex = partition(nums, begin, end);

  quicksort(nums, begin, pivotIndex - 1);
  quicksort(nums, pivotIndex + 1, end);
}

function sortArray(nums: number[]): number[] {
  quicksort(nums);
  return nums;
}
