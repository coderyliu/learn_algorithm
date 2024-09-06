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

function reverseList(head: ListNode | null): ListNode | null {
  // 双指针
  if (!head) return null;
  let prev: ListNode | null = null;
  let cur: ListNode | null = head;
  while (cur) {
    const tmp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = tmp;
  }

  return prev;
}

export {};
