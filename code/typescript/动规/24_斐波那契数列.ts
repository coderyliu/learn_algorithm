// 斐波那契数列

function fib(n: number): number {
  // 递归 - 超时
  // *时间复杂度 O(2^n)
  // *空间复杂度 O(n)
  // if (n === 0) return 0;
  // if (n === 1) return 1;
  // return fib(n - 1) + fib(n - 2);

  // 动态规划
  // *时间复杂度 O(n)
  // *空间复杂度 O(n)
  const dp: number[] = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

console.log(fib(10));

export {};
