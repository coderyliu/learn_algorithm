// https://leetcode.cn/problems/longest-common-subsequence/

function longestCommonSubsequence(text1: string, text2: string): number {
  // *这种解法是错误的，对于text1中的子序列是可以删除其中的字符的，来满足text2是否是其中的子序列
  // 暴力解法：
  // 1. 求出text1的所有子序列
  // 2. 求出text2的所有子序列
  // 3. 找出最长的公共子序列
  // const text1Subsequence = getSubsequence(text1);
  // const text2Subsequence = getSubsequence(text2);
  // let maxLength = 0;
  // for (const item1 of text1Subsequence) {
  //   for (const item2 of text2Subsequence) {
  //     if (item1 === item2) maxLength = Math.max(maxLength, item1.length);
  //   }
  // }
  // return maxLength;

  // * 动态规划
  // 动规五步曲：
  // 1. 确定dp数组及其下标的含义：dp[i][j]表示text1[0, i]和text2[0, j]的最长公共子序列的长度
  // 2. 确定递推公式：
  // 2.1 如果text1[i] === text2[j]，则dp[i][j] = dp[i-1][j-1] + 1
  // 2.2 如果text1[i] !== text2[j]，则dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
  // 3. dp数组初始化：dp[0, i] = 0 dp[j, 0] = 0
  // 4. 确定遍历顺序：由前向后遍历
  // 5. 举例推导dp
  const t1Len = text1.length;
  const t2Len = text2.length;
  const dp = Array.from({ length: t1Len + 1 }, () => Array(t2Len + 1).fill(0));
  for (let i = 1; i <= t1Len; i++) {
    for (let j = 1; j <= t2Len; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
      }
    }
  }

  return dp[t1Len][t2Len];
}

// * 获取字符串的所有子序列(子集) - 按照顺序
const getSubsequence = (str: string): string[] => {
  const res: string[] = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      res.push(str.slice(i, j));
    }
  }

  return res;
};

console.log(longestCommonSubsequence("abcde", "ace"));
console.log(longestCommonSubsequence("abc", "abc"));
console.log(longestCommonSubsequence("abc", "def"));

export {};
