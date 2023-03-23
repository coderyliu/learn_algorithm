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
var oddEvenList = function (head) {
  if (head === null || head.next === null || head.next.next === null) return head
  let p = head
  let pre = head.next
  let cur = pre.next
  while (pre !== null && cur !== null) {
    let temp = cur.next
    cur.next = p.next
    p.next = cur
    pre.next = temp
    p = p.next
    pre = pre.next
    if (pre !== null) cur = pre.next
  }

  return head
};