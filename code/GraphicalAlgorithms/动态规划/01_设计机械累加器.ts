// 请设计一个机械累加器，计算从 1、2... 一直累加到目标数值 target 的总和。
// 注意这是一个只能进行加法操作的程序，不具备乘除、if-else、switch-case、for 循环、while 循环，及条件判断语句等高级功能

function mechanicalAccumulator(target: number): number {
  // 方法一：动态规划
  // * 时间复杂度：O(n)
  // * 空间复杂度：O(n)
  // 动规五部曲：
  // 1. 确定dp数组以及下标的含义: dp[i] 表示从 1 累加到 i 的总和
  // 2. 确定递推公式: dp[i] = dp[i - 1] + i
  // 3. dp数组如何初始化: dp[0] = 0, dp[1] = 1
  // 4. 确定遍历顺序: 从前向后遍历
  // 5. 举例推导dp数组:
  // const dp = Array(target + 1).fill(0);
  // dp[0] = 0;
  // dp[1] = 1;
  // for (let i = 2; i <= target; i++) {
  //   dp[i] = dp[i - 1] + i;
  // }
  // return dp[target];

  // 方法二：递归
  // * 时间复杂度：O(n)
  // * 空间复杂度：O(n)
  // if (target === 1) return 1;
  // return mechanicalAccumulator(target - 1) + target;

  // 方法三：暴力
  // * 时间复杂度：O(n)
  // * 空间复杂度：O(1)
  // let sum = 0;
  // for (let i = 1; i <= target; i++) {
  //   sum += i;
  // }
  // return sum;

  // 方法四：数学公式
  // * 时间复杂度：O(1)
  // * 空间复杂度：O(1)
  return ((1 + target) * target) / 2;
}

console.log(mechanicalAccumulator(10)); // 55

export {};
