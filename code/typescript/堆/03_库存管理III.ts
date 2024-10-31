// https://leetcode.cn/problems/zui-xiao-de-kge-shu-lcof/description/

// ?小顶堆的特点：任意节点的值 <= 其左右子节点的值
// ?大顶堆的特点：任意节点的值 >= 其左右子节点的值

class MinHeap {
  #data: number[] = []; // 堆数据
  constructor(nums: number[] = []) {
    this.#data = nums;

    // 堆化
    for (let i = this.#parent(this.size() - 1); i >= 0; i--) {
      this.#siftDown(i);
    }
  }

  // 完全二叉树原理
  // 左节点：2 * i + 1
  // 通过索引 i 获取左节点
  #left(i: number) {
    return 2 * i + 1;
  }

  // 右节点：2 * i + 2
  // 通过索引 i 获取右节点
  #right(i: number) {
    return 2 * i + 2;
  }

  // 父节点：(i - 1) / 2
  // 通过索引 i 获取父节点
  #parent(i: number) {
    return Math.floor((i - 1) / 2);
  }

  // 判断堆是否为空
  isEmpty() {
    return this.#data.length === 0;
  }

  // 获取堆大小
  size() {
    return this.#data.length;
  }

  // 获取堆顶元素
  peek() {
    return this.#data[0];
  }

  // 交换元素
  #swap(i: number, j: number) {
    [this.#data[i], this.#data[j]] = [this.#data[j], this.#data[i]];
  }

  // 自底向上堆化
  #siftUp(i: number) {
    while (true) {
      // 获取父节点的索引
      const p = this.#parent(i);
      // 如果父节点小于等于当前节点，则退出循环
      if (p < 0 || this.#data[p] < this.#data[i]) break;
      // 交换元素
      this.#swap(i, p);
      // 更新当前节点的索引
      i = p;
    }
  }

  // 入堆操作
  push(v: number): void {
    // 1. 添加元素
    this.#data.push(v);
    // 2. 自底向上堆化
    this.#siftUp(this.size() - 1);
  }

  // 自顶向下堆化
  #siftDown(i: number) {
    while (true) {
      // 获取左右子节点的索引
      const l = this.#left(i);
      const r = this.#right(i);
      // 记录最小值的索引
      let min = i;
      // 找出左右子节点中的最小值
      if (l < this.size() && this.#data[l] < this.#data[min]) min = l;
      if (r < this.size() && this.#data[r] < this.#data[min]) min = r;
      // 如果 min 没有发生变化，则说明已经满足堆的性质，退出循环
      if (min === i) break;
      // 交换元素
      this.#swap(i, min);
      // 更新当前节点的索引
      i = min;
    }
  }

  // 出堆操作
  pop(): number | undefined {
    if (this.isEmpty()) {
      throw new Error("堆为空");
    }
    // 1. 交换堆顶元素与最后一个元素
    this.#swap(0, this.size() - 1);
    // 2. 删除最后一个元素
    const val = this.#data.pop();
    // 3. 自顶向下堆化
    this.#siftDown(0);
    return val;
  }

  // 获取堆数据
  get() {
    return this.#data;
  }
}

// ?方法：topK问题 - 堆排序
function inventoryManagement(stock: number[], cnt: number): number[] {
  // 方法：堆排序
  // *时间复杂度：O(nlogk)
  // *空间复杂度：O(k)
  const heap = new MinHeap(stock);
  const res: number[] = [];

  while (cnt--) {
    res.push(heap.pop()!);
  }
  return res;
}

const stock = [2, 5, 7, 4];
const cnt = 2;
console.log(inventoryManagement(stock, cnt));

export {};
