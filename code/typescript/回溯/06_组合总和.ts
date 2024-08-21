function combinationSum(candidates: number[], target: number): number[][] {
  const res: number[][] = [];
  // 这时候拿到的res是存在重复的解法的
  backTrack([], candidates, res, target, 0);
  // 去重
  const ret = res.map((arr) => arr.sort()).map((arr) => arr.join("-"));
  const set = new Set(ret);
  const result = Array.from(set).map((item) => item.split("-").map(Number));
  return result;
}

// 回溯 - 无重复元素 - 可以被重复选择
function backTrack(
  state: number[],
  choices: number[],
  res: number[][],
  target: number,
  total: number
) {
  // 判断是否为解
  if (total === target) {
    // 为解，添加到结果集
    res.push([...state]);
    return;
  }

  // 遍历所有选择
  for (let i = 0; i < choices.length; i++) {
    // 剪枝：如果和大于目标值，不继续遍历了
    if (total + choices[i] > target) continue;
    // 尝试：更新状态
    state.push(choices[i]);
    // 开始下一轮选择
    backTrack(state, choices, res, target, total + choices[i]);
    // 回退：恢复到之前的状态
    state.pop();
  }
}

// 回溯 - 无重复元素 - 可以被重复选择 - 优化
function combinationSum2(candidates: number[], target: number): number[][] {
  const res: number[][] = [];
  // 这时候拿到的res是不存在重复的解法的
  // 1. 排序 由小到大
  candidates.sort((a, b) => a - b);
  // 2. 回溯
  backTrackTwo([], candidates, res, target, 0);
  return res;
}

function backTrackTwo(
  state: number[],
  choices: number[],
  res: number[][],
  target: number,
  startIndex: number
) {
  // 判断是否为解
  if (target === 0) {
    // 为解，添加到结果集
    res.push([...state]);
    return;
  }

  // 遍历所有选择
  for (let i = startIndex; i < choices.length; i++) {
    // 剪枝：若子集和超过target, 直接结束循环
    // 数组是已经排序过的，后边元素更大，子集和一定超过 target
    if (target - choices[i] < 0) break;
    // 尝试：更新状态
    state.push(choices[i]);
    // 开始下一轮选择
    // 剪枝：下一轮从 i 开始选择，不能选择之前的元素
    backTrackTwo(state, choices, res, target - choices[i], i);
    // 回退：恢复到之前的状态
    state.pop();
  }
}

// ?回溯 - 存在重复元素 - 不可以被重复选择 - 优化
function combinationSum3(candidates: number[], target: number): number[][] {
  const res: number[][] = [];
  // 这时候拿到的res是不存在重复的解法的
  // 1. 排序 由小到大
  candidates.sort((a, b) => a - b);
  // 2. 回溯
  backTrackThree([], candidates, res, target, 0);
  return res;
}

function backTrackThree(
  state: number[],
  choices: number[],
  res: number[][],
  target: number,
  startIndex: number
) {
  // 判断是否为解
  if (target === 0) {
    // 为解，添加到结果集
    res.push([...state]);
    return;
  }

  // 遍历所有选择
  for (let i = startIndex; i < choices.length; i++) {
    // 剪枝：若子集和超过target, 直接结束循环
    // 数组是已经排序过的，后边元素更大，子集和一定超过 target
    if (target - choices[i] < 0) break;
    // 剪枝：不能选择重复元素
    if (i > startIndex && choices[i] === choices[i - 1]) continue;
    // 尝试：更新状态
    state.push(choices[i]);
    // 开始下一轮选择
    // 剪枝：下一轮从 i + 1 开始选择，不能选择之前的元素 且 不能选择重复元素
    backTrackTwo(state, choices, res, target - choices[i], i + 1);
    // 回退：恢复到之前的状态
    state.pop();
  }
}

export {};
