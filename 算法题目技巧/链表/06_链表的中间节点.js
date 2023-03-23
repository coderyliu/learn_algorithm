// https://leetcode.cn/problems/middle-of-the-linked-list/
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// ?1.遍历，取中间节点
var middleNode = function (head) {
  let curr = head
  const res = []
  while (curr) {
    res.push(curr)
    curr = curr.next
  }
  if (res.length % 2 !== 0) {
    return res[Math.floor(res.length / 2)]
  } else {
    return res[res.length / 2]
  }
};