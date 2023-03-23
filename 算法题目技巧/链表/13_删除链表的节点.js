// https://leetcode.cn/problems/shan-chu-lian-biao-de-jie-dian-lcof/
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
// ?虚拟头结点
var deleteNode = function (head, val) {
  let list = new ListNode(0)
  list.next = head
  let curr = list.next
  let prev = list
  while (curr) {
    if (curr.val === val) {
      prev.next = curr.next
      break
    } else {
      prev = curr
      curr = curr.next
    }
  }
  return list.next
};