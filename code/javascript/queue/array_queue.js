/**
 * File: array_queue.js
 * Created Time: 2024-08-06
 * author: coderyliu
 */

// 队列的数组实现
class ArrayQueue {
  #queue = []; // 队列

  constructor() {
    this.#queue = [];
  }

  // 入队列
  push(val) {
    this.#queue.push(val);
  }

  // 出队列
  shift() {
    const val = this.#queue.shift();
    return val;
  }

  // 获取队顶元素
  peek() {
    if (this.isEmpty()) throw new Error("Queue is empty");
    return this.#queue[0];
  }

  // 获取栈的长度
  getSize() {
    return this.#queue.length;
  }

  // 判断栈是否为空
  isEmpty() {
    return this.#queue.length === 0;
  }

  toArray() {
    return this.#queue;
  }
}

/* Driver Code */
/* 初始化队列 */
const queue = new ArrayQueue();

/* 元素入队 */
queue.push(1);
queue.push(3);
queue.push(2);
queue.push(5);
queue.push(4);
console.log("队列 queue =", queue.toArray());

/* 访问队首元素 */
const peek = queue.peek();
console.log("队首元素 peek = " + peek);

/* 元素出队 */
const pop = queue.shift();
console.log("出队元素 pop = " + pop + "，出队后 queue =", queue.toArray());

/* 获取队列的长度 */
const size = queue.getSize();
console.log("队列长度 size = " + size);

/* 判断队列是否为空 */
const isEmpty = queue.isEmpty();
console.log("队列是否为空 = " + isEmpty);
