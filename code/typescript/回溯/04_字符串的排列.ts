// https://leetcode.cn/problems/MPnaiL/description/
// 给定两个字符串 s1 和 s2，写一个函数来判断 s2 是否包含 s1 的某个变位词。
// 换句话说，第一个字符串的排列之一是第二个字符串的 子串 。

// !这种做法是可行的，会超出时间限制
function checkInclusion(s1: string, s2: string): boolean {
  // 回溯：s1的所有排列情况
  const res: string[] = [];
  backTrack([], s1, Array(s1.length).fill(false), res);
  // 遍历res的全排列，判断s2是否包含s1的排列情况
  for (const str of res) {
    if (s2.indexOf(str) !== -1) return true;
  }

  return false;
}

// 回溯算法 - 全排列 - 有重复元素
function backTrack(
  state: string[],
  choices: string,
  selected: boolean[],
  res: string[]
) {
  // 判断是否为解
  if (state.length === choices.length) {
    // 记录解
    res.push(state.join(""));
    // 不再继续搜索
    return;
  }

  const set = new Set();
  // 遍历所有选择
  for (let i = 0; i < choices.length; i++) {
    // 剪枝：是否符合情况
    if (!selected[i] && !set.has(choices[i])) {
      // 尝试：做出选择，更新状态
      state.push(choices[i]);
      selected[i] = true;
      set.add(choices[i]);
      // 进行下一轮选择
      backTrack(state, choices, selected, res);
      // 回退：撤销选择，恢复到之前的状态
      state.pop();
      selected[i] = false;
    }
  }
}

export {};
