// https://leetcode.cn/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/description/

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function trainingPlan(head: ListNode | null, cnt: number): ListNode | null {
  // 方法一：暴力解法 - O(n)
  // const node: ListNode[] = [];
  // let cur = head;
  // while (cur) {
  //   node.push(cur);
  //   cur = cur.next;
  // }

  // return node[node.length - cnt];

  // 方法二：快慢指针 - O(n)
  const virHead = new ListNode(0, head);
  let slow: ListNode | null = virHead;
  let fast: ListNode | null = virHead;
  while (cnt) {
    fast = fast!.next;
    cnt--;
  }

  while (fast) {
    slow = slow!.next;
    fast = fast.next;
  }

  return slow!.next;
}

export {};
