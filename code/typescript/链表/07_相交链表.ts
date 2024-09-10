// https://leetcode.cn/problems/intersection-of-two-linked-lists/description/

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  const getListLength = (head: ListNode | null): number => {
    let cur = head;
    let len = 0;
    while (cur) {
      len++;
      cur = cur.next;
    }
    return len;
  };
  // 如果存在相交链表 - 相交节点指向内存中的地址是相同的
  const lenA = getListLength(headA);
  const lenB = getListLength(headB);

  let curA: ListNode | null = headA;
  let curB: ListNode | null = headB;

  if (lenA > lenB) {
    for (let i = 0; i < lenA - lenB; i++) {
      curA = curA!.next;
    }
  } else {
    for (let i = 0; i < lenB - lenA; i++) {
      curB = curB!.next;
    }
  }

  while (curA && curB) {
    if (curA === curB) return curA;
    curA = curA.next;
    curB = curB.next;
  }

  return null;
}

export {};
