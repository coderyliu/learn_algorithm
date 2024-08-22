// 堆排序
// 建立大顶堆、小顶堆 -> 对排序数组入堆堆化或者对排序数组遍历堆化 -> 依次出堆排序

class MinHeap {
  #heap;
  constructor(nums) {
    this.#heap = nums === undefined ? [] : [...nums];
    // 建堆操作
    for (let i = this.#parent(this.size() - 1); i >= 0; i--) {
      this.siftDown(i);
    }
  }

  // 访问堆顶元素
  peek() {
    return this.#heap[0];
  }

  // 判断堆是否为空
  isEmpty() {
    return this.size() === 0;
  }

  // 获取堆的长度
  size() {
    return this.#heap.length;
  }

  // 根据索引 i 获取其左子节点索引
  #left(i) {
    return 2 * i + 1;
  }

  // 根据索引 i 获取其右子节点索引
  #right(i) {
    return 2 * i + 2;
  }

  // 根据索引 i 获取其父节点索引
  #parent(i) {
    return Math.floor((i - 1) / 2);
  }

  // 交换节点
  #swap(i, j) {
    const tmp = this.#heap[i];
    this.#heap[i] = this.#heap[j];
    this.#heap[j] = tmp;
  }

  // 入堆
  push(val) {
    this.#heap.push(val);
    // 堆化 - 自底往上堆化
    this.siftUp(this.size() - 1);
  }

  // 出堆
  pop() {
    if (this.isEmpty()) return;
    // 交换节点
    this.#swap(0, this.size() - 1);
    // 弹出堆顶元素
    const v = this.#heap.pop();
    // 堆化 - 自顶往下堆化
    this.siftDown(0);
    return v;
  }

  // 堆化 -> 自顶往下堆化
  siftDown(i) {
    while (true) {
      let ma = i;
      // 获取左右子节点索引
      const l = this.#left(i);
      const r = this.#right(i);
      // 比较左右子节点和父节点
      if (l < this.size() && this.#heap[l] < this.#heap[ma]) ma = l;
      if (r < this.size() && this.#heap[r] < this.#heap[ma]) ma = r;
      // 不满足条件则跳出循环
      if (ma === i) break;
      // 交换节点
      this.#swap(i, ma);
      // 更新索引
      i = ma;
    }
  }

  // 堆化 -> 自底往上堆化
  siftUp(i) {
    while (true) {
      // 获取父节点索引
      const p = this.#parent(i);
      // 判断索引是否越界或者满足小顶堆的条件
      if (p < 0 || this.#heap[p] < this.#heap[i]) break;
      // 交换节点
      this.#swap(i, p);
      // 更新索引
      i = p;
    }
  }

  // 获取堆
  get() {
    return this.#heap;
  }
}

// 堆排序
function heapSort(nums) {
  const minHeap = new MinHeap(nums);
  for (let i = 0; i < nums.length; i++) {
    nums[i] = minHeap.pop();
  }
}

/* Driver Code */
const nums = [4, 1, 3, 1, 5, 2];
heapSort(nums);
console.log("堆排序完成后 nums =", nums);
