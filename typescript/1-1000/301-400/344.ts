function reverseString(s: string[]): void {
  for (let start = 0, end = s.length - 1; start < end; start++, end--) {
    const temp = s[start];
    s[start] = s[end];
    s[end] = temp;
  }
}
