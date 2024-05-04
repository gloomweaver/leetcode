class Solution {
  constructor(private nums: number[], private original = nums.slice()) {}

  private getRandIndex() {
    return Math.trunc(Math.random() * this.nums.length);
  }

  private swap(idx1: number, idx2: number) {
    let temp = this.nums[idx1];
    this.nums[idx1] = this.nums[idx2];
    this.nums[idx2] = temp;
  }

  reset(): number[] {
    this.nums = this.original.slice();
    return this.original;
  }

  shuffle(): number[] {
    for (let i = 0; i < this.nums.length; i++) {
      const swapWith = this.getRandIndex();
      this.swap(i, swapWith);
    }
    return this.nums;
  }
}
