// https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/description/

// 买卖股票的最佳时机I：只能在一天买入或卖出
// 而买卖股票的最佳时机II：既可以在一天买，也可以在当天卖
function maxProfit(prices: number[]): number {
  // 贪心
  // 局部最优：取左侧的最小值，右侧的最大值
  // 全局最优：所有局部最优的解的最大值
  let min = prices[0];
  let max = 0;
  for (let i = 1; i < prices.length; i++) {
    const cur = prices[i];
    min = Math.min(min, cur);
    max = Math.max(max, cur - min);
  }

  return max;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));

export {};
