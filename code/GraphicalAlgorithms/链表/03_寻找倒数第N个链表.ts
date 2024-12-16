class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// 给定一个头节点为 head 的链表用于记录一系列核心肌群训练项目编号，请查找并返回倒数第 cnt 个训练项目编号。

function trainingPlan(head: ListNode | null, cnt: number): ListNode | null {
  // 方法一：暴力 获取链表长度，然后遍历到倒数第 cnt 个节点
  // if (!head) return null;
  // let len = 0;
  // let cur: ListNode | null = head;
  // while (cur) {
  //   len++;
  //   cur = cur.next;
  // }
  // let count = len - cnt;
  // let curr: ListNode | null = head;
  // while (count) {
  //   curr = curr!.next;
  //   count--;
  // }
  // return curr;

  // 方法二：暴力优化
  // if (!head) return null;
  // const stack: ListNode[] = [];
  // let cur: ListNode | null = head;
  // while (cur) {
  //   stack.push(cur);
  //   cur = cur.next;
  // }
  // return stack[stack.length - cnt];

  // 方法三：双指针 - 快慢指针
  if (!head) return null;
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  while (cnt--) {
    slow = slow!.next;
  }
  while (slow) {
    slow = slow!.next;
    fast = fast!.next;
  }
  return fast;
}

export {};
