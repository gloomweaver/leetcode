const MAX = 2 ** 31 - 1;
const MIN = 2 ** 31 * -1;

function myAtoi(s: string): number {
  let index = 0;
  let result = 0;
  let sign = 1;

  while (s[index] === " ") {
    index++;
  }
  if (s[index] === "+" || s[index] === "-") {
    if (s[index] === "-") {
      sign = -1;
    }
    index++;
  }

  for (let i = index; i < s.length; i++) {
    const char = s[i];
    if (char < "0" || char > "9") {
      break;
    }
    result = result * 10 + (char.charCodeAt(0) - "0".charCodeAt(0));
    if (result > MAX) {
      return sign === 1 ? MAX : MIN;
    }
  }
  return result * sign;
}
