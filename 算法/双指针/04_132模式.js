// https: //leetcode.cn/problems/132-pattern/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
  let min = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > min) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] < nums[i] && nums[j] > min) {
          return true
        }
      }
    }
    if (nums[i] < min) {
      min = nums[i]
    }
  }

  return false
};