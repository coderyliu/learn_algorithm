// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

function climbStairs(n: number): number {
  // 1. 此问题可拆解为回溯：选择：每次可选择 1 或 2
  // 2. 暴力递归
  // 3. 记忆化搜索
  // 4. 动态规划

  // 暴力递归 - O(2^n)
  // !指数阶级增长，在递归的过程中可以发现存在重复子问题，可以进行优化
  // const dfs = (i: number) => {
  //   if (i === 1 || i === 2) return i;
  //   return dfs(i - 1) + dfs(i - 2);
  // };
  // return dfs(n);

  // !记忆化搜索 - 优化重复子问题(剪枝)
  // const member: number[] = Array(n + 1).fill(-1);
  // const dfs = (i: number, member: number[]) => {
  //   if (i === 1 || i === 2) return i;
  //   if (member[i] !== -1) return member[i];
  //   const count = dfs(i - 1, member) + dfs(i - 2, member);
  //   member[i] = count;
  //   return count;
  // };
  // return dfs(n, member);

  // !递归与记忆化搜索、回溯都是“由顶到底”进行递归，直至已经知道最小子问题的答案后，开始回溯逐层收集子问题的解，构建出原始问题的解。
  // !动态规划是“由底到顶”，从最小子问题的解开始，不断迭代构建原始问题的解
  const dp: number[] = Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

export {};
