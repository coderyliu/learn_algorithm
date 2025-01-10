function canPartition(nums: number[]): boolean {
  const res: number[][] = [];
  backTrack([], nums, res, 0);
  console.log(res);
  return false;
}

// 子集 - 不需要连续
function backTrack(
  state: number[],
  choice: number[],
  res: number[][],
  start: number
) {
  // 记录解
  res.push([...state]);

  // 遍历所有选择
  for (let i = start; i < choice.length; i++) {
    // 尝试：做出选择，更新状态
    state.push(choice[i]);
    // 开始下一轮选择
    backTrack(state, choice, res, i + 1);
    // 回退：
    state.pop();
  }
}

export {};
