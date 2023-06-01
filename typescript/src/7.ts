const MIN = -Math.pow(2, 31);
const MAX = Math.pow(2, 31) - 1;

function reverse(x: number): number {
  let rev = 0;

  while (x !== 0) {
    const digit = x % 10;
    x = Math.trunc(x / 10);
    rev = rev * 10 + digit;
    if (rev > MAX || rev < MIN) {
      return 0;
    }
  }
  return rev;
}
