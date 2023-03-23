/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// ?转化为数组，删除后在转化为链表
var removeNthFromEnd = function (head, n) {
  let curr = head
  let res = []

  while (curr) {
    res.push(curr.val)
    curr = curr.next
  }

  res.splice(-n, 1)
  if (!res.length) return null

  let node = new ListNode(res[0])
  let cur = node
  for (let i = 1; i < res.length; i++) {
    let listNode = new ListNode(res[i])
    cur.next = listNode
    cur = listNode
  }

  return node
};

// ?2.虚拟头节点+快慢指针
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

  return newNode
}