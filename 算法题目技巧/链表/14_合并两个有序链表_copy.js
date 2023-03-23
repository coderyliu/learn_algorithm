/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
// ?1.转化为数组在排序
var mergeTwoLists = function (list1, list2) {
  const arr1 = listToArray(list1)
  const arr2 = listToArray(list2)
  // console.log(arr1,arr2)
  if (!arr1.length && !arr2.length) {
    return list1
  }

  const arr3 = arr1.concat(arr2).sort((a, b) => a - b)
  const list3 = new ListNode(arr3[0])
  let head = list3

  for (let i = 1; i < arr3.length; i++) {
    const node = new ListNode(arr3[i])
    head.next = node
    head = node
  }

  return list3
};

function listToArray(l) {
  const res = []

  let cur = l
  while (cur) {
    res.push(cur.val)
    cur = cur.next
  }

  return res
}

// ?2.递归
var mergeTwoLists = function (list1, list2) {
  if (!list1) {
    return list2
  }

  if (!list2) {
    return list1
  }

  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2)
    return list1
  } else {
    list2.next = mergeTwoLists(list1, list2.next)
    return list2
  }
}