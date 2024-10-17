// https://leetcode.cn/problems/odd-even-linked-list/

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function oddEvenList(head: ListNode | null): ListNode | null {
  // 方法一：暴力
  // *时间复杂度：O(n)
  // *空间复杂度：O(n)
  if (!head) return null;
  const odd: ListNode[] = [];
  const even: ListNode[] = [];
  let cur: ListNode | null = head;
  let flag: number = 1;
  while (cur) {
    if (flag % 2 === 1) odd.push(cur);
    if (flag % 2 === 0) even.push(cur);
    flag++;
    cur = cur.next;
  }
  for (let i = 0; i < odd.length; i++) {
    odd[i].next = odd[i + 1] || null;
  }
  for (let i = 0; i < even.length; i++) {
    even[i].next = even[i + 1] || null;
  }
  odd[odd.length - 1].next = even[0] || null;
  return odd[0];
}

export {};
