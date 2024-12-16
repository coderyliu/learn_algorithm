class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function trainningPlan(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  // ?这道题的本质是合并两个有序的链表
  // 方法一：暴力
  // if (!l1) return l2;
  // if (!l2) return l1;
  // const arr: number[] = [];
  // let cur1: ListNode | null = l1;
  // let cur2: ListNode | null = l2;
  // while (cur1) {
  //   arr.push(cur1.val);
  //   cur1 = cur1.next;
  // }
  // while (cur2) {
  //   arr.push(cur2.val);
  //   cur2 = cur2.next;
  // }
  // // 时间复杂度:O(nlogn)
  // arr.sort((a, b) => a - b);
  // // 将有序数组转换为链表
  // const dummy = new ListNode();
  // let prev: ListNode | null = dummy;
  // for (const v of arr) {
  //   const node = new ListNode(v);
  //   prev.next = node;
  //   prev = prev.next;
  // }
  // return dummy.next;

  // 方法二：递归
  if (!l1) return l2;
  if (!l2) return l1;
  if (l1!.val < l2!.val) {
    l1.next = trainningPlan(l1?.next, l2);
    return l1;
  } else {
    l2.next = trainningPlan(l1, l2?.next);
    return l2;
  }
}

export {};
