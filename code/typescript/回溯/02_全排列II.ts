// https://leetcode.cn/problems/permutations-ii/description/
// 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。

function permuteUnique(nums: number[]): number[][] {
  // 回溯
  const res: number[][] = [];
  backTrack([], nums, Array(nums.length).fill(false), res);
  return res;
}

// 回溯算法 - 全排列II - 有重复元素
function backTrack(
  state: number[], // 状态
  choices: number[], // 所有选择
  selected: boolean[], // 选择过的元素
  res: number[][] //  解集
) {
  // 判断是否为解
  if (state.length === choices.length) {
    // 记录解
    res.push([...state]);
    // 不再继续搜索
    return;
  }

  // 某一轮选择中，保证多个相等的元素仅被选择一次
  const set = new Set();
  // 遍历所有选择
  choices.forEach((choice, i) => {
    // 剪枝：不允许重复选择元素 且 不允许重复选择相等的元素(是否符合条件)
    if (!selected[i] && !set.has(choice)) {
      // 尝试：做出选择，更新状态
      state.push(choice);
      selected[i] = true;
      set.add(choice);
      // 进行下一轮选择
      backTrack(state, choices, selected, res);
      // 回退：撤销选择，恢复到之前的状态
      state.pop();
      selected[i] = false;
    }
  });
}

export {};
