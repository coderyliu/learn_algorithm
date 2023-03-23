// https://leetcode.cn/problems/linked-list-cycle/
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// ? 快慢指针
var hasCycle = function (head) {
  if (!head) return false
  if (head.next === null) return false
  let slow = head
  let fast = head
  while (slow && fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) {
      return true
    }
  }
  return false
};