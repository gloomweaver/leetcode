function hammingDistance(x: number, y: number): number {
  let dif = x ^ y;
  let count = 0;
  while (dif) {
    count += 1;
    dif &= dif - 1;
  }
  return count;
}
