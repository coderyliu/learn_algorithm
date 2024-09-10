// https://leetcode.cn/problems/remove-duplicates-from-sorted-list-ii/

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
  const virHead = new ListNode(0, head);
  let slow = virHead;
  let fast = virHead.next;
  let flag = false;
  while (fast) {
    if (fast.val === fast.next?.val) {
      flag = true;
      fast = fast.next;
    } else {
      if (flag) {
        fast = fast.next;
        if (fast === null) slow.next = null;
      } else {
        slow.next = fast;
        slow = fast;
        fast = fast.next;
      }
      flag = false;
    }
  }

  return virHead.next;
}

export {};
