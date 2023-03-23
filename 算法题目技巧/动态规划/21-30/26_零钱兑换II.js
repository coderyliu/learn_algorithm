/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
//  dp[j]：凑成总金额j的货币组合数为dp[j]
var change = function (amount, coins) {
  const dp = Array(amount + 1).fill(0)
  dp[0] = 1

  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      dp[j] += dp[j - coins[i]]
    }
  }
  console.log(dp)
  return dp[amount]
};
change(5, [1, 2, 5])