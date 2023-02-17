/**
 * 3.2 Stack Min: How would you design a stack which,
 * in addition to push and pop, has a function min
 * which returns the minimum element?
 * Push, pop and min should all operate in O(1) time
 *
 * Solution
 * To maintain the O(1) time in all functions,
 * the solution was to create another stack to track
 * the min values.
 *
 * Push:
 * Everytime a new value is pushed into
 * the stack, it will check if the value is smaller than the min.
 * If so, the value will be pushed to the min stack.
 *
 * Pop:
 * The item being popped from the stack will be compared
 * to the min. If they are the same, the item will be also popped
 * from the minStack.
 *
 * Min:
 * Simply return the last element in the minStack
 */

class StackWithMin {
  minStack: number[];
  stack: number[];

  constructor() {
    this.minStack = [];
    this.stack = [];
  }

  push(num: number): void {
    if (
      this.minStack[this.minStack.length - 1] > num ||
      this.stack.length === 0
    ) {
      this.minStack.push(num);
    }
    this.stack.push(num);
  }

  pop(): number | undefined {
    if (
      this.minStack.length > 0 &&
      this.minStack.slice(-1)[0] === this.stack.slice(-1)[0]
    ) {
      this.minStack.pop();
    }
    return this.stack.pop();
  }

  min(): number {
    return this.minStack[this.minStack.length - 1];
  }
}
