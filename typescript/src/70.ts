function climbStairs(n: number): number {
  if (n === 1 || n === 2) {
    return n;
  }
  let first = 1;
  let second = 2;
  for (let idx = 2; idx < n; idx++) {
    let third = first + second;
    first = second;
    second = third;
  }
  return second;
}
