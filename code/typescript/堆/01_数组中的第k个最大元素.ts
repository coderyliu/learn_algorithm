// 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
// 你必须设计并实现时间复杂度为 O(n) 的算法解决此问题。

function findKthLargest(nums: number[], k: number): number {
  // 方法一：排序 - O(nlogn)
  // nums.sort((a, b) => b - a);
  // return nums[k];

  // 方法二：堆 - 小顶堆
  class MinHeap {
    #data: number[];

    constructor() {
      this.#data = [];
    }

    // 索引为 i 处节点的左子节点的索引
    #left(i: number) {
      return i * 2 + 1;
    }

    // 索引为 i 处节点的右子节点的索引
    #right(i: number) {
      return i * 2 + 2;
    }

    // 索引为 i 处节点的父节点的索引
    #parent(i: number) {
      return Math.floor((i - 1) / 2);
    }

    // 交换元素
    swap(i: number, j: number) {
      const temp = this.#data[i];
      this.#data[i] = this.#data[j];
      this.#data[j] = temp;
    }

    // 堆大小
    size() {
      return this.#data.length;
    }

    // 入堆
    push(val: number) {
      // 将新元素插入堆尾部
      this.#data.push(val);
      // 自底向上堆化
      this.#siftUp(this.size() - 1);
    }

    // 从索引 i 处自底向上堆化
    #siftUp(i: number) {
      while (true) {
        const p = this.#parent(i);
        // 如果“越过根节点”或者“满足小顶堆的定义”，则退出
        if (p < 0 || this.#data[p] < this.#data[i]) break;
        // 交换节点
        this.swap(i, p);
        // 自底向上循环
        i = p;
      }
    }

    // 出堆
    pop() {
      if (this.size() === 0) return null;
      // 1. 将堆顶元素和堆底元素交换
      this.swap(0, this.size() - 1);
      // 2. 删除堆底元素
      const val = this.#data.pop();
      // 3. 自顶向下堆化
      this.#siftDown(0);

      return val;
    }

    // 从索引 i 处自顶向下堆化
    #siftDown(i: number) {
      while (true) {
        // 比较i,l,i 处节点的最小值
        const l = this.#left(i);
        const r = this.#right(i);
        let ma = i;
        if (l < this.size() && this.#data[l] < this.#data[ma]) ma = l;
        if (r < this.size() && this.#data[r] < this.#data[ma]) ma = r;
        if (ma === i) break;
        // 交换节点
        this.swap(i, ma);
        // 循环向下堆化
        i = ma;
      }
    }

    // 获取堆顶
    peek() {
      return this.#data[0];
    }

    // 获取堆元素
    get() {
      return this.#data;
    }
  }

  const heap = new MinHeap();
  nums.forEach((num) => {
    heap.push(num);
    if (heap.size() > k) heap.pop();
  });
  return heap.peek();
}

findKthLargest([3, 2, 1, 5, 6, 4], 2);

export {};
