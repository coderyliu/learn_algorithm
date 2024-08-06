// https://leetcode-cn.com/problems/longest-continuous-increasing-subsequence/
// 方法1：双指针
// 方法2:动态规划
var findLengthOfLCIS = function (nums) {
  const dp = Array(nums.length).fill(1)

  let result = 1
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      dp[i] = Math.max(dp[i], dp[i - 1] + 1)
    }
    result = Math.max(result, dp[i])
  }

  return result
};