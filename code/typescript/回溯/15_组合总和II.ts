// https://leetcode.cn/problems/combination-sum-ii/description/

function combinationSum2(candidates: number[], target: number): number[][] {
  // 回溯：有重复元素但是不能重复选择
  const res: number[][] = [];
  // 排序
  candidates.sort((a, b) => a - b);
  // 回溯
  backTrack([], candidates, res, target, 0);
  return res;
}

function backTrack(
  state: number[],
  choices: number[],
  res: number[][],
  target: number,
  startIndex: number
) {
  // 判断是否符合条件
  if (target === 0) {
    res.push([...state]);
    return;
  }

  // 遍历所有选择
  for (let i = startIndex; i < choices.length; i++) {
    // 剪枝一： 当前元素大于目标值，结束循环
    // 数组是已经排序过的，后边元素更大，子集和一定超过 target
    if (target - choices[i] < 0) break;
    // 剪枝二: 如果该元素与左边元素相等，说明该搜索分支重复，直接跳过
    if (i > startIndex && choices[i] === choices[i - 1]) continue;
    // 尝试：记录状态
    state.push(choices[i]);
    // 开始下一轮选择
    // 剪枝三：不能重复选择元素
    backTrack(state, choices, res, target - choices[i], i + 1);
    // 回退：恢复到之前的状态
    state.pop();
  }
}

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));

export {};
