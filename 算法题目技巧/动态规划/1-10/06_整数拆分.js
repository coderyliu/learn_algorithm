// https://leetcode-cn.com/problems/integer-break/

// 动规五部曲
// 1-确定dp数组、dp数组下标的含义
// dp[i]表示该数拆分可以得到的最大乘积
// 下标i表示分拆数字

// 2-确定递推公式
// 

function integerBreak(n) {
  let dp = new Array(n + 1).fill(0)
  dp[2] = 1
  for (let i = 3; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      dp[i] = Math.max(dp[i], dp[i - j] * j, (i - j) * j)
    }
  }
  return dp[n]
}