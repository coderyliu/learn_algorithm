/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// ?二分查找
var searchInsert = function (nums, target) {
  let left = 0
  let right = nums.length - 1
  let mid

  // if (target > nums[nums.length - 1]) return nums.length
  // if (target < nums[0]) return 0

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