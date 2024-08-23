function maxProfit(prices: number[]): number {
  // 动态规划五部曲：
  // 1. 确定状态：dp[i] 表示第 i 天卖出股票的最大利润
  // 2. 确定状态转移方程：dp[i] = max(dp[i], prices[i] - prices[j])
  // 3. 确定初始状态：dp[0] = 0
  // 4. 确定遍历顺序：从前向后遍历
  // 5. 举例论证
  const len = prices.length;
  if (len === 1) return 0;
  if (len === 2) return prices[1] - prices[0] > 0 ? prices[1] - prices[0] : 0;
  const dp = Array.from({ length: len }, () => 0);
  dp[1] = prices[1] - prices[0] > 0 ? prices[1] - prices[0] : 0;
  // !下面的递推公式思路是正确的，但是会超出时间限制
  // for (let i = 2; i < len; i++) {
  //   for (let j = 0; j < i; j++) {
  //     if (prices[i] - prices[j] > 0) {
  //       dp[i] = Math.max(dp[i], prices[i] - prices[j]);
  //     }
  //   }
  // }
  // !优化思路 - 也会超时
  for (let i = 2; i < len; i++) {
    if (prices[i] > prices[i - 1]) {
      dp[i] = Math.max(
        dp[i - 1],
        prices[i] - Math.min(...prices.slice(0, i + 1))
      );
    } else {
      dp[i] = dp[i - 1];
    }
  }

  return Math.max(...dp);
}

export {};
