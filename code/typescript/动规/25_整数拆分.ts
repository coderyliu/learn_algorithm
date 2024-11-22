// https://leetcode.cn/problems/integer-break/description/

function integerBreak(n: number): number {
  // 动态规划五部曲:
  // 1. 确定dp数组以及下标的含义: dp[i] 表示整数 i 的最大乘积
  // 2. 确定递推公式： dp[i] = Math.max(dp[i], dp[i - j] * j, (i - j) * j)
  // * dp[i] 表示整数 i 的最大乘积
  // * (i - j) * j 表示拆分成 i - j 和 j 两个数
  // * dp[i - j] * j 表示拆分成两个及两个以上的乘积
  // 3. dp数组如何初始化： dp[2] = 1
  // 4. 确定遍历顺序： 从前往后
  // 5. 举例推导dp数组

  // 创建dp数组
  const dp = new Array(n + 1).fill(0);
  // 初始化dp
  dp[2] = 1;
  // 遍历
  for (let i = 3; i <= n; i++) {
    for (let j = 1; j <= i / 2; j++) {
      dp[i] = Math.max(dp[i], dp[i - j] * j, (i - j) * j);
    }
  }
  return dp[n];
}

console.log(integerBreak(2)); // 1 --> 1 * 1
console.log(integerBreak(10)); // 36 --> 3 * 3 * 4

export {};
