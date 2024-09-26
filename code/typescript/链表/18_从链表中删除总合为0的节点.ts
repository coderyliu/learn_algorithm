// https://leetcode.cn/problems/remove-zero-sum-consecutive-nodes-from-linked-list/description/
// !这种做法是不正确的，仅当巩固回溯算法

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val: number, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

function removeZeroSumSublists(head: ListNode | null): ListNode | null {
  // 遍历链表，拿到所有节点
  const nodes: number[] = [];
  let cur = head;
  while (cur) {
    nodes.push(cur.val);
    cur = cur.next;
  }
  // 回溯： 求出所有的子集，然后删除
  const set = new Set<string>();
  backTrack([], nodes, set, 0);
  const arr: number[][] = Array.from(set).map((item) => JSON.parse(item));
  console.log(arr);
  // 删除链表中的节点
  for (const item of arr) {
    let count = 0;
    for (const node of item) {
      const idx = nodes.findIndex((n) => n === node);
      if (idx !== -1) count++;
    }
    if (count === item.length) {
      for (const node of item) {
        const idx = nodes.findIndex((n) => n === node);
        if (idx !== -1) nodes.splice(idx, 1);
      }
    }
  }
  console.log(nodes);
  // 重新构建链表
  if (!nodes.length) return null;
  const newHead = new ListNode(nodes[0]);
  let newCur = newHead;
  for (let i = 1; i < nodes.length; i++) {
    newCur.next = new ListNode(nodes[i]);
    newCur = newCur.next;
  }

  return newHead;
}

function backTrack(
  state: number[],
  choices: number[],
  set: Set<string>,
  startIndex: number
) {
  if (state.reduce((a, b) => a + b, 0) === 0 && state.length) {
    set.add(JSON.stringify(state.sort((a, b) => a - b)));
  }

  // 遍历所有选择
  for (let i = startIndex; i < choices.length; i++) {
    // 选择
    state.push(choices[i]);
    // 回溯
    backTrack(state, choices, set, i + 1);
    // 撤销选择
    state.pop();
  }
}

console.log(
  removeZeroSumSublists(
    new ListNode(
      1,
      new ListNode(2, new ListNode(-3, new ListNode(3, new ListNode(1))))
    )
  )
);

export {};
