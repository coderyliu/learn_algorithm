function lengthOfLIS(nums: number[]): number {
  // 动态规划五部曲：
  // 1.确定dp数组（状态数组）和每个位置 meaning: dp[i] 表示到第 i 个元素时，最长递增子序列的长度
  // 2.确定递推公式
  // 3.dp数组初始化
  // 4.确定遍历顺序：从前到后
  // 5.举例论证
  const len = nums.length;
  if (len === 1) return 1;
  if (len === 2) return nums[1] > nums[0] ? 2 : 1;
  const dp = Array.from({ length: len }, () => 1);
  dp[1] = nums[1] > nums[0] ? 2 : 1;
  for (let i = 2; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[j] + 1, dp[i]);
      }
    }
  }
  return Math.max(...dp);
}

export {};
