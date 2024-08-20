// https://leetcode.cn/problems/permutations/?envType=study-plan-v2&envId=top-interview-150
// 给定一个不含重复数字的数组 nums ，返回其所有可能的全排列 。你可以按任意顺序返回答案。

function permute(nums: number[]): number[][] {
  // 回溯
  const res: number[][] = [];
  backTrack([], nums, Array(nums.length).fill(false), res);
  return res;
}

// 回溯算法 - 全排列I - 无重复元素
function backTrack(
  state: number[], // 状态
  choices: number[], // 所有选择
  selected: boolean[], // 选择过的元素
  res: number[][] // 解集
) {
  // 判断是否为解
  if (state.length === choices.length) {
    // 记录解
    res.push([...state]);
    // 不再继续搜索
    return;
  }
  // 遍历所有选择
  choices.forEach((choice, i) => {
    // 剪枝：不允许重复选择元素(是否符合条件)
    if (!selected[i]) {
      // 尝试：做出选择，更新状态
      selected[i] = true;
      state.push(choice);
      // 进行下一轮选择
      backTrack(state, choices, selected, res);
      // 回退：撤销选择，恢复到之前的状态
      state.pop();
      selected[i] = false;
    }
  });
}

export {};
