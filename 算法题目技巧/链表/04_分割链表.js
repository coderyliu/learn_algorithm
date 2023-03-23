/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
// 思路就是新建两个链表，比x 小的放一个，比x大的放一个
// 最后再拼接在一块
var partition = function (head, x) {
  let l = new ListNode(-1, null)
  let r = new ListNode(-1, null)
  let curL = l
  let curR = r

  let curr = head
  while (curr) {
    let next = curr.next
    curr.next = null
    if (curr.val < x) {
      curL.next = curr
      curL = curL.next
    } else {
      curR.next = curr
      curR = curR.next
    }

    curr = next
  }
  curL.next = r.next
  return l.next
};