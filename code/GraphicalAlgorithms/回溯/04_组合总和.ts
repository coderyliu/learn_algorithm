// 组合总和

// 1. 无重复元素、元素可重复使用
function combinationSum(candidates: number[], target: number): number[][] {
  const res: number[][] = [];

  // 回溯
  function backTrack(
    state: number[],
    choices: number[],
    target: number,
    res: number[][],
    start: number
  ) {
    // 判断是否符合条件
    if (target === 0) {
      // 符合条件，将结果加入到结果集中
      res.push([...state]);
      return;
    }

    // 遍历所有选择
    for (let i = start; i < choices.length; i++) {
      // 剪枝: 当选择大于目标值时，直接跳过
      if (choices[i] > target) continue;

      // 尝试：作出选择
      state.push(choices[i]);
      // 开始下一轮选择
      backTrack(state, choices, target - choices[i], res, i);
      // 回退：撤销选择
      state.pop();
    }
  }
  backTrack([], candidates, target, res, 0);
  return res;
}

console.log(combinationSum([2, 3, 6, 7], 7)); // [[2, 2, 3], [7]]
console.log(combinationSum([2, 3, 5], 8)); // [[2, 2, 2, 2], [2, 3, 3], [3, 5]]
console.log(combinationSum([2], 1)); // []

// 2. 有重复元素、元素不可重复使用
function combinationSum2(candidates: number[], target: number): number[][] {
  // 排序
  candidates.sort((a, b) => a - b);
  const res = new Set<string>();

  // 回溯
  function backTrack(
    state: number[],
    choices: number[],
    target: number,
    res: Set<string>,
    start: number
  ) {
    // 判断是否符合条件
    if (target === 0) {
      // 符合条件，将结果加入到结果集中
      res.add(JSON.stringify(state));
      return;
    }

    // 遍历所有选择
    for (let i = start; i < choices.length; i++) {
      // 剪枝: 当选择大于目标值时，直接跳过
      if (choices[i] > target) continue;

      // 尝试：作出选择
      state.push(choices[i]);
      // 开始下一轮选择
      backTrack(state, choices, target - choices[i], res, i + 1);
      // 回退：撤销选择
      state.pop();
    }
  }
  backTrack([], candidates, target, res, 0);
  return Array.from(res).map((item) => JSON.parse(item));
}

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8)); // [[1, 1, 6], [1, 2, 5], [1, 7], [2, 6]]
console.log(combinationSum2([2, 5, 2, 1, 2], 5)); // [[1, 2, 2], [5]]

export {};
