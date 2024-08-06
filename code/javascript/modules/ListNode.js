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

module.exports = {
  ListNode
};
