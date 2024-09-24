// https://leetcode.cn/problems/add-two-numbers-ii/description/

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val: number, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  // 辅助栈 + 头插法
  const stack1: number[] = [];
  const stack2: number[] = [];

  while (l1) {
    stack1.push(l1.val);
    l1 = l1.next;
  }

  while (l2) {
    stack2.push(l2.val);
    l2 = l2.next;
  }

  let carry = 0;
  let dummy = new ListNode(0);
  while (stack1.length || stack2.length || carry) {
    const sum = (stack1.pop() || 0) + (stack2.pop() || 0) + carry;
    carry = Math.floor(sum / 10);
    const node = new ListNode(sum % 10);
    node.next = dummy.next;
    dummy.next = node;
  }
  return dummy.next;
}

export {};
