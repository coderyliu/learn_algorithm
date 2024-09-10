/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
  // 原地旋转
  const node: ListNode[] = [];
  let cur = head;
  while (cur) {
    node.push(cur);
    cur = cur.next;
  }

  let l = 0;
  let r = node.length - 1;
  while (l < r) {
    node[l].next = node[r];
    node[r].next = node[l + 1];
    l++;
    r--;
  }
  node[l].next = null;
}

export {};
