// 给定一个正整数 n ，将其拆分为 k 个正整数，并使这些整数的乘积最大化。
// 返回你可以获得的最大乘积。

function integerBreak(n: number): number {
  // 动态规划
  // 动规五部曲：
  // 1. 确定dp数组以及下标的含义： dp[i] 表示整数 i 的最大乘积
  // 2. 确定递推公式： dp[i] = Math.max(dp[i], dp[i - j] * j, (i - j) * j)
  // * dp[i] 表示整数 i 的最大乘积
  // * (i - j) * j 表示拆分成 i - j 和 j 两个数
  // * dp[i - j] * j 表示拆分成两个及两个以上的乘积
  // 3. dp数组如何初始化： dp[2] = 1
  // 4. 确定遍历顺序： 从前往后
  // 5. 举例推导dp数组

  const dp = Array(n + 1).fill(0);
  dp[2] = 1;
  for (let i = 3; i <= n; i++) {
    for (let j = 1; j <= i / 2; j++) {
      dp[i] = Math.max(dp[i], dp[i - j] * j, (i - j) * j);
    }
  }
  return dp[n];
}

console.log(integerBreak(2)); // 1
console.log(integerBreak(10)); // 36

export {};
