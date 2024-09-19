// https://leetcode.cn/problems/palindrome-linked-list/description/

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function isPalindrome(head: ListNode | null): boolean {
  // 方法一：暴力 + 双指针 - O(n)
  const arr: number[] = [];
  let cur = head;
  while (cur) {
    arr.push(cur.val);
    cur = cur.next;
  }
  let l = 0;
  let r = arr.length - 1;
  while (l <= r) {
    if (arr[l] !== arr[r]) return false;
    l++;
    r--;
  }

  return true;
}

function isPalindrome2(head: ListNode | null): boolean {
  // 方法二：快慢指针 + 翻转链表 - O(n)
  // ?利用特性：如果是回文链表，则链表的前半部分与后半部分是相等的
  // 通过快慢指针找到链表的中点，然后翻转链表，再比较两个链表是否相等
  // 链表是奇数个节点，则中点为链表的中间节点，偶数个节点，则中点为两个链表的中间节点
  // 1.找到中点
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  let left = head;
  // 2.翻转链表
  let right = reverse(slow);

  // 3. 比较两个链表是否相等
  while (right) {
    if (left!.val !== right.val) return false;
    left = left!.next;
    right = right.next;
  }

  return true;
}

function reverse(head: ListNode | null): ListNode | null {
  // 反转链表 - 双指针
  let pre: ListNode | null = null;
  let cur = head;
  while (cur) {
    const tmp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = tmp;
  }

  return pre;
}

export {};
