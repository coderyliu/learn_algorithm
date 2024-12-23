// 某公司每日销售额记于整数数组 sales，请返回所有 连续 一或多天销售额总和的最大值。
// 要求实现时间复杂度为 O(n) 的算法。

// 示例 1
// 输入: sales = [1, -2, 3, 4, -10, 5]
// 输出: 7
// 解释: 连续一或多天的销售额总和的最大值为 7，即从第 3 天到第 4 天的销售额总和。

// 示例 2
// 输入: sales = [-2, -3, -1]
// 输出: -1
// 解释: 所有连续一或多天的销售额总和都为负数，因此返回 -1。

function maxSales(sales: number[]): number {
  // 动态规划
  // ?本质：最大子数组和
  // * 时间复杂度：O(n)
  // * 空间复杂度：O(n)
  // 动规五部曲：
  // 1. 确定dp数组以及下标的含义：dp[i] 表示以第 i 天为结尾的连续一或多天销售额总和的最大值
  // 2. 确定递推公式：dp[i] = Math.max(dp[i - 1] + sales[i], sales[i])
  // 3. dp数组如何初始化：dp[0] = sales[0]
  // 4. 确定遍历顺序：从前向后遍历
  // 5. 举例推导dp数组：
  const len = sales.length;
  const dp = Array(len).fill(0);
  dp[0] = sales[0];
  for (let i = 1; i < len; i++) {
    dp[i] = Math.max(dp[i - 1] + sales[i], sales[i]);
  }
  return Math.max(...dp);
}

export {};
