/**
 * Filename: top_k.js
 * CreateTime: 2024-08-12
 * Author: coderyliu
 */

const { MaxHeap } = require("./my_heap.js");

// 元素入堆
function pushMinHeap(maxHeap, val) {
  maxHeap.push(-val);
}

// 元素出堆
function popMinHeap(maxHeap) {
  return -maxHeap.pop();
}

// 访问堆顶元素
function peekMinHeap(maxHeap) {
  return -maxHeap.peek();
}

// 取出堆中元素
function getMinHeap(maxHeap) {
  return maxHeap.getMaxHeap().map((num) => -num);
}

// 基于堆寻找中最大的 k 个元素
function topKHeap(nums, k) {
  // 初始化小顶堆
  // 请注意，我们将堆中元素取反，从而用大顶堆来模拟小顶堆
  const maxHeap = new MaxHeap();
  // 将数组的前k个元素入堆
  for (let i = 0; i < k; i++) {
    pushMinHeap(maxHeap, nums[i]);
  }

  // 从第 k+1 个元素起，保持堆的长度为 k
  for (let i = k; i < nums.length; i++) {
    if (nums[i] > peekMinHeap(maxHeap)) {
      popMinHeap(maxHeap);
      pushMinHeap(maxHeap, nums[i]);
    }
  }

  return getMinHeap(maxHeap);
}

/* Driver Code */
const nums = [1, 7, 6, 3, 2];
const k = 3;
const res = topKHeap(nums, k);
console.log(`最大的 ${k} 个元素为`, res);
