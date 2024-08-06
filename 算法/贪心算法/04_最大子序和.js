// https://leetcode-cn.com/problems/maximum-subarray/

// 贪心，贪的是哪里呢
// 局部最优就是当遇到负数的时候立刻抛弃掉，从下一个数开始
// 全局最优就是最大连续'和'

function maxSubArray(nums) {
  if (nums.length === 1) return nums[0]
  let res = -Infinity
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    count += nums[i]
    if (count > res) {
      res = count
    }
    if (count < 0) {
      count = 0
    }
  }

  return res
}