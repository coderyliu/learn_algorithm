/**
 * Filename: binary_search.js
 * CreateTime: 2024-08-30
 * Author: coderyliu
 */

// 基于分治算法实现二分查找
function binarySearch(arr, target) {
  // 递归实现分治
  const dfs = (arr, target, start, end) => {
    if (start > end) return -1;
    const mid = Math.floor(start + (end - start) / 2);

    if (arr[mid] > target) {
      return dfs(arr, target, start, mid - 1);
    } else if (arr[mid] < target) {
      return dfs(arr, target, mid + 1, end);
    } else {
      return mid;
    }
  };

  return dfs(arr, target, 0, arr.length - 1);
}

/* Driver Code */
const target = 6;
const nums = [1, 3, 6, 8, 12, 15, 23, 26, 31, 35];
// 二分查找（双闭区间）
const index = binarySearch(nums, target);
console.log(`目标元素 6 的索引 = ${index}`);
