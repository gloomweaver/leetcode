function hammingWeight(n: number): number {
  let res = 0;
  while (n !== 0) {
    res++;
    n &= n - 1;
  }
  return res;
}
