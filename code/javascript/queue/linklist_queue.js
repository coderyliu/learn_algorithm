/**
 * File: linklist_queue.js
 * Created Time: 2024-08-06
 * author: coderyliu
 */

const { ListNode } = require("../modules/ListNode.js");

/* 基于链表实现的队列 */
class LinkedListQueue {
  #queueFront; // 队顶指针
  #queueTail; // 队尾指针
  #size = 0; // 队列的长度

  constructor() {
    this.#queueFront = null;
    this.#queueTail = null;
    this.#size = 0;
  }

  // 入队
  push(val) {
    const newNode = new ListNode(val);
    if (!this.#queueFront) {
      this.#queueFront = newNode;
      this.#queueTail = newNode;
    } else {
      this.#queueTail.next = newNode;
      this.#queueTail = newNode;
    }
    this.#size++;
  }

  // 出队
  pop() {
    const val = this.peek();
    this.#queueFront = this.#queueFront.next;
    this.#size--;
    return val;
  }

  // 获取队顶元素
  peek() {
    if (this.isEmpty()) throw new Error("栈为空");
    return this.#queueFront.val;
  }

  // 获取队列的长度
  getSize() {
    return this.#size;
  }

  // 判断队列是否为空
  isEmpty() {
    return this.#size === 0;
  }

  // 将链表转化为数组
  toArray() {
    const res = [];
    let cur = this.#queueFront;
    while (cur) {
      res.push(cur.val);
      cur = cur.next;
    }
    return res;
  }
}

/* Driver Code */
/* 初始化队列 */
const queue = new LinkedListQueue();

/* 元素入队 */
queue.push(1);
queue.push(3);
queue.push(2);
queue.push(5);
queue.push(4);
console.log("队列 queue = " + queue.toArray());

/* 访问队首元素 */
const peek = queue.peek();
console.log("队首元素 peek = " + peek);

/* 元素出队 */
const pop = queue.pop();
console.log("出队元素 pop = " + pop + "，出队后 queue = " + queue.toArray());

/* 获取队列的长度 */
const size = queue.getSize();
console.log("队列长度 size = " + size);

/* 判断队列是否为空 */
const isEmpty = queue.isEmpty();
console.log("队列是否为空 = " + isEmpty);

module.exports = {
  LinkedListQueue
};
