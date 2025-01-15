// 给定一个整数数组 prices，其中 prices[i] 表示第 i 天的股票价格；整数 fee 代表了交易股票的手续费用。
// 你可以无限次地完成交易，但是你每笔交易都需要付手续费。如果你已经购买了一个股票，在卖出它之前你不能再继续购买股票。
// 返回获得利润的最大值。

function maxProfit(prices: number[], fee: number): number {
  // 动态规划
  // * 时间复杂度：O(n)
  // * 空间复杂度：O(n)
  // 动规五部曲：
  // 1. 确定dp[i][j]下标表示的含义：dp[i][j] 表示在天数[0, i] 区间内，下标 i 这一天状态为 j 的时候能够获得的最大利润，其中:
  // * j = 0 表示不持有股票，j = 1 表示持有股票
  // 2. 确定递推公式：
  // 2.1 dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
  // * dp[i - 1][0] 昨天不持股
  // * dp[i - 1][1] + prices[i] 表示昨天持股，今天卖出
  // 2.2 dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i] - fee)
  // * dp[i - 1][1] 昨天持股
  // * dp[i - 1][0] - prices[i] - fee 表示昨天不持股，今天买入，需要手续费
  // 3. dp数组如何初始化：dp[0][0] = 0, dp[0][1] = -prices[0] - fee
  // 4. 确定遍历顺序：从前向后遍历
  // 5. 举例推导dp数组：
  const len = prices.length;
  if (len < 2) return 0;
  const dp = Array(len)
    .fill(0)
    .map((item) => Array(2).fill(0));
  dp[0][0] = 0;
  dp[0][1] = -prices[0] - fee;
  for (let i = 1; i < len; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i] - fee);
  }
  return dp[len - 1][0];
}

console.log(maxProfit([1, 3, 2, 8, 4, 9], 2)); // 8
console.log(maxProfit([1, 3, 7, 5, 10, 3], 3)); // 6

export {};
