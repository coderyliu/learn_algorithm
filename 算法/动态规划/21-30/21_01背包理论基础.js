// 0.1背包的问题解题的二维dp方法
function testWeightBagProblem(weight, value, size) {
  const len = weight.length
  const dp = Array(len + 1).fill(0).map(i => {
    Array(size + 1).fill(0)
  })

  for (let i = 1; i <= len; i++) {
    for (let j = 0; j <= size; j++) {
      if (weight[i - 1] <= j) {
        dp[i][j] = Math.max(dp[i - 1][j], value[i - 1] + dp[i - 1][j - weight[i - 1]])
      } else {
        dp[i][j] = dp[i - 1][j]
      }
    }
  }
  return dp[len][size]
}

// 0.1背包，解题模板一维dp数组
function testWeightBagProblem2(weight, value, size) {
  const len = weight.length
  const dp = Array(size + 1).fill(0)
  for (let i = 1; i <= len; i++) {
    for (let j = size; j >= weight[i - 1]; j--) {
      dp[j] = Math.max(dp[j], dp[j - weight[i - 1]] + value[i - 1])
    }
  }
  return dp[size]
}