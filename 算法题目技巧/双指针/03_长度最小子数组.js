// https://leetcode.cn/problems/minimum-size-subarray-sum/

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
// 双指针
// 时间复杂度:52ms
var minSubArrayLen = function (target, nums) {
  let left = 0
  let right = 0
  let res = 0,
    sum = 0
  while (left < nums.length) {
    if (sum < target && right < nums.length) {
      sum += nums[right]
      right++
    } else if (sum >= target) {
      if (res === 0) {
        res = right - left
      } else {
        res = Math.min(res, right - left)
      }
      sum -= nums[left]
      left++
    } else {
      return res
    }
  }

  return res
};
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))