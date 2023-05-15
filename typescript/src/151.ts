// strings are immutable in js, so not possible to make it O(1) space
function reverseWords(s: string): string {
  return s.trim().split(/ +/).reverse().join(" ");
}
