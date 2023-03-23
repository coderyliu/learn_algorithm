/**
 * @param {number} n
 * @return {number}
 */
// ?动态规划
var climbStairs = function (n) {
  // todo 动规五部曲
  // 1.确定dp[i]及其下标 i的含义
  // dp[i]表示i阶楼梯的方法
  const dp=new Array(n)

  // 2.确定递推公式
  // todo dp[i]=dp[i-1]+dp[i-2]

  // 3.dp数组初始化
  dp[0]=0
  dp[1]=1
  dp[2]=2

  // 4.遍历
  for(let i=3;i<=n;i++){
    dp[i]=dp[i-1]+dp[i-2]
  }

  return dp[n]
};