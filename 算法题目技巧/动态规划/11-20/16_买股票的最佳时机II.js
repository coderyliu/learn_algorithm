/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const dp = Array(prices.length).fill(0)
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      dp[i] = dp[i - 1] + prices[i] - prices[i - 1]
      dp[i - 1] = 0
    }
  }
  return dp.reduce((pre, cur) => pre + cur, 0)
};