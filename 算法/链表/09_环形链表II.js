// https://leetcode.cn/problems/linked-list-cycle-ii/
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// ?快慢指针+公式推导
var detectCycle = function (head) {
  if (!head) return null
  if (head.next === null) return null
  let slow = head
  let fast = head
  while (slow && fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) {
      slow = head
      while (slow !== fast) {
        slow = slow.next
        fast = fast.next
      }
      return slow
    }
  }
  return null
};