const threePow19 = 1162261467;

function isPowerOfThree(n: number): boolean {
  return n > 0 && threePow19 % n === 0;
}
