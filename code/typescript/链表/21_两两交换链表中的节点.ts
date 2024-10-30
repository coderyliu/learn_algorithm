// https://leetcode.cn/problems/swap-nodes-in-pairs/

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0;
    this.next = next ?? null;
  }
}

function swapPairs(head: ListNode | null): ListNode | null {
  // 虚拟头节点
  if (!head || !head.next) return head;
  let virtualHead = new ListNode(0, head);
  let cur = virtualHead;
  while (cur.next && cur.next.next) {
    const temp = cur.next;
    const temp2 = cur.next.next.next;
    cur.next = cur.next.next;
    cur.next.next = temp;
    temp.next = temp2;
    cur = cur.next.next;
  }
  return virtualHead.next;
}

const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
console.log(swapPairs(head));

export {};
