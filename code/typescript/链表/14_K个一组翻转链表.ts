// https://leetcode.cn/problems/reverse-nodes-in-k-group/description/

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  const node: ListNode[] = [];
  let cur = head;
  while (cur) {
    node.push(cur);
    cur = cur.next;
  }
  let count = Math.floor(node.length / k);
  let i = 0;
  const virHead = new ListNode(-1, null);
  let start = virHead;
  while (i < count) {
    const arr: ListNode[] = node.slice(i * k, (i + 1) * k);
    arr.reverse();
    for (let j = 0; j < arr.length; j++) {
      start.next = arr[j];
      start = start.next;
    }
    i++;
  }
  if (node.length - count * k > 0) {
    const splic = node.splice(-(node.length - count * k), 1);
    start.next = splic[0];
  } else {
    start.next = null;
  }

  return virHead.next;
}

export {};
