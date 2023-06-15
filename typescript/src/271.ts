function encode(strs: string[]): string {
  let res = "";
  for (const str of strs) {
    res += str.length.toString().padStart(4, "0") + str;
  }
  return res;
}

function decode(s: string): string[] {
  const res: string[] = [];

  let idx = 0;
  while (idx < s.length) {
    const size = +s.slice(idx, idx + 4);
    idx += 4;
    const str = s.slice(idx, idx + size);
    res.push(str);
    idx += str.length;
  }
  return res;
}
