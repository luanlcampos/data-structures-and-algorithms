class MinStack {
  stack: number[];
  minStack: number[];

  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val: number): void {
    // check if val is less than the minStack value
    console.log(this.getMin());
    if (this.minStack.length === 0 || val <= this.getMin()) {
      this.minStack.push(val);
    }
    this.stack.push(val);
  }

  pop(): void {
    // check if value being popped is the curr min
    if (!this.stack) return;
    if (this.top() === this.getMin()) {
      this.minStack.pop();
    }
    this.stack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
