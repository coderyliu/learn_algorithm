// 给定两个以非递减顺序排列的整数数组 nums1 和 nums2 ,以及一个整数k。
// 定义一对值 (u,v)，其中第一个元素来自 nums1，第二个元素来自 nums2 。
// 请找到和最小的 k 个数对 (u1,v1),  (u2,v2)  ...  (uk,vk) 。

function kSmallestPairs(
  nums1: number[],
  nums2: number[],
  k: number
): number[][] {
  // 方式一：暴力 + hash - 时间复杂度过高O(n^2)
  // const map = new Map();
  // for (let i = 0; i < nums1.length; i++) {
  //   for (let j = 0; j < nums2.length; j++) {
  //     const sum = nums1[i] + nums2[j];
  //     if (map.has(sum)) {
  //       const arr = map.get(sum);
  //       arr.push([nums1[i], nums2[j]]);
  //       map.set(sum, arr);
  //     } else {
  //       map.set(sum, [[nums1[i], nums2[j]]]);
  //     }
  //   }
  // }
  // const result: any[] = Array.from(map.entries()).sort((a, b) => a[0] - b[0]);
  // const res: any = [];
  // let num = 0;
  // for (const [key, value] of result) {
  //   if (num < k) {
  //     for (let i = 0; i < value.length; i++) {
  //       if (num < k) {
  //         res.push(value[i]);
  //         num++;
  //       }
  //     }
  //   } else {
  //     break;
  //   }
  // }

  // return res;

  // 方式二：优先队列 - 最大堆
  class MaxHeap {
    #data: number[][];

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

    // 求和
    #sum(arr: number[]) {
      return arr.reduce((pre, cur) => pre + cur, 0);
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
    push(val: number[]) {
      // 将新元素插入堆尾部
      this.#data.push(val);
      // 自底向上堆化
      this.#siftUp(this.size() - 1);
    }

    // 从索引 i 处自底向上堆化
    #siftUp(i: number) {
      while (true) {
        const p = this.#parent(i);
        // 如果“越过根节点”或者“满足大顶堆的定义”，则退出
        if (p < 0 || this.#sum(this.#data[p]) > this.#sum(this.#data[i])) break;
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
        if (
          l < this.size() &&
          this.#sum(this.#data[l]) > this.#sum(this.#data[ma])
        )
          ma = l;
        if (
          r < this.size() &&
          this.#sum(this.#data[r]) > this.#sum(this.#data[ma])
        )
          ma = r;
        if (ma === i) break;
        // 交换节点
        this.swap(i, ma);
        // 循环向下堆化
        i = ma;
      }
    }

    // 获取堆顶
    peek() {
      return this.#sum(this.#data[0]);
    }

    // 获取堆元素
    get() {
      return this.#data;
    }
  }

  if (nums1.length && nums2.length) {
    // ?2.1 这样会超出时间限制
    // const maxHeap = new MaxHeap();
    // for (let i = 0; i < nums1.length; i++) {
    //   for (let j = 0; j < nums2.length; j++) {
    //     maxHeap.push([nums1[i], nums2[j]]);
    //   }
    // }

    // while(maxHeap.size() > k) maxHeap.pop()
    // return maxHeap.get()

    // ?2.2 要做一个限制：因为是有序数组
    const maxHeap = new MaxHeap();
    for (let i = 0; i < nums1.length; i++) {
      for (let j = 0; j < nums2.length; j++) {
        const item = [nums1[i], nums2[j]];
        maxHeap.push(item);
        if (maxHeap.size() > k) maxHeap.pop();
        if (maxHeap.size() === k && item[0] + item[1] >= maxHeap.peek()) break;
      }
      if (maxHeap.size() === k && nums1[i] + nums2[0] >= maxHeap.peek()) break;
    }
    return maxHeap.get();
  }
  return [];
}

export {};
