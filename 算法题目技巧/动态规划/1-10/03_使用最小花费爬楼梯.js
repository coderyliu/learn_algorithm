// https://leetcode-cn.com/problems/min-cost-climbing-stairs/

// 动规五部曲
// 1-确定dp数组及其下标含义
// 一维dp数组,dp[i]表示到达第n个台阶的最少体力

// 2-确定递推公式
// 有两个途径得到dp[i],dp[i-1]和dp[i-2]
// dp[i]=Math.min(dp[i-1],dp[i-2])+cost[i]

// 3-dp数组初始化
// dp[0]=cost[0]  dp[1]=cost[1]

// 4-确定遍历顺序
// 从前向后遍历

function minCostClimbingStairs(cost){
  const dp=[cost[0],cost[1]]

  for(let i=2;i<cost.length;i++){
    dp[i]=Math.min(dp[i-1],dp[i-2])+cost[i]
  }

  return Math.min(dp[cost.length-1],dp[cost.length-2])
}