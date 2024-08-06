// https://leetcode.cn/problems/merge-k-sorted-lists/
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// ?1.暴力解法  将值全部放在一个数组里面，利用sort排序再转化为链表
var mergeKLists = function (lists) {
  let res = new ListNode();
  let control = res;
  let arr = [];
  for (let i = 0; i < lists.length; i++) {
    while (1) {
      if (lists[i]) {
        arr[arr.length] = lists[i].val;
        lists[i] = lists[i].next;
      } else {
        break;
      }
    }
  }
  arr.sort((a, b) => a - b);
  if (arr.length == 0) return null;
  for (let i = 0; i < arr.length; i++) {
    control.next = new ListNode();
    control.next.val = arr[i];
    control = control.next;
  }
  return res.next;
};