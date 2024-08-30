function minPathSum(grid: number[][]): number {
  // 动规五部曲：
  // 1. 确定dp的表示含义: dp[i][j]表示从(0,0)到(i,j)的最小路径和
  // 2. 确定递推公式： dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
  // 3. dp数组初始化：第一行   第一列
  // 4. 确定遍历顺序：从左到右，从上到下
  // 5. 举例论证

  const m = grid.length;
  const n = grid[0].length;
  const dp = Array(m)
    .fill([])
    .map(() => Array(n));

  // dp初始化
  dp[0][0] = grid[0][0];
  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }

  for (let j = 1; j < n; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j];
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }

  return dp[m - 1][n - 1];
}

export {};
