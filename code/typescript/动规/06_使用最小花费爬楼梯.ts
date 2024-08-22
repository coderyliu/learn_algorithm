// https://leetcode.cn/problems/min-cost-climbing-stairs/description/

function minCostClimbingStairs(cost: number[]): number {
  // dp[i]表示爬上第 i 阶台阶的最小花费
  const dp = new Array(cost.length + 1);
  // 初始化dp数组: 因为可以直接打到第 1 阶和 2 阶的台阶，花费都是0
  dp[0] = 0;
  dp[1] = 0;
  for (let i = 2; i <= cost.length; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }

  return dp[cost.length];
}

export {};
