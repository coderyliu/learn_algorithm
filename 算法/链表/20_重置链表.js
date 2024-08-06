// https: //leetcode.cn/problems/reorder-list/solution/js-kuai-man-zhi-zhen-reverse-merge-by-qu-0lh6/

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  // 构造双向链表
  let p = head
  if (p === null) return p
  p.prev = null
  while (p.next) {
    p.next.prev = p
    p = p.next
  }

  // 定义头部指针和尾指针
  let hp = head
  let tp = p
  while (true) {
    if (tp === hp) {
      // 偶数节点情况判断终结
      hp.next = null
      break
    }

    const nexthp = hp.next
    hp.next = tp
    hp = nexthp
    if (tp === hp) {
      // 奇数节点情况判断终结
      tp.next = null
      break
    }
    tp.next = hp
    tp = tp.prev
  }
};