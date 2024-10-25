// https://leetcode.cn/problems/maximal-square/description/

function maximalSquare(matrix: string[][]): number {
  // 动态规划：
  // 1. 定义状态：dp[i][j] 表示以 (i, j) 为右下角的最大正方形的边长
  // 2. 状态转移方程：dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1
  // 3. 初始化：dp[i][j] = 0
  // 4. 返回值：dp 数组中的最大值
  const m = matrix.length;
  const n = matrix[0].length;
  const dp: number[][] = Array.from({ length: m }, () => Array(n).fill(0));
  let max = 0; // 记录最大正方形的边长

  // 初始化第一行和第一列
  for (let i = 0; i < m; i++) {
    dp[i][0] = +matrix[i][0];
    max = Math.max(max, dp[i][0]);
  }
  for (let j = 0; j < n; j++) {
    dp[0][j] = +matrix[0][j];
    max = Math.max(max, dp[0][j]);
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === "1") {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
        max = Math.max(max, dp[i][j]);
      }
    }
  }

  return max * max;
}

console.log(
  maximalSquare([
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"]
  ])
);
console.log(
  maximalSquare([
    ["0", "1"],
    ["1", "0"]
  ])
);

export {};
