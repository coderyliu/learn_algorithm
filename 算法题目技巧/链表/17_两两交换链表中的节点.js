// https://leetcode.cn/problems/swap-nodes-in-pairs/
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head || !head.next) return head
  let newList = new ListNode(0, head)
  let tmp = newList
  while (tmp.next && tmp.next.next) {
    let pre = tmp.next
    let cur = tmp.next.next
    pre.next = cur.next
    cur.next = pre
    tmp.next = cur
    tmp = pre
  }

  return newList.next
};