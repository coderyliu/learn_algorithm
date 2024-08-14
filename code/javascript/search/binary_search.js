/**
 * Filename: binary_search.js
 * CreateTime: 2024-08-14
 * Author: coderyliu
 */

// 二分查找 - 双闭区间
function binarySearch(nums, target) {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    const mid = Math.floor(l + (r - l) / 2);
    if (nums[mid] > target) {
      // 此情况说明 target 在[i, mid - 1]
      r = mid - 1;
    } else if (nums[mid] < target) {
      // 此情况说明 target 在[mid + 1, j]
      l = mid + 1;
    } else {
      // 找到目标元素，返回其索引
      return mid;
    }
  }

  // 未找到目标元素
  return -1;
}

// 二分查找 - 单闭区间(左闭右开)
function binarySearchLCRO(nums, target) {
  let l = 0;
  let r = nums.length;

  while (l < r) {
    const mid = Math.floor(l + (r - l) / 2);
    if (nums[mid] > target) {
      r = mid;
    } else if (nums[mid] < target) {
      l = mid + 1;
    } else {
      return mid;
    }
  }

  return -1;
}

/* Driver Code */
const target = 6;
const nums = [1, 3, 6, 8, 12, 15, 23, 26, 31, 35];

/* 二分查找（双闭区间） */
let index = binarySearch(nums, target);
console.log("目标元素 6 的索引 = " + index);

/* 二分查找（左闭右开区间） */
index = binarySearchLCRO(nums, target);
console.log("目标元素 6 的索引 = " + index);
