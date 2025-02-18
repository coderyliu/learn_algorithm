// https://leetcode.cn/problems/sort-list/description/

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function sortList(head: ListNode | null): ListNode | null {
  // 方法一：暴力 + sort
  // const node: ListNode[] = [];
  // let cur = head;
  // while (cur) {
  //   node.push(cur);
  //   cur = cur.next;
  // }
  // node.sort((a, b) => a.val - b.val);
  // for (let i = 0; i < node.length; i++) {
  //   node[i].next = node[i + 1] || null;
  // }
  // return node[0] || null;

  // 方法二：归并排序
  if (!head || !head.next) return head;

  // 获取链表的中间节点
  const middleNode = getMiddle(head);
  const rightHead = middleNode!.next;
  // 断开链表
  middleNode!.next = null;

  // 递归排序左右两部分
  const left = sortList(head);
  const right = sortList(rightHead);

  // 合并两个有序链表
  return mergeTwoLists(left, right);
}

// 快慢指针获取链表的中间节点
function getMiddle(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;

  let slow: ListNode | null = head;
  let fast: ListNode | null = head.next;

  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  return slow;
}

// 合并两个有序链表
function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  const dummy = new ListNode();
  let cur = dummy;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      cur.next = list1;
      list1 = list1.next;
    } else {
      cur.next = list2;
      list2 = list2.next;
    }
    cur = cur.next;
  }

  cur.next = list1 || list2;

  return dummy.next;
}

export {};
