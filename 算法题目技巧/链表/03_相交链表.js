/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  function getLength(head) {
    let len = 0
    let cur = head
    while (cur) {
      len++
      cur = cur.next
    }
    return len
  }
  let res1 = getLength(headA)
  let res2 = getLength(headB)
  let curA = headA
  let curB = headB
  if (res1 < res2) {
    // 下面交换变量注意加 “分号” ，两个数组交换变量在同一个作用域下时
    // 如果不加分号，下面两条代码等同于一条代码: [curA, curB] = [lenB, lenA]
    [curA, curB] = [curB, curA];
    [res1, res2] = [res2, res1];
  }
  let i = res1 - res2
  while (i-- > 0) {
    curA = curA.next
  }
  while (curA && curA !== curB) {
    curA = curA.next
    curB = curB.next
  }
  return curA
};