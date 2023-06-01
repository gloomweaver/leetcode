const map: Record<string, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInt(s: string): number {
  return s
    .split("")
    .map((val, idx, arr) => {
      if (map[val] < map[arr[idx + 1]]) {
        return -map[val];
      }
      return map[val];
    })
    .reduce((acc, val) => acc + val);
}
