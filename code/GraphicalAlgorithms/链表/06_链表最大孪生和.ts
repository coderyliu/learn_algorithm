class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function pairSum(head: ListNode | null): number {
  // 方法一：暴力
  // 将每个节点的值添加到数组中
  // const val: number[] = [];
  // let cur = head;
  // while (cur) {
  //   val.push(cur.val);
  //   cur = cur.next;
  // }
  // // 复制数组
  // const newArr: number[] = [...val].reverse();
  // let max = -Infinity;
  // let mid = newArr.length / 2;
  // for (let i = 0; i < mid; i++) {
  //   max = Math.max(max, val[i] + newArr[i]);
  // }

  // return max;

  // 方法二：反转链表
  // 1. 快慢指针找到链表的中间节点
  let slow: ListNode | null = head,
    fast: ListNode | null = head;
  while (fast) {
    fast = fast.next!.next;
    slow = slow!.next;
  }

  // 2. 反转链表的后半部分
  let cur = slow,
    prev = null;
  while (cur) {
    let temp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = temp;
  }

  // 3. 两个指针从端开始，相加比较
  let max = -Infinity;
  slow = prev;
  fast = head;
  while (slow && fast) {
    max = Math.max(max, slow.val + fast.val);
    slow = slow.next;
    fast = fast.next;
  }

  return max;
}

export {};
