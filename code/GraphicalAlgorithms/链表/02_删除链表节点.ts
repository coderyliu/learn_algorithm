class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// 给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。
// 返回删除后的链表的头节点。

function deleteNode(head: ListNode | null, val: number): ListNode | null {
  // 简单的删除：只需要改变指向
  if (!head) return null;
  let cur: ListNode | null = head;
  let prev: ListNode | null = head;
  if (cur.val === val) return head.next;
  while (cur) {
    if (cur.val === val) {
      prev.next = cur.next;
    }
    prev = cur;
    cur = cur.next;
  }
  return head;
}

export {};
