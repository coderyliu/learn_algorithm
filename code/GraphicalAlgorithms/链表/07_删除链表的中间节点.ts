class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function deleteMiddle(head: ListNode | null): ListNode | null {
  // 获取链表的长度
  let len: number = 0;
  let cur: ListNode | null = head;
  while (cur) {
    cur = cur.next;
    len++;
  }
  // 求链表的中间节点
  let mid = Math.floor(len / 2);
  // 边界情况
  if (len === 1 && mid === 0) return null;
  // 找到中间节点的前一个节点
  let node: ListNode | null = head;
  while (mid > 1 && node) {
    node = node.next;
    mid -= 1;
  }
  // 改变中间节点的指针
  node!.next = node?.next?.next || null;
  return head;
}

export {};
