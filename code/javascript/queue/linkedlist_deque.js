/**
 * Filename: linkedlist_deque.js
 * Created Time: 2024-08-07
 * author: coderyliu
 */

const { DoublyListNode } = require("../modules/ListNode.js");

// 基于链表实现双向队列
class LinkedListDeque {
  #front; // 头节点
  #rear; // 尾节点
  #size = 0; // 队列长度

  constructor() {
    this.#front = null;
    this.#rear = null;
    this.#size = 0;
  }

  // 获取队列长度
  size() {
    return this.#size;
  }

  // 判断队列是否为空
  isEmpty() {
    return this.#size === 0;
  }

  // 队首入队
  pushFirst(val) {
    const newNode = new DoublyListNode(val);
    if (this.isEmpty()) {
      this.#front = newNode;
      this.#rear = newNode;
    } else {
      newNode.next = this.#front;
      this.#front.prev = newNode;
      this.#front = newNode;
    }
    this.#size++;
  }

  // 队尾入队
  pushLast(val) {
    const newNode = new DoublyListNode(val);
    if (this.isEmpty()) {
      this.#front = newNode;
      this.#rear = newNode;
    } else {
      newNode.prev = this.#rear;
      this.#rear.next = newNode;
      this.#rear = newNode;
    }
    this.#size++;
  }

  // 队首出队
  popFirst() {
    if (this.isEmpty()) throw new Error("队列为空");
    const val = this.#front.val;
    const temp = this.#front.next;
    if (temp) {
      temp.prev = null;
      this.#front.next = null;
    }
    this.#front = temp;
    this.#size--;
    return val;
  }

  // 队尾出队
  popLast() {
    if (this.isEmpty()) throw new Error("队列为空");
    const val = this.#rear.val;
    const temp = this.#rear.prev;
    if (temp) {
      temp.next = null;
      this.#rear.prev = null;
    }
    this.#rear = temp;
    this.#size--;
    return val;
  }

  // 访问队首元素
  peekFirst() {
    if (this.isEmpty()) throw new Error("队列为空");
    return this.#front.val;
  }

  // 访问队尾元素
  peekLast() {
    if (this.isEmpty()) throw new Error("队列为空");
    return this.#rear.val;
  }

  // 打印双向队列
  print() {
    let cur = this.#front;
    let str = "";
    while (cur) {
      str += cur.val + " ";
      cur = cur.next;
    }
    console.log(str)
    return str;
  }
}

/* Driver Code */
/* 初始化双向队列 */
const linkedListDeque = new LinkedListDeque();
linkedListDeque.pushLast(3);
linkedListDeque.pushLast(2);
linkedListDeque.pushLast(5);
console.log("双向队列 linkedListDeque = ");
linkedListDeque.print();

/* 访问元素 */
const peekFirst = linkedListDeque.peekFirst();
console.log("队首元素 peekFirst = " + peekFirst);
const peekLast = linkedListDeque.peekLast();
console.log("队尾元素 peekLast = " + peekLast);

/* 元素入队 */
linkedListDeque.pushLast(4);
console.log("元素 4 队尾入队后 linkedListDeque = ");
linkedListDeque.print();
linkedListDeque.pushFirst(1);
console.log("元素 1 队首入队后 linkedListDeque = ");
linkedListDeque.print();

/* 元素出队 */
const popLast = linkedListDeque.popLast();
console.log("队尾出队元素 = " + popLast + "，队尾出队后 linkedListDeque = ");
linkedListDeque.print();
const popFirst = linkedListDeque.popFirst();
console.log("队首出队元素 = " + popFirst + "，队首出队后 linkedListDeque = ");
linkedListDeque.print();

/* 获取双向队列的长度 */
const size = linkedListDeque.size();
console.log("双向队列长度 size = " + size);

/* 判断双向队列是否为空 */
const isEmpty = linkedListDeque.isEmpty();
console.log("双向队列是否为空 = " + isEmpty);
