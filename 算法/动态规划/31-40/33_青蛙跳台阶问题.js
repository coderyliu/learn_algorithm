// https://leetcode.cn/problems/qing-wa-tiao-tai-jie-wen-ti-lcof/?plan=sohu&plan_progress=zyhqdyj

/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
  // ?动态五部曲
  // 1.确定dp[i]及其下标i的含义
  const dp = new Array(n + 1).fill(1)

  // 2.dp数组初始化
  dp[1] = 1
  dp[2] = 2

  // 3.确定递推公式
  // dp[i]=dp[i-1]+dp[i-2]

  // 4.递归
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
    if (dp[i] > 1000000007) {
      dp[i] = dp[i] % 1000000007
    }
  }

  return dp[n]
};