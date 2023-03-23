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
// ?先转化为数组，在转化为链表
var oddEvenList = function (head) {
  if (!head) return null

  let index = 1
  let curr = head
  let even = []
  let old = []
  while (curr) {
    if (index % 2 === 0) {
      even.push(curr.val)
    } else {
      old.push(curr.val)
    }
    curr = curr.next
    index++
  }

  let list = new ListNode(old[0])
  let cur = list
  for (let i = 1; i < old.length; i++) {
    let node = new ListNode(old[i])
    cur.next = node
    cur = node
  }

  for (let i = 0; i < even.length; i++) {
    let node = new ListNode(even[i])
    cur.next = node
    cur = node
  }

  return list
};

// ?直接原地操作
var oddEvenList = function (head) {
  if (!head || !head.next || !head.next.next) return null

  let p = head
  let pre = head.next
  let cur = head.next.next

  while (pre && cur) {
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