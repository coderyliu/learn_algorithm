/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// ?1.转化为数组，判断是否回文
var isPalindrome = function (head) {
  let curr = head
  const res = []
  while (curr) {
    res.push(curr.val)
    curr = curr.next
  }

  // 判断是否回文
  let len = res.length - 1
  for (let i = 0; i <= len; i++) {
    if (res[i] !== res[len]) {
      return false
    }
    len--
  }

  return true
};