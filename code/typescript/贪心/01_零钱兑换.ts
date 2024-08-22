// 给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount，表示总金额。
// 计算并返回可以凑成总金额所需的 最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1 。
// 你可以认为每种硬币的数量是无限的。

// ?贪心解决零钱兑换是有局限性的，更适合用动态规划来实现,贪心有可能找不到最优解
function coinChange(coins: number[], amount: number): number {
  // coins排序
  coins.sort((a, b) => a - b);
  let i = coins.length - 1;
  let count = 0;
  // 循环进行贪心选择，直到无剩余金额
  while (amount > 0) {
    // 找到小于且最接近剩余金额的硬币
    while (i > 0 && coins[i] > amount) {
      i--;
    }
    // 选择coins[i]
    amount -= coins[i];
    count++;
  }
  // 若未找到可行方案，则返回 -1
  return amount === 0 ? count : -1;
}

export {};
