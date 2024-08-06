/**
 * File: array_stack.js
 * Created Time: 2024-08-06
 * author: coderyliu
 */

// 栈的数组实现
class ArrayStack {
  #stack = []; // 栈
  #size = 0; // 栈的长度

  constructor() {
    this.#stack = [];
    this.#size = 0;
  }

  // 入栈
  push(val) {
    this.#stack.push(val);
    this.#size++;
  }

  // 出栈
  pop() {
    const val = this.#stack.pop();
    this.#size--;
    return val;
  }

  // 获取栈顶元素
  peek() {
    if (this.isEmpty()) throw new Error("Stack is empty");
    return this.#stack[this.#size - 1];
  }

  // 获取栈的长度
  getSize() {
    return this.#size;
  }

  // 判断栈是否为空
  isEmpty() {
    return this.#size === 0;
  }

  toArray() {
    return this.#stack;
  }
}

/* Driver Code */
/* 初始化栈 */
const stack = new ArrayStack();

/* 元素入栈 */
stack.push(1);
stack.push(3);
stack.push(2);
stack.push(5);
stack.push(4);
console.log("栈 stack = ");
console.log(stack.toArray());

/* 访问栈顶元素 */
const top = stack.peek();
console.log("栈顶元素 top = " + top);

/* 元素出栈 */
const pop = stack.pop();
console.log("出栈元素 pop = " + pop + "，出栈后 stack = ");
console.log(stack.toArray());

/* 获取栈的长度 */
const size = stack.getSize();
console.log("栈的长度 size = " + size);

/* 判断是否为空 */
const isEmpty = stack.isEmpty();
console.log("栈是否为空 = " + isEmpty);
