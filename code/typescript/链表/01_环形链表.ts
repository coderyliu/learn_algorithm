class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function hasCycle(head: ListNode | null): boolean {
  // 方法一：暴力解决+hash
  // if (!head || !head.next) return false;
  // const map = new Map();
  // let cur: any = head;
  // while (cur) {
  //   if (map.has(cur)) return true;
  //   map.set(cur, true);
  //   cur = cur.next;
  // }

  // return false;

  // 方法二：快慢指针
  if (!head || !head.next) return false;
  let slow: any = head;
  let fast: any = head.next;
  while (slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
}

export {};
