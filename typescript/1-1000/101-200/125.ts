function isPalindrome(s: string): boolean {
  s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  for (let start = 0, end = s.length - 1; start < end; start++, end--) {
    if (s[start] !== s[end]) {
      return false;
    }
  }
  return true;
}
