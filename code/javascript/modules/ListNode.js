/**
 * File: ListNode.js
 * Created Time: 2024-08-06
 * author: coderyliu
 */

/* 链表节点 */
class ListNode {
  val;
  next;
  constructor(val, next) {
    this.val = val;
    this.next = next ? null : next;
  }
}

/* 双向链表 */
class DoublyListNode {
  val;
  next;
  prev;
  constructor(val, next, prev) {
    this.val = val;
    this.next = next ? null : next;
    this.prev = prev ? null : prev;
  }
}

module.exports = {
  ListNode,
  DoublyListNode
};
