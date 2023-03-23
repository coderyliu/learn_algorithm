/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// ?1.直接用库函数
var search = function (nums, target) {
  return nums.indexOf(target)
};

// ?2.直接暴力 O(n)
// ?3.二分查找 O(log n)
var search = function (nums, target) {
  if (nums.length === 1 && nums[0] === target) {
    return 0
  } else if (nums[0] !== target && nums.length === 1) {
    return -1
  }

  let left = 0
  let right = nums.length - 1
  while (left < right) {
    if (target < nums[left] && target > nums[right]) return -1

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