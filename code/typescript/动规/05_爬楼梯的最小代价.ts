// 给定一个楼梯,你每步可以上 1 阶或者 2 阶,每一阶楼梯上都贴有一个非负整数,表示你在该台阶所需要付出的代价。
// 给定一个非负整数数组cost,其中cost[i]表示在第 i 个台阶需要付出的代价,cost[0]为地面(起始点)。请计算最少需要付出多少代价才能到达顶部?

// !最优子结构
// ?原问题的最优解是由子问题的最优解组成的

/* 爬楼梯最小代价：动态规划 */
function minCostClimbingStairsDP(cost: number[]) {
  const n = cost.length - 1;
  if (n === 1 || n === 2) {
    return cost[n];
  }
  // 初始化 dp 表，dp[i]表示爬到 i 阶时的最小代价
  const dp = new Array(n + 1);
  // 初始状态：预设最小子问题的解
  dp[1] = cost[1];
  dp[2] = cost[2];
  // 状态转移：从较小子问题逐步求解较大子问题
  for (let i = 3; i <= n; i++) {
    // 确定递推公式
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
  }
  return dp[n];
}

export {};
