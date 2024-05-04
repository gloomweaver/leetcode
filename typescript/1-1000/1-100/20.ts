const PARENTHESIS_MAP: Record<string, string> = {
  "}": "{",
  "]": "[",
  ")": "(",
};

const OPENING = Object.values(PARENTHESIS_MAP);

function isValid(s: string): boolean {
  const stack: string[] = [];
  for (const char of s) {
    if (OPENING.includes(char)) {
      stack.push(char);
    } else {
      const op = stack.pop();
      if (PARENTHESIS_MAP[char] !== op) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
