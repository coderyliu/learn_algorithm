/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// ?1.双指针
var reverseList = function (head) {
  let prev = null
  let curr = head
  while (curr) {
    let temp = curr.next
    curr.next = prev
    prev = curr
    curr = temp
  }

  return prev
};

// ?2.转化为数组，在转化为链表