// https://leetcode.cn/problems/maximum-length-of-repeated-subarray/description/

function findLength(nums1: number[], nums2: number[]): number {
  // 方法：动态规划
  // 动规五部曲：
  // 1. 确定dp数组以及下标的含义：dp[i][j] 表示以nums1[i]和nums2[j]结尾的最长公共子数组的长度
  // 2. 确定递推公式：
  // 如果nums1[i] === nums2[j]，则dp[i][j] = dp[i-1][j-1] + 1
  // 否则，dp[i][j] = 0
  // 3. dp数组初始化：dp[i][0] = 0 dp[0][j] = 0
  // 4. 确定遍历顺序：由前向后遍历
  // 5. 举例推导dp数组
  let res = 0;
  const len1 = nums1.length;
  const len2 = nums2.length;
  const dp = Array(len1 + 1)
    .fill(0)
    .map(() => Array(len2 + 1).fill(0));
  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      // *注意：这里不同于最长公共子序列，当nums1[i] !== nums2[j]时，dp[i][j] = 0
      // *可以理解为子数组就是以nums1[i]和nums2[j]结尾的，所以当nums1[i] !== nums2[j]时，dp[i][j] = 0
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        res = Math.max(res, dp[i][j]);
      }
    }
  }
  return res;
}

console.log(findLength([1, 2, 3, 2, 1], [3, 2, 1, 4, 7])); // 3
console.log(findLength([0, 1, 2, 3, 4], [1, 2, 3, 4, 0])); // 4
console.log(findLength([0, 0, 0, 0, 0], [0, 0, 0, 0, 0])); // 5

export {};
