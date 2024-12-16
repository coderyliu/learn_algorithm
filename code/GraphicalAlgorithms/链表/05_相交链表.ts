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
  // 求出链表的长度
  const getListLength = (head: ListNode | null): number => {
    if (!head) return 0;
    let cur: ListNode | null = head;
    let cnt = 0;
    while (cur) {
      cnt++;
      cur = cur.next;
    }
    return cnt;
  };
  let lenA = getListLength(headA);
  let lenB = getListLength(headB);
  let curA: ListNode | null = headA;
  let curB: ListNode | null = headB;
  if (lenA > lenB) {
    while (lenA > lenB) {
      curA = curA!.next;
      lenA--;
    }
  } else {
    while (lenB > lenA) {
      curB = curB!.next;
      lenB--;
    }
  }
  while (curA && curB) {
    if (curA === curB) return curA;
    curA = curA!.next;
    curB = curB!.next;
  }
  return null;
}

export {};
