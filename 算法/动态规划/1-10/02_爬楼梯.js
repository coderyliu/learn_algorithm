// https://leetcode-cn.com/problems/climbing-stairs/
// 动规五部曲
// 1-确定dp数组
// 一维数组dp,来记录不同楼层的状态
// dp[i]表示爬到第i层楼梯，有dp[i]种方法

// 2-确定递推公式
// dp[i]=dp[i-1]+dp[i-2]

// 3-dp数组初始化
// dp[0]=0  dp[1]=1  dp[2]=2

// 4-确定遍历顺序
// 从前向后遍历

// 5-列举dp数组

var climbStairs = function (n) {
  const dp = [0, 1, 2]
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
};