// https://leetcode.cn/problems/rotate-list/
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// ?先转化为数组，旋转之后转化为链表
var rotateRight = function (head, k) {
  if (!head) return null
  let curr = head
  let res = []
  while (curr) {
    res.push(curr.val)
    curr = curr.next
  }
  let step = k % res.length
  for (let i = 0; i < step; i++) {
    const number = res.pop()
    res.unshift(number)
  }
  const l = new ListNode(res[0])
  let prev = l
  for (let i = 1; i < res.length; i++) {
    const newList = new ListNode(res[i])
    prev.next = newList
    prev = prev.next
  }
  return l
};