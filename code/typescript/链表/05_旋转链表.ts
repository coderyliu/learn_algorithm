/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  // 方法一：将链表转为数组，然后取余，再转为链表
  // const listToArr = (head: ListNode | null): number[] => {
  //   const res: number[] = [];
  //   let cur = head;
  //   while (cur) {
  //     res.push(cur.val);
  //     cur = cur.next;
  //   }
  //   return res;
  // };
  // const arr = listToArr(head);
  // const n = k % arr.length;
  // let res = arr;
  // if (n !== 0) {
  //   res = arr.slice(-n).concat(arr.slice(0, -n));
  // }

  // const arrToList = (arr: number[]): ListNode | null => {
  //   if (!arr.length) return null;
  //   const head = new ListNode(arr[0]);
  //   let p = head;
  //   for (let i = 1; i < arr.length; i++) {
  //     const node = new ListNode(arr[i]);
  //     p.next = node;
  //     p = node;
  //   }

  //   return head;
  // };
  // return arrToList(res);

  // 方法二：知道链表的长度取余，首尾拼接
  if (!head || !head.next) return head;
  let length = 0;
  let cur: ListNode | null = head;
  while (cur) {
    length++;
    cur = cur.next;
  }
  let n = k % length;
  if (n === 0) return head;
  // 设置快慢指针，将链表分为两段
  let fast: ListNode | null = head;
  let slow: ListNode | null = head;
  while (n > 0) {
    fast = fast!.next;
    n--;
  }

  while (fast && fast.next) {
    fast = fast.next;
    slow = slow!.next;
  }

  // 设置新的链表头节点
  let r: ListNode | null = slow?.next || null;
  slow!.next = null;
  fast!.next = head;
  return r;
}

export {};
