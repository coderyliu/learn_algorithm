// https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/description/

// 买卖股票的最佳时机I：只能在一天买入或卖出
// 而买卖股票的最佳时机II：既可以在一天买，也可以在当天卖
function maxProfit(prices: number[]): number {
  // 贪心
  // 局部最优：只要满足「卖出」的条件，就卖出（只要是正利润，就卖出）
  // 全局最优：所有局部最优的解的最大值
  let res: number = 0;
  for (let i = 1; i < prices.length; i++) {
    res += Math.max(prices[i] - prices[i - 1], 0);
  }

  return res;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));

export {};
