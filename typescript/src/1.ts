export function twoSum(nums: number[], target: number): number[] {
  const elementExists = new Map<number, number>();
  for (let curIndex = 0; curIndex < nums.length; curIndex++) {
    const cur = nums[curIndex];
    const pair = elementExists.get(target - cur);
    if (pair !== undefined) {
      return [pair, curIndex];
    }
    if (!elementExists.get(cur)) {
      elementExists.set(cur, curIndex);
    }
  }

  return [NaN, NaN];
}
