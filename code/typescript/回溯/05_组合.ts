// 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。
// 你可以按任何顺序返回答案。

function combine(n: number, k: number): number[][] {
  const res: number[][] = [];
  const choices = Array.from({ length: n }, (_, i) => i + 1);
  backTrack([], choices, res, k, 0);

  return res;
}

// 回溯 - 无重复元素
function backTrack(
  state: number[],
  choices: number[],
  res: number[][],
  k: number,
  startIndex: number
) {
  // 判断是否为解
  if (state.length === k) {
    // 为解，添加到结果集
    res.push([...state]);
    return;
  }

  // 遍历所有选择
  for (let i = startIndex; i < choices.length; i++) {
    // 尝试：更新状态
    state.push(choices[i]);
    // 开始下一轮选择
    // 剪支，不能重复选择元素,下一轮从 i + 1 开始选择
    backTrack(state, choices, res, k, i + 1);
    // 回退：恢复到之前的状态
    state.pop();
  }
}

export {};
