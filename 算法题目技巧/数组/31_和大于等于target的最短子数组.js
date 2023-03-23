// https://leetcode.cn/problems/2VG8Kg/

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
// ?暴力
var minSubArrayLen = function (target, nums) {
  let res = 0
  let sum = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      res = 1
      break
    }

    sum = nums[i]
    for (let j = i + 1; j < nums.length; j++) {
      sum += nums[j]
      if (sum >= target && res !== 0) {
        res = Math.min(res, j - i + 1)
      } else if (sum >= target && res === 0) {
        res = j - i + 1
      }
    }
  }

  return res
};

// ? 双指针
var minSubArrayLen = function (target, nums) {
  let l = 0
  let r = 0
  let sum = 0
  let res = 0

  while (l < nums.length) {
    while (r < nums.length) {
      sum += nums[r]

      if (sum < target) {
        r++
      } else {
        sum -= nums[l]
        sum -= nums[r]
        if (res === 0) {
          res = r - l + 1
        } else {
          res = Math.min(res, r - l + 1)
        }
        break
      }
    }
    l++
  }

  return res
}