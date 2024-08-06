var maxProfit = function (prices) {
  const dp = Array(prices.length)
  dp[0] = 0
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      dp[i] = Math.max(dp[i - 1], prices[i] - Math.min(...prices.slice(0, i + 1)))
    } else {
      dp[i] = dp[i - 1]
    }
  }

  return dp[prices.length - 1]
}
console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log(maxProfit([7, 6, 4, 3, 1]))