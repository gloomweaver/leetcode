function plusOne(digits: number[]): number[] {
  for (let idx = digits.length - 1; idx >= 0; idx--) {
    if (digits[idx] === 9) {
      digits[idx] = 0;
    } else {
      digits[idx] += 1;
      return digits;
    }
  }

  return [1, ...digits];
}
