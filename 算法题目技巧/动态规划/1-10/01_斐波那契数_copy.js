/**
 * @param {number} n
 * @return {number}
 */
// ?典型的动态规划
var fib = function (n) {
  // todo 动规五部曲
  // 1.确定dp,及其下标的含义
  const dp = new Array(n)

  // 2.确定递推公式
  // todo dp[n]=dp[n-1]+dp[n-2]

  // 3.初始化dp
  dp[0] = 0
  dp[1] = 1

  // 4.遍历
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }

  return dp[n]
};