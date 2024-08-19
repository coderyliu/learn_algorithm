// 方式一：暴力解法
// class MinStack {
//   stack: number[];
//   constructor() {
//     this.stack = [];
//   }

//   push(val: number): void {
//     this.stack.push(val);
//   }

//   pop(): void {
//     this.stack.pop();
//   }

//   top(): number {
//     return this.stack[this.stack.length - 1];
//   }

//   getMin(): number {
//     return Math.min(...this.stack);
//   }
// }

// 方式二：普通栈和辅助栈
// 普通栈：正常push、pop元素
// 辅助栈：栈顶始终是最小的元素；push时判断当前元素是否比栈顶元素小，如果是则push，否则不push；pop时弹出栈顶元素，如果弹出的元素等于栈顶元素，则辅助栈也弹出栈顶元素；
// 时间复杂度：O(1)
class MinStack {
  stack: number[];
  min_stack: number[];

  constructor() {
    this.stack = [];
    this.min_stack = [];
  }

  push(val: number): void {
    this.stack.push(val);
    if (
      !this.min_stack.length ||
      val <= this.min_stack[this.min_stack.length - 1]
    )
      this.min_stack.push(val);
  }

  pop(): void {
    const val = this.stack.pop();
    if (val === this.min_stack[this.min_stack.length - 1]) this.min_stack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.min_stack[this.min_stack.length - 1];
  }
}

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();
minStack.pop();
minStack.top();
minStack.getMin();
minStack.pop();
minStack.top();
minStack.getMin();

export {};
