// https://leetcode.cn/problems/sum-lists-lcci/
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const arr1 = generateArr(l1).reverse()
  const arr2 = generateArr(l2).reverse()
  let flag = 0
  const len = Math.max(arr1.length, arr2.length)
  const arr3 = []
  for (let i = 0; i < len; i++) {
    const num1 = arr1[i] ?? 0
    const num2 = arr2[i] ?? 0
    const sum = num1 + num2 + flag
    if (sum >= 10) {
      flag = Math.floor(sum / 10)
      arr3.push(sum % 10)
    } else {
      arr3.push(sum)
      flag = 0
    }
  }
  if (flag !== 0) {
    arr3.push(flag)
  }
  arr3.reverse()
  const l3 = new ListNode(arr3[0])
  let curr = l3
  for (let i = 1; i < arr3.length; i++) {
    const newList = new ListNode(arr3[i])
    curr.next = newList
    curr = curr.next
  }
  return l3
};

function generateArr(l1) {
  let curr = l1
  const res = []
  while (curr) {
    res.push(curr.val)
    curr = curr.next
  }
  return res
}