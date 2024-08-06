// https://leetcode-cn.com/problems/maximum-length-of-repeated-subarray/

// 动规五部曲
// 1-确定dp数组
// dp[i][j]表示

function findLength(A, B) {
  const [m, n] = [A.length, B.length]

  const dp = Array(m + 1).fill(0).map(x => Array(n + 1).fill(0))
  // 初始化最大长度
  let res = 0
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (A[i - 1] === B[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      }

      res = dp[i][j] > res ? dp[i][j] : res
    }
  }

  return res
}