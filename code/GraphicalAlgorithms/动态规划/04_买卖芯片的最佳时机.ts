// 数组 prices 记录了某芯片近期的交易价格，其中 prices[i] 表示的 i 天该芯片的价格。
// 你只能选择 某一天 买入芯片，并选择在 未来的某一个不同的日子 卖出该芯片。请设计一个算法计算并返回你从这笔交易中能获取的最大利润。

// 如果你不能获取任何利润，返回 0。

// 示例 1
// 输入: prices = [7,1,5,3,6,4]
// 输出: 5
// 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
//      注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。

function bestTiming(prices: number[]): number {
  // 解法一：暴力解法
  // 双重循环，遍历所有可能的买入和卖出组合
  // ?本质：买卖股票的最佳时机
  // * 时间复杂度：O(n^2)
  // * 空间复杂度：O(1)
  // let maxProfit = 0;
  // for (let i = 0; i < prices.length; i++) {
  //   for (let j = i + 1; j < prices.length; j++) {
  //     maxProfit = Math.max(maxProfit, prices[j] - prices[i]);
  //   }
  // }
  // return maxProfit;

  // 解法二：贪心算法
  // 局部最优：每次都选择最低的价格买入，最高的价格卖出
  // 全局最优：最大利润
  // ?本质：买卖股票的最佳时机
  // * 时间复杂度：O(n)
  // * 空间复杂度：O(1)
  // let min = prices[0];
  // let maxProfit = 0;
  // for (let i = 1; i < prices.length; i++) {
  //   min = Math.min(min, prices[i]);
  //   maxProfit = Math.max(maxProfit, prices[i] - min);
  // }
  // return maxProfit;

  // 解法三：动态规划
  // 动规五部曲：
  // 1. 确定dp数组以及下标的含义：dp[i] 表示第 i 天能获取的最大利润
  // 2. 确定递推公式：dp[i] = Math.max(dp[i - 1], prices[i] - min)
  // 3. dp数组如何初始化：dp[0] = 0
  // 4. 确定遍历顺序：从前向后遍历
  // 5. 举例推导dp数组：
  const len = prices.length;
  if (len === 0) return 0;
  const dp = Array(len).fill(0);
  dp[1] = prices[1] - prices[0] > 0 ? prices[1] - prices[0] : 0;
  for (let i = 2; i < len; i++) {
    const min = Math.min(...prices.slice(0, i));
    dp[i] = Math.max(dp[i], prices[i] - min);
  }
  return Math.max(...dp);
}

export {};
