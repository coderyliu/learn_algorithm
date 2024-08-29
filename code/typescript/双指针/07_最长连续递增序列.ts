// https://leetcode.cn/problems/longest-continuous-increasing-subsequence/

function findLengthOfLCIS(nums: number[]): number {
  // 双指针
  let l = 0;
  let r = 0;
  let res = 0;
  while (r < nums.length) {
    if (nums[r + 1] > nums[r]) {
      r++;
      res = Math.max(res, r - l + 1);
    } else {
      l = r + 1;
      r++;
    }
  }

  return res === 0 ? 1 : res;

  // 动态规划
  // 动规五部曲：
  // 1. 确定dp[i]的含义：dp[i]表示以nums[i]结尾的最长递增子序列的长度
  // 2. 确定初始值：dp[0] = 1 dp[1] = nums[1] > nums[0] ? 2 : 1
  // 3. 确定递推公式： nums[i] > nums[i - 1] ? dp[i] =  dp[i] + 1 : 1
  // 4. 确定遍历顺序：从左到右遍历
  // 5. 举例推导dp数组
  // const len = nums.length;
  // if (len === 1) return 1;
  // if (len === 2) return nums[1] > nums[0] ? 2 : 1;
  // const dp = Array.from({ length: len }, () => 1);
  // dp[1] = nums[1] > nums[0] ? 2 : 1;
  // for (let i = 2; i < len; i++) {
  //   dp[i] = nums[i] > nums[i - 1] ? dp[i - 1] + 1 : 1;
  // }

  // return Math.max(...dp);
}

export {};
