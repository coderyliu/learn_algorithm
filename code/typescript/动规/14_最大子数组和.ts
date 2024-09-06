// https://leetcode.cn/problems/maximum-subarray/

function maxSubArray(nums: number[]): number {
  // 动态规划
  const len = nums.length;
  const dp = Array(len).fill(0);
  dp[0] = nums[0];
  for (let i = 1; i < len; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
  }

  return Math.max(...dp);
}

export {};
