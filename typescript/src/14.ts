function commonPrefix(
  str1: string | undefined,
  str2: string | undefined
): string {
  if (str1 === undefined || str2 === undefined) {
    return str1 || str2 || "";
  }
  const min = Math.min(str1.length, str2.length);
  for (let i = 0; i < min; i++) {
    if (str1[i] !== str2[i]) {
      return str1.slice(0, i);
    }
  }
  return str1.slice(0, min);
}

function lcp(strs: string[], start = 0, end = strs.length): string {
  if (start >= end) {
    return strs[start];
  }
  const mid = Math.trunc((start + end) / 2);
  const left = lcp(strs, start, mid);
  const right = lcp(strs, mid + 1, end);
  return commonPrefix(left, right);
}

function longestCommonPrefix(strs: string[]): string {
  return lcp(strs);
}
