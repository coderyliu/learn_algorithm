// https://leetcode-cn.com/problems/unique-paths-ii/

// 动规五部曲
// 1-确定dp数组及其下标的含义
// 二维dp数组,dp[i][j]表示到达某个路径下的路径有dp[i][j]条

// 2-确定推导公式
// dp[i][j]=dp[i-1][j]+dp[i][j-1]

// 3-dp数组初始化
// dp[i][0]=1  dp[0][j]=1
// 不同的是：如果这条路径上有障碍，为0

// 4-确定遍历顺序
// 依然是从左到右遍历

function uniquePath(grid){
  const m=grid.length
  const n=grid[0].length
  const dp=Array(m).fill().map(i=>Array(n).fill(0))

  for(let i=0;i<m&&grid[i][0]===0;i++){
    dp[i][0]=1
  }

  for(let j=0;j<n&&grid[0][j]===0;j++){
    dp[0][j]=1
  }

  for(let i=1;i<m;i++){
    for(let j=1;j<n;j++){
      dp[i][j]=grid[i][j]===1?0:dp[i-1][j]+dp[i][j-1]
    }
  }

  return dp[m-1][n-1]
}
