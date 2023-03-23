/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// ?1.转化为数组，求中间节点的索引值
var middleNode = function (head) {
  const val = listToArray(head)

  let curr = head
  let index = 0
  while (curr) {
    if (index++ === val) {
      return curr
    }
    curr = curr.next
  }
};

function listToArray(l) {
  let curr = l
  const res = []
  while (curr) {
    res.push(curr.val)
    curr = curr.next
  }

  if (res.length % 2 !== 0) {
    return Math.floor(res.length / 2)
  } else {
    return res.length / 2
  }
}

// ?2.快慢指针
// 快指针走两步，慢指针走一步，当快指针走到终点时，慢指针就是中间节点
var middleNode = function (head) {
  let slow = head
  let fast = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }

  return slow
}