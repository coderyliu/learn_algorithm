// 仓库管理员以数组 stock 形式记录商品库存表，其中 stock[i] 表示对应商品库存余量。请返回库存余量最少的 cnt 个商品余量，返回 顺序不限。

// 示例
// 输入：stock = [1, 2, 3, 4, 5], cnt = 3
// 输出：[1, 2, 3]

class MinHeap {
  #heap: number[] = [];

  constructor(nums?: number[]) {
    this.#heap = nums ?? [];
    // 堆化
    for (let i = this.#parent(this.size() - 1); i >= 0; i--) {
      this.#siftDown(i);
    }
  }

  // 获取节点 i 的左子节点索引
  #left(i: number): number {
    return 2 * i + 1;
  }

  // 获取节点 i 的右子节点索引
  #right(i: number): number {
    return 2 * i + 2;
  }

  // 获取节点 i 的父节点索引
  #parent(i: number): number {
    return Math.floor((i - 1) / 2);
  }

  // 交换元素
  #swap(i: number, j: number): void {
    [this.#heap[i], this.#heap[j]] = [this.#heap[j], this.#heap[i]];
  }

  // 堆大小
  size(): number {
    return this.#heap.length;
  }

  // 堆是否为空
  isEmpty(): boolean {
    return this.size() === 0;
  }

  // 自底向上堆化
  #siftUp(i: number): void {
    while (true) {
      // 获取父节点索引
      const p = this.#parent(i);
      // 判断是否符合条件: 父节点小于等于当前节点
      if (p >= 0 && this.#heap[p] <= this.#heap[i]) break;
      // 交换元素
      this.#swap(p, i);
      // 更新索引
      i = p;
    }
  }

  // 插入元素
  push(val: number): void {
    // 插入元素至堆尾
    this.#heap.push(val);
    // 自底向上堆化
    this.#siftUp(this.size() - 1);
  }

  // 自顶向下堆化
  siftDown(i: number): void {
    while (true) {
      let min = i;
      // 获取左子节点索引
      const l = this.#left(i);
      // 获取右子节点索引
      const r = this.#right(i);
      // 判断是否满足条件
      if (l < this.size() && this.#heap[min] > this.#heap[l]) min = l;
      if (r < this.size() && this.#heap[min] > this.#heap[r]) min = r;
      // 如果 min 没有发生变化，则说明已经满足条件，退出循环
      if (min === i) break;
      // 交换元素
      this.#swap(i, min);
      // 更新索引
      i = min;
    }
  }

  // 删除元素
  pop(): number | undefined {
    if (this.isEmpty()) return;
    // 将堆顶元素与最后一个元素交换
    this.#swap(0, this.size() - 1);
    // 删除最后一个元素
    const val = this.#heap.pop();
    // 从堆顶开始，向下调整堆
    this.#siftDown(0);
    return val;
  }

  // 获取堆顶元素
  peek(): number | undefined {
    return this.#heap[0];
  }
}

function inventoryManagement(stock: number[], cnt: number): number[] {
  // 方法一：排序 - 使用JS - API
  // *时间复杂度：O(nlogn)
  // *空间复杂度：O(n)
  // return stock.sort((a, b) => a - b).slice(0, cnt);

  // *方法二：排序 - 堆排序
  // *时间复杂度：O(nlogn)
  // *空间复杂度：O(n)
  const minHeap = new MinHeap(stock);
  const res: number[] = [];
  for (let i = 0; i < cnt; i++) {
    res.push(minHeap.pop()!);
  }
  return res;
}

console.log(inventoryManagement([1, 2, 3, 4, 5], 3)); // [1, 2, 3]

export {};
