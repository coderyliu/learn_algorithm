// https://leetcode.cn/problems/linked-list-cycle-ii/

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function detectCycle(head: ListNode | null): ListNode | null {
  // 方法一：暴力 + 哈希
  // *时间复杂度：O(n)
  // *空间复杂度：O(n)
  // const map = new Map<ListNode, boolean>();
  // let cur = head;
  // while (cur) {
  //   if (map.has(cur)) return cur;
  //   map.set(cur, true);
  //   cur = cur.next;
  // }
  // return null;

  // 方法二：快慢指针
  // *时间复杂度：O(n)
  // *空间复杂度：O(1)
  if (!head || !head.next) return null;
  let fast: ListNode | null, slow: ListNode | null;
  fast = slow = head;
  while (slow && fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      slow = head;
      while (slow !== fast) {
        slow = slow!.next;
        fast = fast!.next;
      }
      return slow;
    }
  }
  return null;
}

export {};
