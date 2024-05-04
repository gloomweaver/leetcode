type StackValue = {
  val: number;
  min: number;
};

class MinStack {
  constructor(private stack = new Array<StackValue>()) {}

  push(val: number): void {
    const newEntry = {
      val,
      min: Math.min(this.getMin() ?? Number.MAX_SAFE_INTEGER, val),
    };
    this.stack.push(newEntry);
  }

  pop(): void {
    this.stack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1]?.val;
  }

  getMin(): number {
    return this.stack[this.stack.length - 1]?.min;
  }
}
