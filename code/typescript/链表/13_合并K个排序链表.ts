// https://leetcode.cn/problems/merge-k-sorted-lists/description/

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// 小顶堆
class MinHeap {
  #minHeap: number[];

  constructor(num: number[]) {
    this.#minHeap = num === undefined ? [] : num;
    // 初始化堆
    for (let i = this.#parent(this.size() - 1); i >= 0; i--) {
      this.#siftDown(i);
    }
  }

  // 通过索引 i 获取左子节点索引
  #left(i: number): number {
    return 2 * i + 1;
  }

  // 通过索引 i 获取右子节点索引
  #right(i: number): number {
    return 2 * i + 2;
  }

  // 通过索引 i 获取父节点索引
  #parent(i: number): number {
    return Math.floor((i - 1) / 2);
  }

  // 判断堆是否为空
  isEmpty(): boolean {
    return this.#minHeap.length === 0;
  }

  // 获取堆的长度
  size(): number {
    return this.#minHeap.length;
  }

  // 交换节点
  #swap(i: number, j: number): void {
    const tmp = this.#minHeap[i];
    this.#minHeap[i] = this.#minHeap[j];
    this.#minHeap[j] = tmp;
  }

  // 向堆中插入一个元素
  push(val: number): void {
    // 插入到尾部
    this.#minHeap.push(val);
    // 自底向上堆化
    this.#siftUp(this.size() - 1);
  }

  // 删除堆顶元素
  pop(): number | undefined {
    if (this.isEmpty()) return undefined;
    // 交换堆顶元素和最后一个元素
    this.#swap(0, this.size() - 1);
    // 删除最后一个元素
    const val = this.#minHeap.pop();
    // 自顶向下堆化
    this.#siftDown(0);

    return val;
  }

  // 自顶向下堆化
  #siftDown(i: number): void {
    while (true) {
      // 获取左右子节点的索引
      const l = this.#left(i);
      const r = this.#right(i);
      let min = i;
      // 找到左右子节点中较小的那个
      if (l < this.size() && this.#minHeap[l] < this.#minHeap[min]) min = l;
      if (r < this.size() && this.#minHeap[r] < this.#minHeap[min]) min = r;
      // 如果当前节点比左右子节点小，则跳出循环
      if (min === i) break;
      // 交换节点
      this.#swap(i, min);
      // 继续向下堆化
      i = min;
    }
  }

  // 自底向上堆化
  #siftUp(i: number): void {
    while (true) {
      // 获取父节点索引
      const p = this.#parent(i);
      // 如果“越界”或者“满足小顶堆”条件，则跳出循环
      if (p < 0 || this.#minHeap[p] < this.#minHeap[i]) break;
      // 交换节点
      this.#swap(i, p);
      i = p;
    }
  }

  // 获取堆顶元素
  peek(): number | null {
    return this.#minHeap[0];
  }

  // 获取堆元素
  toArray(): number[] {
    return [...this.#minHeap];
  }
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  // 方法一： 暴力
  // const node: ListNode[] = [];
  // lists.forEach((head) => {
  //   let cur = head;
  //   while (cur) {
  //     node.push(cur);
  //     cur = cur.next;
  //   }
  // });
  // if (!node.length) return null;
  // 排序 - O(nlogn)
  // node.sort((a, b) => a.val - b.val);
  // 构建链表 - O(n)
  // for (let i = 0; i < node.length; i++) {
  //   node[i].next = node[i + 1] || null;
  // }
  // return node[0];

  // 方法二：构建小顶堆
  const node: number[] = [];
  lists.forEach((head) => {
    let cur = head;
    while (cur) {
      node.push(cur.val);
      cur = cur.next;
    }
  });
  const minHeap = new MinHeap(node);
  // 最小堆依次出堆
  let dummy = new ListNode(-1, null);
  let cur = dummy;
  while (!minHeap.isEmpty()) {
    const v = minHeap.pop();
    cur.next = new ListNode(v, null);
    cur = cur.next;
  }

  return dummy.next;
}

export {};
