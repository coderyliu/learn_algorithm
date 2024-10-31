// https://leetcode.cn/problems/qing-wa-tiao-tai-jie-wen-ti-lcof/

// 青蛙跳台阶问题
function numWays(num: number): number {
  // ?和爬楼梯问题一样
  // 方法：DFS、记忆化递归、DP
  // 爬楼梯问题：https://leetcode.cn/problems/climbing-stairs/
  const dp = Array(num + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= num; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % (Math.pow(10, 9) + 7);
  }
  return dp[num];
}

console.log(numWays(2));
console.log(numWays(7));

export {};
