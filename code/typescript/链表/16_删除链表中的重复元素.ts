// https://leetcode.cn/problems/remove-duplicates-from-sorted-list/description/

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
  // 方法一：暴力 + 哈希 - 时间复杂度 O(n) 空间复杂度 O(n)
  // let cur = head;
  // const set = new Set<number>();
  // while (cur) {
  //   set.add(cur.val);
  //   cur = cur.next;
  // }

  // let prev = new ListNode();
  // let res = prev;
  // set.forEach((v) => {
  //   const node = new ListNode(v);
  //   prev.next = node;
  //   prev = node;
  // });

  // return res.next;

  // 方法二： 双指针 - 时间复杂度 O(n) 空间复杂度 O(1)
  const virHead = new ListNode(-1, head);
  let slow = virHead;
  let fast = virHead.next;

  while (fast) {
    if (fast.val === fast.next?.val) {
      fast = fast.next;
    } else {
      slow.next = fast;
      slow = fast;
      fast = fast.next;
    }
  }

  return virHead.next;
}

export {};
