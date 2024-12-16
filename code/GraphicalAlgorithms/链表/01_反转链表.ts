class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// 书店店员有一张链表形式的书单，每个节点代表一本书，节点中的值表示书的编号。
// 为更方便整理书架，店员需要将书单倒过来排列，就可以从最后一本书开始整理，逐一将书放回到书架上。请倒序返回这个书单链表。

// *返回ListNode
function reverseBookList(head: ListNode | null): ListNode | null {
  // ?这道题的本质是反转链表 - 双指针
  if (!head) return null;
  let prev: ListNode | null = null;
  let cur: ListNode | null = head;
  while (cur) {
    let temp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = temp;
  }
  return prev;
}

// *返回number[]
function reverseBookListTwo(head: ListNode | null): number[] {
  // 方法一：暴力
  // if (!head) return [];
  // const res: number[] = [];
  // let cur: ListNode | null = head;
  // while (cur) {
  //   res.push(cur.val);
  //   cur = cur.next;
  // }
  // return res.reverse();

  // 方法二：辅助栈
  const stack: number[] = [];
  const res: number[] = [];
  let cur: ListNode | null = head;
  while (cur) {
    stack.push(cur.val);
    cur = cur.next;
  }
  while (stack.length) {
    res.push(stack.pop()!);
  }
  return res;
}

export {};
