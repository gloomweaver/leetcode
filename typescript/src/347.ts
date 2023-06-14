function getFrequency(nums: number[]): [string, number][] {
  return Object.entries(
    nums.reduce((acc, val) => {
      acc[val] = (acc[val] ?? 0) + 1;
      return acc;
    }, {} as Record<string, number>)
  );
}

function swap<T>(arr: T[], idx1: number, idx2: number) {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function partition(nums: [string, number][], begin = 0, end = nums.length - 1) {
  const pivot = nums[begin][1];
  swap(nums, begin, end);
  let newPivotIdx = begin;
  for (let idx = begin; idx <= end; idx++) {
    if (nums[idx][1] > pivot) {
      swap(nums, newPivotIdx, idx);
      newPivotIdx++;
    }
  }
  swap(nums, newPivotIdx, end);
  return newPivotIdx;
}

function quickSelect(
  nums: [string, number][],
  k: number,
  begin = 0,
  end = nums.length - 1
): void {
  if (begin >= end) {
    return;
  }

  const pivotIdx = partition(nums, begin, end);
  if (pivotIdx + 1 === k) {
    return;
  } else if (k < pivotIdx + 1) {
    quickSelect(nums, k, begin, pivotIdx - 1);
  } else {
    quickSelect(nums, k, pivotIdx + 1, end);
  }
}

function topKFrequent(nums: number[], k: number): number[] {
  const freq = getFrequency(nums);
  quickSelect(freq, k);

  return freq.map((entry) => +entry[0]).slice(0, k);
}
