function fizzBuzz(n: number): string[] {
  return new Array(n).fill(0).map((_, i) => {
    const idx = i + 1;
    if (idx % 15 === 0) {
      return "FizzBuzz";
    }
    if (idx % 5 === 0) {
      return "Buzz";
    }
    if (idx % 3 === 0) {
      return "Fizz";
    }
    return idx.toString();
  });
}
