// https://leetcode.cn/problems/subsets-ii/

// 包含重复元素的子集
function subsetsWithDup(nums: number[]): number[][] {
  const res = new Set<string>();
  backTrack([], nums, res, 0);
  return Array.from(res).map((s) => {
    const arr = s.split(",");
    if (arr.length === 1 && arr[0] === "") return [];
    return arr.map(Number);
  });
}

function backTrack(
  state: number[],
  choices: number[],
  res: Set<string>,
  startIndex: number
) {
  res.add(`${[...state].sort((a, b) => a - b)}`);

  // 遍历所有选择
  for (let i = startIndex; i < choices.length; i++) {
    // 尝试：做出选择，更新状态
    state.push(choices[i]);
    // 递归：进入下一层决策树
    backTrack(state, choices, res, i + 1);
    // 撤销：恢复到之前的状态
    state.pop();
  }
}

console.log(subsetsWithDup([1, 2, 2]));
console.log(subsetsWithDup([0]));
console.log(subsetsWithDup([-1, 2, 1]));

export {};
