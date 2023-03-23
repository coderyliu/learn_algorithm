// https://leetcode.cn/problems/add-two-numbers-ii/
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// ?1.先生成数组相加在转化为新的链表
// var addTwoNumbers = function (l1, l2) {
//   const arr1 = generateArr(l1).reverse()
//   const arr2 = generateArr(l2).reverse()
//   let flag = 0
//   const len = Math.max(arr1.length, arr2.length)
//   const arr3 = []
//   for (let i = 0; i < len; i++) {
//     const num1 = arr1[i] ?? 0
//     const num2 = arr2[i] ?? 0
//     const sum = num1 + num2 + flag
//     if (sum >= 10) {
//       flag = Math.floor(sum / 10)
//       arr3.push(sum % 10)
//     } else {
//       arr3.push(sum)
//       flag = 0
//     }
//   }
//   if (flag !== 0) {
//     arr3.push(flag)
//   }
//   arr3.reverse()
//   const l3 = new ListNode(arr3[0])
//   let curr = l3
//   for (let i = 1; i < arr3.length; i++) {
//     const newList = new ListNode(arr3[i])
//     curr.next = newList
//     curr = curr.next
//   }
//   return l3
// };

// addTwoNumbers([7, 2, 4, 3], [5, 6, 4])

// function generateArr(l1) {
//   let curr = l1
//   const res = []
//   while (curr) {
//     res.push(curr.val)
//     curr = curr.next
//   }
//   return res
// }

// ?2.先反转链表，在链表相加，再反转
var addTwoNumbers = function (l1, l2) {
  const list1 = reverseList(l1)
  const list2 = reverseList(l2)

  const list3 = new ListNode()
  let head = list3
  let flag = 0
  let curr1 = list1
  let curr2 = list2
  while (curr1 && curr2) {
    const sum = curr1.val + curr2.val + flag
    if (sum >= 10) {
      flag = Math.floor(sum / 10)
      const newList = new ListNode(sum % 10)
      head.next = newList
      head = head.next
    } else {
      const newList = new ListNode(sum)
      head.next = newList
      head = head.next
      flag = 0
    }
    curr1 = curr1.next
    curr2 = curr2.next
  }
  while (curr1) {
    const sum = curr1.val + flag
    if (sum >= 10) {
      flag = Math.floor(sum / 10)
      const newList = new ListNode(sum % 10)
      head.next = newList
      head = head.next
    } else {
      const newList = new ListNode(sum)
      head.next = newList
      head = head.next
      flag = 0
    }
    curr1 = curr1.next
  }
  while (curr2) {
    const sum = curr2.val + flag
    if (sum >= 10) {
      flag = Math.floor(sum / 10)
      const newList = new ListNode(sum % 10)
      head.next = newList
      head = head.next
    } else {
      const newList = new ListNode(sum)
      head.next = newList
      head = head.next
      flag = 0
    }
    curr2 = curr2.next
  }
  if (flag !== 0) {
    const newList = new ListNode(flag)
    head.next = newList
    head = head.next
  }
  return reverseList(list3.next)
}

function reverseList(l) {
  let prev = null
  let curr = l
  while (curr) {
    let temp = curr.next
    curr.next = prev
    prev = curr
    curr = temp
  }
  return prev
}