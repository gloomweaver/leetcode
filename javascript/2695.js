class ArrayWrapper {
  constructor(nums) {
    this._inner = nums;
  }

  valueOf() {
    return this._inner.reduce((acc, cur) => acc + cur, 0);
  }

  toString() {
    return `[${this._inner.toString()}]`;
  }
}
