/**
 * Filename: array_deque.js
 * Created Time: 2024-08-07
 * author: coderyliu
 */

// 基于数组实现双向队列
class ArrayDeque {
  #queue = [];

  constructor() {
    this.#queue = [];
  }

  // 获取队列长度
  size() {
    return this.#queue.length;
  }

  // 判断队列是否为空
  isEmpty() {
    return this.#queue.length === 0;
  }

  // 队首入队
  pushFirst(val) {
    this.#queue.unshift(val);
  }

  // 队尾入队
  pushLast(val) {
    this.#queue.push(val);
  }

  // 队首出队
  popFirst() {
    if (this.isEmpty()) throw new Error("Deque is empty");
    return this.#queue.shift();
  }

  // 队尾出队
  popLast() {
    if (this.isEmpty()) throw new Error("Deque is empty");
    return this.#queue.pop();
  }

  // 访问队首元素
  peekFirst() {
    if (this.isEmpty()) throw new Error("Deque is empty");
    return this.#queue[0];
  }

  // 访问队尾元素
  peekLast() {
    if (this.isEmpty()) throw new Error("Deque is empty");
    return this.#queue[this.#queue.length - 1];
  }

  print() {
    return this.#queue.join();
  }
}

/* Driver Code */
/* 初始化双向队列 */
const deque = new ArrayDeque();
deque.pushLast(3);
deque.pushLast(2);
deque.pushLast(5);
console.log("双向队列 deque = [" + deque.print() + "]");

/* 访问元素 */
const peekFirst = deque.peekFirst();
console.log("队首元素 peekFirst = " + peekFirst);
const peekLast = deque.peekLast();
console.log("队尾元素 peekLast = " + peekLast);

/* 元素入队 */
deque.pushLast(4);
console.log("元素 4 队尾入队后 deque = [" + deque.print() + "]");
deque.pushFirst(1);
console.log("元素 1 队首入队后 deque = [" + deque.print() + "]");

/* 元素出队 */
const popLast = deque.popLast();
console.log(
  "队尾出队元素 = " + popLast + "，队尾出队后 deque = [" + deque.print() + "]"
);
const popFirst = deque.popFirst();
console.log(
  "队首出队元素 = " +
    popFirst +
    "，队首出队后 deque = [" +
    deque.print() +
    "]"
);

/* 获取双向队列的长度 */
const size = deque.size();
console.log("双向队列长度 size = " + size);

/* 判断双向队列是否为空 */
const isEmpty = deque.isEmpty();
console.log("双向队列是否为空 = " + isEmpty);
