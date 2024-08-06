// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/

var maxProfit = function (prices) {
  let lowerPrice = prices[0]
  let profit = 0
  for (let i = 1; i < prices.length; i++) {
    lowerPrice = Math.min(lowerPrice, prices[i])
    profit = Math.max(profit, prices[i] - lowerPrice)
  }

  return profit
}