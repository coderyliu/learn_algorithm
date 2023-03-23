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
  if (!head) return null

  let curr = head
  let res = []
  while (curr) {
    res.push(curr.val)
    curr = curr.next
  }

  res.sort((a, b) => a - b)
  let list = new ListNode(res[0])
  let pre = list
  for (let i = 1; i < res.length; i++) {
    let node = new ListNode(res[i])
    pre.next = node
    pre = node
  }

  return list
};