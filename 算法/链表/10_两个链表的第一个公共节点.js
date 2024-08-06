// https://leetcode.cn/problems/liang-ge-lian-biao-de-di-yi-ge-gong-gong-jie-dian-lcof/
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let lenA = listToArray(headA).length
  let lenB = listToArray(headB).length

  let currA = headA
  let currB = headB
  if (lenA < lenB) {
    [currA, currB] = [currB, currA];
    [lenA, lenB] = [lenB, lenA];
  }
  let len = lenA - lenB
  while (len-- > 0) {
    currA = currA.next
  }
  while (currA && currB) {
    if (currA === currB) {
      return currA
    }
    currA = currA.next
    currB = currB.next
  }
  return null
};
// 遍历链表得到链表的长度
function listToArray(head) {
  let curr = head
  const res = []
  while (curr) {
    res.push(curr)
    curr = curr.next
  }
  return res
}