// https://leetcode.cn/problems/next-permutation/

/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
  // ?方法一：先找出所有排列组合，再找出当前解的下一个解 - 耗时超时
  // const res: number[][] = [];
  // const numsCopy = [...nums].sort((a, b) => a - b);
  // const selected = Array(nums.length).fill(false);
  // backTrack([], numsCopy, res, selected);
  // const originStr = nums.join("");
  // const idx = res.findIndex((item) => originStr === item.join(""));
  // let num: number[] = [];
  // if (idx === res.length - 1) {
  //   num = res[0];
  // } else {
  //   num = res[idx + 1];
  // }
  // for (let i = 0; i < num.length; i++) {
  //   nums[i] = num[i];
  // }
  // ?方法二：
}

function backTrack(
  state: number[],
  choices: number[],
  res: number[][],
  selected: boolean[]
) {
  // 判断是否满足条件
  if (state.length === choices.length) {
    res.push([...state]);
    return;
  }

  // 每一轮不能选择重复的元素
  const set = new Set();
  // 遍历所有选择
  for (let i = 0; i < choices.length; i++) {
    // 剪枝：已经被选择过的选择，跳过
    if (selected[i] || set.has(choices[i])) continue;
    // 尝试：做出选择,记录状态
    state.push(choices[i]);
    selected[i] = true;
    set.add(choices[i]);
    // 开始下一轮选择
    backTrack(state, choices, res, selected);
    // 回退：撤销选择，恢复到之前的状态
    state.pop();
    selected[i] = false;
  }
}

// nextPermutation([1, 1, 5]);
nextPermutation([3, 2, 1]);

export {};
