var solution = function (isBadVersion: any) {
  function recurse(left: number, right: number): number | false {
    if (left >= right) {
      return left + 1;
    }
    const mid = Math.trunc(left + (right - left) / 2);
    return isBadVersion(mid) ? recurse(left, mid) : recurse(mid + 1, right);
  }

  return function (n: number): number {
    return recurse(0, n) || -1;
  };
};
