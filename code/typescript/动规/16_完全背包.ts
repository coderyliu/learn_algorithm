// 完全背包问题(动态规划经典题目)
// 给定 n 个物品，第 i 个物品的重量为 wgt[i - 1]、价值为 val[i - 1]，和一个容量为 cpt 的背包。每个物品可以重复放入，问在限定背包容量下能放入物品的最大价值。

// !区别于01背包问题，在完全背包中，每个物品可以重复放入
// 在 0-1 背包问题中，每种物品只有一个，因此将物品 i 放入背包后，只能从前 i 个物品中选择。
// 在完全背包问题中，每种物品的数量是无限的，因此将物品 i 放入背包后，仍可以从前 i 个物品中选择。

// ?解题重点：对于每个物品都有放入和不放入两种决策
// ?状态转移方程：dp[i][c] = Math.max(dp[i - 1][c], dp[i][c - wgt[i  -1]] + val[i - 1])
// 对应两种状态: 其中 i 为物品的索引，c 为背包容量
// 1. 不放入第 i 个物品，dp[i][c] = dp[i - 1][c]
// 2. 放入第 i 个物品，dp[i][c] = dp[i][c - wgt[i - 1]] + val[i - 1]

// 动态规划
function unboundedKnapsackDP(
  wgt: number[],
  val: number[],
  cpt: number
): number {
  const n = wgt.length;
  const dp = Array.from({ length: n + 1 }, () =>
    Array.from({ length: cpt + 1 }, () => 0)
  );
  for (let i = 1; i <= n; i++) {
    for (let c = 1; c <= cpt; c++) {
      if (wgt[i - 1] > c) {
        // 不放入
        dp[i][c] = dp[i - 1][c];
      } else {
        // 放入
        dp[i][c] = Math.max(dp[i - 1][c], dp[i][c - wgt[i - 1]] + val[i - 1]);
      }
    }
  }

  return dp[n][cpt];
}

const wgt = [2, 3, 5, 7];
const val = [1, 5, 8, 9];
const cpt = 10;
console.log(unboundedKnapsackDP(wgt, val, cpt));

export {};
