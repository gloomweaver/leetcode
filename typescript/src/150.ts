function isOp(token: string) {
  return ["+", "-", "*", "/"].includes(token);
}

function applyOp(op: string, arg1: number, arg2: number): number {
  switch (op) {
    case "+":
      return arg1 + arg2;
    case "-":
      return arg1 - arg2;
    case "/":
      return Math.trunc(arg1 / arg2);
    case "*":
      return arg1 * arg2;
  }
  return NaN;
}

function evalRPN(tokens: string[]): number {
  const stack: number[] = [];
  tokens.forEach((token) => {
    if (!isOp(token)) {
      stack.push(+token);
    } else {
      const arg2 = stack.pop();
      const arg1 = stack.pop();
      const res = applyOp(token, arg1!, arg2!);
      stack.push(res);
    }
  });
  return stack[0];
}
