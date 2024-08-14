/**
 * Filename: binary_search_insertion.js
 * CreateTime: 2024-08-14
 * Author: coderyliu
 */

// 二分查找插入点（无重复元素）
function binarySearchInsertionSimple(nums, target) {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    const mid = Math.floor(l + (r - l) / 2);
    if (nums[mid] > target) {
      r = mid - 1;
    } else if (nums[mid] < target) {
      l = mid + 1;
    } else {
      return mid;
    }
  }

  // 未找到target,返回插入点 l
  return l;
}

// 二分查找插入点（有重复元素）
function binarySearchInsertion(nums, target) {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    const mid = Math.floor(l + (r - l) / 2);
    if (nums[mid] > target) {
      r = mid - 1;
    } else if (nums[mid] < target) {
      l = mid + 1;
    } else {
      // 首个小于 target 的元素在区间 [l, mid - 1] 中
      r = mid - 1;
    }
  }

  return l;
}

/* Driver Code */
// 无重复元素的数组
let nums = [1, 3, 6, 8, 12, 15, 23, 26, 31, 35];
console.log("\n数组 nums = " + nums);
// 二分查找插入点
for (const target of [6, 9]) {
  const index = binarySearchInsertionSimple(nums, target);
  console.log("元素 " + target + " 的插入点的索引为 " + index);
}

// 包含重复元素的数组
nums = [1, 3, 6, 6, 6, 6, 6, 10, 12, 15];
console.log("\n数组 nums = " + nums);
// 二分查找插入点
for (const target of [2, 6, 20]) {
  const index = binarySearchInsertion(nums, target);
  console.log("元素 " + target + " 的插入点的索引为 " + index);
}

module.exports = {
  binarySearchInsertion
};
