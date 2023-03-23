/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// ?动态规划
var uniquePaths = function (m, n) {
  // todo 动规五部曲
  // 1.确定dp,及其下标i的含义
  const dp = new Array(m).fill(1).map(i => new Array(n).fill(1))

  // 2.dp初始化
  // 3.确定递推公式
  // dp[i][j]=dp[i-1][j]+dp[i][j-1]

  // 4.遍历
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    }
  }

  return dp[m - 1][n - 1]
};
console.log(uniquePaths(3, 7))