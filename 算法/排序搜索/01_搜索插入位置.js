// ?https://leetcode.cn/problems/search-insert-position/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  // 二分查找
  let left = 0,
    right = nums.length - 1,
    mid
  while (left <= right) {
    mid = Math.floor((right - left) / 2) + left
    if (nums[mid] > target) {
      right = mid - 1
    } else if (nums[mid] < target) {
      left = mid + 1
    } else {
      return mid
    }
  }

  if (target > nums[mid]) {
    return mid + 1
  } else {
    return mid
  }
};
console.log(searchInsert([1, 3, 5, 6], 7))
console.log(searchInsert([1, 3, 5, 6], 2))
console.log(searchInsert([1, 3, 5, 6], 5))
console.log(searchInsert([1, 3, 5, 6], 0))