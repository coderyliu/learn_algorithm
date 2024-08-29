// https://leetcode.cn/problems/number-of-longest-increasing-subsequence/description/

function findNumberOfLIS(nums: number[]): number {
  // 动规：
  // 1. 确定dp[i] 表示的含义：dp[i] 表示第 i 个数结尾的最长递增子序列的长度的个数为
  // 2. 确定递推公式：dp[i] = Math.max(dp[i], dp[j] + 1)
  // 3. 确定初始状态：dp[0] = 1
  // 4. 确定遍历顺序：从前到后
  // 5. 举例论证
  // ?这样是最长递增序列的长度的解法
  // const len = nums.length;
  // if (len === 1) return 1;
  // const dp = Array(len).fill(1);
  // dp[1] = nums[1] > nums[0] ? 2 : 1;
  // for (let i = 2; i < len; i++) {
  //   for (let j = 0; j < i; j++) {
  //     if (nums[i] > nums[j]) {
  //       dp[i] = Math.max(dp[i], dp[j] + 1);
  //     }
  //   }
  // }
  // const max = Math.max(...dp);
  // return max
}

export {};
