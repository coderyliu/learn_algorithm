// https://leetcode.cn/problems/coin-change/description/

function coinChange(coins: number[], amount: number): number {
  const n = coins.length;
  const MAX = amount + 1;
  // 初始化dp
  const dp = Array.from({ length: n + 1 }, () =>
    Array.from({ length: amount + 1 }, () => 0)
  );
  // 状态转移，首行
  for (let a = 1; a <= amount; a++) {
    dp[0][a] = MAX;
  }

  for (let i = 1; i <= n; i++) {
    for (let a = 1; a <= amount; a++) {
      if (coins[i - 1] > a) {
        // 超过目标金额：不选当前面值i
        dp[i][a] = dp[i - 1][a];
      } else {
        // 选当前面值
        dp[i][a] = Math.min(dp[i - 1][a], dp[i][a - coins[i - 1]] + 1);
      }
    }
  }

  return dp[n][amount] === MAX ? -1 : dp[n][amount];
}

console.log(coinChange([1, 2, 5], 11));

export {};
