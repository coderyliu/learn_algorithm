// 你是一个专业的小偷，计划偷窃沿街的房屋。
// 每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
// 给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。

function rob(nums: number[]): number {
  // dp问题五步解：
  // 1. 确定dp数组（dp[i]表示前i间房屋能偷窃到的最高金额）
  // 2. 确定递推公式：dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  // 3. dp数组初始化
  // 4. 确定遍历顺序：由前到后
  // 5. 举例推导dp数组
  const len = nums.length;
  if (len === 1) return nums[0];
  if (len === 2) return Math.max(nums[0], nums[1]);
  const dp = Array.from({ length: len }, (_, i) => nums[i]);
  dp[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < len; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }

  return dp[len - 1] > dp[len - 2] ? dp[len - 1] : dp[len - 2];
}

export {};
