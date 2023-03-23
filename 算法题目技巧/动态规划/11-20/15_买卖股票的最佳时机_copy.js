/**
 * @param {number[]} prices
 * @return {number}
 */
// ?暴力破解  超时
var maxProfit = function (prices) {
  const dp = new Array(prices.length).fill(0)

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] > prices[i]) {
        dp[i] = Math.max(prices[j] - prices[i], dp[i])
      }
    }
  }

  return Math.max(...dp)
};

// ?贪心算法，以局部最优推倒出全局最优
var maxProfit = function (prices) {
  let lowerPrice = prices[0]
  let profit = 0

  for (let i = 1; i < prices.length; i++) {
    lowerPrice = Math.min(lowerPrice, prices[i])
    profit = Math.max(profit, prices[i] - lowerPrice)
  }

  return profit
}