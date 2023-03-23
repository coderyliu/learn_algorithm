// https://leetcode-cn.com/problems/unique-paths/
// 动规五部曲
// 1-确定dp数组及其下表含义
// 二维dp[i][j]数组  表示从(0,0)到(i,j)有dp[i][j]条不同路径

// 2-确定递推公式
// 到dp[i][j]只有先到dp[i-1][j]或者dp[i][j-1]才能到dp[i][j]
// 所以:dp[i][j]=dp[i-1][j]+dp[i][j-1]

// 3-dp数组初始化
// dp[i][0]都是1  dp[0][j]都是1

// 4-确定遍历顺序
// 从左到右一层一层遍历

function uniquePaths(m, n) {
  const dp = Array(m).fill().map(item => Array(n))

  for (let i = 0; i < m; i++) {
    dp[i][0] = 1
  }
  for (let j = 0; j < n; j++) {
    dp[0][j] = 1
  }

  for(let i=1;i<m;i++){
    for(let j=1;j<n;j++){
      dp[i][j]=dp[i-1][j]+dp[i][j-1]
    }
  }

  return dp[m-1][n-1]
}