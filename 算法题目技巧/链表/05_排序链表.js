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
var sortList = function (head) {
  if (!head || !head.next) return head
  let arr = []
  let curr = head
  while (curr) {
    arr.push(curr.val)
    curr = curr.next
  }
  arr.sort((a,b)=>a-b)
  let pre = new ListNode(-1, null)
  let cur = pre
  for (const item of arr) {
    let newNode = new ListNode(item, null)
    cur.next = newNode
    cur = cur.next
  }
  return pre.next
};