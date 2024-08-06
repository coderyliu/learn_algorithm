// https: //leetcode.cn/problems/search-in-rotated-sorted-array/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// ?1.直接用库函数
var search = function (nums, target) {
  return nums.indexOf(target)
};

// ?2 直接暴力 O(n)
var search = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i
    }
  }

  return -1
}

// ?3.O(log n)的时间复杂度肯定要用二分法
var search = function (nums, target) {
  // todo 从数组的两侧开始搜索
  if (nums.length === 1 && nums[0] === target) {
    return 0
  } else if (nums[0] !== target && nums.length === 1) {
    return -1
  }
  let left = 0
  let right = nums.length - 1

  while (left < right) {
    if (target < nums[left] && target > nums[right]) {
      return -1
    }

    if (target === nums[left]) {
      return left
    } else if (target === nums[right]) {
      return right
    } else if (target < nums[right]) {
      right--
    } else if (target > nums[left]) {
      left++
    }
  }

  return -1
}