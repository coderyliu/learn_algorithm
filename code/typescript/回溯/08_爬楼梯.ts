// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

function climbStairs(n: number): number {
  // ?此问题可拆解为回溯：选择：每次可选择 1 或 2
  const res: number[] = [0];
  const choices: number[] = [1, 2];
  backTrack(0, choices, n, res);
  return res[0];
}

function backTrack(state: number, choices: number[], n: number, res: number[]) {
  // 判断是否为解
  if (state === n) {
    res[0]++;
    return;
  }

  // 遍历所有选择
  for (const v of choices) {
    // 剪枝
    if (state + v > n) continue;
    // 开始下一轮选择
    backTrack(state + v, choices, n, res);
  }
}

export {};
