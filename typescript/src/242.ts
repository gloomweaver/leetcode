function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const freq = new Map<string, number>();

  for (let idx = 0; idx < s.length; idx++) {
    freq.set(s[idx], (freq.get(s[idx]) || 0) + 1);
    freq.set(t[idx], (freq.get(t[idx]) || 0) - 1);
  }

  for (const count of freq.values()) {
    if (count !== 0) {
      return false;
    }
  }

  return true;
}
