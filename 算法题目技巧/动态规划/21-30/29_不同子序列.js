// https://leetcode.cn/problems/distinct-subsequences/solution/js-dong-tai-gui-hua-jian-dan-yi-dong-by-jsyt/

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
  // 1.确定dp[i][j]代表什么，dp[i][j]表示s[0-i]与t[0-j]相等的个数
  let dp=new Array(s.length+1).fill(0).map(i=>new Array(t.length+1).fill(0))

  // 2.dp数组初始化
  for(let i=0;i<s.length;i++) dp[i][0]=1

  // 3.递推公式
  // dp[i][j]=dp[i-1][j]+dp[i-1][j-1]

  // 4.遍历
  for(let i=1;i<=s.length;i++){
    for(let j=1;j<=t.length;j++){
      if(s[i-1]===t[j-1]){
        dp[i][j]=dp[i-1][j-1]+dp[i-1][j]
      }else{
        dp[i][j]=dp[i-1][j]
      }
    }
  }

  return dp[s.length][t.length]
};