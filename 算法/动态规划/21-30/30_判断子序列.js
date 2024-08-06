// https://leetcode.cn/problems/is-subsequence/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// ?1.双指针
var isSubsequence = function (s, t) {
  // 定义两个指针，指向s和t的开始
  let i = 0,
    j = 0

  // s和t的长度
  const n = s.length,
    m = t.length

  // 循环，如果s[i]===t[j] i++,j++最后如果s匹配完了，和长度相等，就是t的一个子序列
  while (i < n && j < m) {
    if (s[i] === t[j]) {
      i++
    }
    j++
  }

  return i === n
};

// ?2.dp
const isSubsequence = (s, t) => {
  // s、t的长度
  const [m, n] = [s.length, t.length];
  // dp全初始化为0
  const dp = new Array(m + 1).fill(0).map(x => new Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // 更新dp[i][j]，两种情况
      if (s[i - 1] === t[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = dp[i][j - 1];
      }
    }
  }
  // 遍历结束，判断 dp 右下角的数是否等于s的长度
  return dp[m][n] === m ? true : false;
};