// 一个专业的小偷，计划偷窃一个环形街道上沿街的房屋，每间房内都藏有一定的现金。
// 这个地方所有的房屋都围成一圈 ，这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。
// 给定一个代表每个房屋存放金额的非负整数数组 nums ，请计算 在不触动警报装置的情况下 ，今晚能够偷窃到的最高金额。

function rob(nums: number[]): number {
  // dp五步曲：
  // 1. 确定dp数组（和状态）以及下标含义：dp[i]表示前i间房屋能偷窃到的最高金额
  // 2. 确定递推公式：dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
  // 3. 初始化dp数组
  // 4. 确定遍历顺序：从前往后遍历
  // 5. 举例推导dp数组：
  // !环状房屋：拆解为两个子问题：1. 偷窃 1 到 i 间房屋，2. 偷窃 0 到 i- 1 间房屋
  // !最后比较1 和 2 的结果

  const len = nums.length;
  if (len === 1) return nums[0];
  if (len === 2) return Math.max(nums[0], nums[1]);
  // 偷窃 1 到 i 间房屋
  const p1 = Array.from({ length: len }, () => 0);
  p1[0] = 0;
  p1[1] = nums[1];
  for (let i = 2; i < len; i++) {
    p1[i] = Math.max(p1[i - 1], p1[i - 2] + nums[i]);
  }
  const maxP1 = p1[len - 1];

  // 偷窃 0 到 i- 1 间房屋
  const p2 = Array.from({ length: len }, () => 0);
  p2[0] = nums[0];
  p2[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < len - 1; i++) {
    p2[i] = Math.max(p2[i - 1], p2[i - 2] + nums[i]);
  }
  const maxP2 = p2[len - 2];
  return Math.max(maxP1, maxP2);
}

export {};
