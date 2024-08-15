/**
 * Filename: insertion_sort.js
 * CreateTime: 2024-8-15
 * Author: coderyliu
 */

// ?插入排序
// 原理：默认第一个元素是已经排好序的序列，在未排序的区间里，选择第一个元素依次和已排序的做比较，选择合适的插入位置

// 插入排序 - O(n^2)
function insertionSort(nums) {
  // 外循环：已排序区间为 [0, i-1]
  for (let i = 1; i < nums.length; i++) {
    const base = nums[i];
    let j = i - 1;
    // 内循环：将 base 插入到已排序区间 [0, i-1] 中的正确位置
    while (j >= 0 && nums[j] > base) {
      // 将当前元素往后移动一位
      nums[j + 1] = nums[j];
      j--;
    }
    // 在合适的位置插入元素
    nums[j + 1] = base;
  }
}

/* Driver Code */
const nums = [4, 1, 3, 1, 5, 2];
insertionSort(nums);
console.log("插入排序完成后 nums =", nums);
