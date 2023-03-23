// https://leetcode.cn/problems/reverse-linked-list/

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
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