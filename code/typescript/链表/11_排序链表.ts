// https://leetcode.cn/problems/sort-list/description/

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function sortList(head: ListNode | null): ListNode | null {
  // 方法一：暴力 + sort
  const node: ListNode[] = [];
  let cur = head;
  while (cur) {
    node.push(cur);
    cur = cur.next;
  }
  node.sort((a, b) => a.val - b.val);
  for (let i = 0; i < node.length; i++) {
    node[i].next = node[i + 1] || null;
  }
  return node[0] || null;

  // 方法二：归并排序
}

export {};
