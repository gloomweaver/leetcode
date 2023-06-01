function countPrimes(n: number): number {
  const primes = new Array(n).fill(true);
  let count = 0;
  for (let num = 2; num < primes.length; num++) {
    if (!primes[num]) {
      continue;
    }

    count++;
    for (let mark = 2 * num; mark < primes.length; mark += num) {
      primes[mark] = false;
    }
  }

  return count;
}
