// https: //leetcode.cn/problems/remove-nth-node-from-end-of-list/

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let newNode = new ListNode(0, head)
  let fast = newNode
  let slow = newNode

  while (n-- >= 0) {
    fast = fast.next
  }

  while (fast) {
    fast = fast.next
    slow = slow.next
  }

  slow.next = slow.next.next

  return newNode.next
}