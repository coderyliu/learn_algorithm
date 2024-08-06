// https://leetcode.cn/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof/
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// ?1.把两个链表排序-->转化为数组
var mergeTwoLists = function (l1, l2) {
  if (!l1 && !l2) return null
  const arr = listToArray(l1).concat(listToArray(l2)).sort((a, b) => a - b)
  const list = new ListNode(arr[0])
  let curr = list
  for (let i = 1; i < arr.length; i++) {
    const newList = new ListNode(arr[i])
    curr.next = newList
    curr = curr.next
  }
  return list
};

function listToArray(l) {
  let curr = l
  const res = []
  while (curr) {
    res.push(curr.val)
    curr = curr.next
  }
  return res
}

// ?2.递归
var mergeTwoLists = function (l1, l2) {
  if (!l1) {
    return l2
  }
  if (!l2) {
    return l1
  }
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  }
}