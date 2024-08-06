/**
 * File: linkedlist_stack.js
 * Created Time: 2024-08-06
 * author: coderyliu
 */

const { ListNode } = require("../modules/ListNode.js");

/* 基于链表实现的栈 */
class LinkedListStack {
  #stackPeek; // 栈顶指针
  #size = 0; //
  constructor() {
    this.#stackPeek = null;
  }

  // 入栈
  push(val) {
    const newNode = new ListNode(val);
    newNode.next = this.#stackPeek;
    this.#stackPeek = newNode;
    this.#size++;
  }

  // 出栈
  pop() {
    const val = this.peek();
    this.#stackPeek = this.#stackPeek.next;
    this.#size--;
    return val;
  }

  // 获取栈顶元素
  peek() {
    if (this.isEmpty()) throw new Error("栈为空");
    return this.#stackPeek.val;
  }

  // 获取栈的长度
  getSize() {
    return this.#size;
  }

  // 判断栈是否为空
  isEmpty() {
    return this.#size === 0;
  }

  // 将链表转化为数组
  toArray() {
    const res = [];
    let cur = this.#stackPeek;
    while (cur) {
      res.push(cur.val);
      cur = cur.next;
    }
    return res.reverse();
  }
}

/* Driver Code */
/* 初始化栈 */
const stack = new LinkedListStack();

/* 元素入栈 */
stack.push(1);
stack.push(3);
stack.push(2);
stack.push(5);
stack.push(4);
console.log("栈 stack = " + stack.toArray());

/* 访问栈顶元素 */
const peek = stack.peek();
console.log("栈顶元素 peek = " + peek);

/* 元素出栈 */
const pop = stack.pop();
console.log("出栈元素 pop = " + pop + "，出栈后 stack = " + stack.toArray());

/* 获取栈的长度 */
const size = stack.getSize();
console.log("栈的长度 size = " + size);

/* 判断是否为空 */
const isEmpty = stack.isEmpty();
console.log("栈是否为空 = " + isEmpty);

module.exports = {
  LinkedListStack
};
