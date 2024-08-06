// https://leetcode.cn/problems/3sum-closest/?plan=leetcode_75&plan_progress=gty1ops
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  // ?暴力  超时
  let res

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let p = j + 1; p < nums.length; p++) {
        let sum = nums[i] + nums[j] + nums[p]
        let sub = Math.abs(sum - target)

        if (!res) {
          res = sum
        } else {
          res = sub > Math.abs(res - target) ? res : sum
        }
      }
    }
  }

  return res
};

var threeSumClosest = function (nums, target) {
  // ?双指针
  nums.sort((a, b) => a - b)
  let len = nums.length
  let min = Infinity

  for (let i = 0; i < len - 2; i++) {
    let left = i + 1
    let right = len - 1

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right]

      if (Math.abs(sum - target) < Math.abs(min - target)) {
        min = sum
      }

      if (sum > target) {
        right--
      } else if (sum < target) {
        left++
      } else {
        return sum
      }
    }
  }

  return min
};