/**
 * Filename: my_heap.js
 * CreateTime: 2024-08-12
 * Author: coderyliu
 */

// 最大堆 - max_heap
// 实际上，堆的实现一般都是通过优先级队列来实现，堆是一个完全二叉树，大顶堆满足条件：父节点的值大于等于其所有子节点的值。
class MaxHeap {
  #maxHeap;

  // 完全二叉树的表示，用数组表示最为妥当，数组元素代表树的节点值，数组的索引代表节点的指针
  constructor(nums) {
    // 将列表元素原封不动添加进堆
    this.#maxHeap = nums === undefined ? [] : [...nums];
    // 堆化
    for (let i = this.#parent(this.size() - 1); i >= 0; i--) {
      this.#siftDown(i);
    }
  }

  // 获取左节点的索引值
  #left(i) {
    return 2 * i + 1;
  }

  // 获取右节点的索引值
  #right(i) {
    return 2 * i + 2;
  }

  // 获取父节点的索引值
  #parent(i) {
    return Math.floor((i - 1) / 2);
  }

  // 访问堆顶元素
  peek() {
    return this.#maxHeap[0];
  }

  // 获取堆的大小
  size() {
    return this.#maxHeap.length;
  }

  // 判断堆是否为空
  isEmpty() {
    return this.#maxHeap.length === 0;
  }

  // 交换元素
  swap(i, j) {
    const temp = this.#maxHeap[i];
    this.#maxHeap[i] = this.#maxHeap[j];
    this.#maxHeap[j] = temp;
  }

  // 堆化 - 从节点 i 开始，自上而下实现堆化
  #siftUp(i) {
    while (true) {
      const p = this.#parent(i);
      // 当”越过根节点“或“节点无需修复时”,结束堆化
      if (p < 0 || this.#maxHeap[p] > this.#maxHeap[i]) break;
      // 否则，交换元素
      this.swap(i, p);
      // 循环向上堆化
      i = p;
    }
  }

  // 元素入堆
  push(val) {
    // 过程
    // 1. 将元素添加至堆底
    this.#maxHeap.push(val);
    // 2. 自底向上实现堆化（heapify）
    this.#siftUp(this.size() - 1);
  }

  // 元素出堆
  pop() {
    // 判空处理
    if (this.isEmpty()) return null;
    // 过程
    // 1. 交换根节点和堆底元素
    this.swap(0, this.size() - 1);
    // 2. 删除堆底元素
    const val = this.#maxHeap.pop();
    // 3. 自顶向下实现堆化
    this.#siftDown(0);
    return val;
  }

  // 从索引 i 处自顶向下实现堆化
  #siftDown(i) {
    while (true) {
      // 判断节点 i, l, r 中值最大的节点，记为 ma
      const l = this.#left(i);
      const r = this.#right(i);
      let ma = i;
      if (l < this.size() && this.#maxHeap[l] > this.#maxHeap[ma]) ma = l;
      if (r < this.size() && this.#maxHeap[r] > this.#maxHeap[ma]) ma = r;
      if (ma === i) break;
      // 交换节点
      this.swap(i, ma);
      // 循环向下堆化
      i = ma;
    }
  }

  // 打印堆
  print() {
    console.log(this.#maxHeap);
  }

  // 取出堆中元素
  getMaxHeap() {
    return this.#maxHeap;
  }
}

/* Driver Code */
if (require.main === module) {
  /* 初始化大顶堆 */
  const maxHeap = new MaxHeap([9, 8, 6, 6, 7, 5, 2, 1, 4, 3, 6, 2]);
  console.log("\n输入列表并建堆后");
  maxHeap.print();

  /* 获取堆顶元素 */
  let peek = maxHeap.peek();
  console.log(`\n堆顶元素为 ${peek}`);

  /* 元素入堆 */
  let val = 7;
  maxHeap.push(val);
  console.log(`\n元素 ${val} 入堆后`);
  maxHeap.print();

  /* 堆顶元素出堆 */
  peek = maxHeap.pop();
  console.log(`\n堆顶元素 ${peek} 出堆后`);
  maxHeap.print();

  /* 获取堆大小 */
  let size = maxHeap.size();
  console.log(`\n堆元素数量为 ${size}`);

  /* 判断堆是否为空 */
  let isEmpty = maxHeap.isEmpty();
  console.log(`\n堆是否为空 ${isEmpty}`);
}

module.exports = {
  MaxHeap
};
