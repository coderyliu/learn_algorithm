// 现有一个记作二维矩阵 frame 的珠宝架，其中 frame[i][j] 为该位置珠宝的价值。拿取珠宝的规则为：
// 只能从架子的左上角开始拿珠宝
// 每次可以移动到右侧或下侧的相邻位置
// 到达珠宝架子的右下角时，停止拿取
// 注意：珠宝的价值都是大于 0 的。除非这个架子上没有任何珠宝，比如 frame = [[0]]

// 示例 1
// 输入: frame = [[1,3,1],[1,5,1],[4,2,1]]
// 输出: 12
// 解释: 路径 1→3→5→2→1 可以拿到最大价值 12。

function jewelleryValue(frame: number[][]): number {
  // 动态规划：
  // ?本质：路径问题
  // * 时间复杂度：O(m * n)
  // * 空间复杂度：O(m * n)
  // 动规五部曲：
  // 1. 确定dp数组以及下标的含义：dp[i][j] 表示从左上角到 (i, j) 位置的最大价值
  // 2. 确定递推公式：dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]) + frame[i][j]
  // 3. dp数组如何初始化：dp[0][0] = frame[0][0]
  // 4. 确定遍历顺序：从左上角到右下角
  // 5. 举例推导dp数组：
  const m = frame.length;
  const n = frame[0]?.length || 0;
  const dp = Array.from({ length: m }, () => Array(n).fill(0));

  // 初始化
  dp[0][0] = frame[0][0];
  // 1. 初始化第一行
  for (let j = 1; j < n; j++) {
    dp[0][j] = dp[0][j - 1] + frame[0][j];
  }
  // 2. 初始化第一列
  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i - 1][0] + frame[i][0];
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]) + frame[i][j];
    }
  }

  return dp[m - 1][n - 1];
}

export {};
