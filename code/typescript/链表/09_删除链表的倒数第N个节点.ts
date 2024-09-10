class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  // 方法一： 暴力
  // const node: ListNode[] = [];
  // let cur = head;
  // while (cur) {
  //   node.push(cur);
  //   cur = cur.next;
  // }
  // const len = node.length;
  // if (len === 1 && n === 1) return null;
  // const sub = len - n;
  // if (sub === 0) return node[1];
  // node[sub - 1].next = node[sub].next;

  // return node[0];

  // 方法二： 快慢指针
  // 让fast先走n步，然后slow和fast一起走，当fast走到末尾，slow刚好差n步走到结尾，即是删除倒数第n个节点
  // 因为删除节点，需要知道前一个节点，所以需要一个虚拟节点
  let virHead: ListNode = new ListNode(0, head);
  let slow: ListNode | null = virHead;
  let fast: ListNode | null = virHead;
  while (n--) {
    fast = fast.next;
    if (!fast) return virHead.next;
  }

  while (fast.next) {
    fast = fast!.next;
    slow = slow!.next;
  }

  slow!.next = slow!.next!.next;
  return virHead.next;
}

export {};
