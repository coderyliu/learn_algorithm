// https://leetcode.cn/problems/subsets/

function subsets(nums: number[]): number[][] {
  const res: number[][] = [];
  backTrack([], nums, res, 0);
  return res;
}

function backTrack(
  state: number[],
  choices: number[],
  res: number[][],
  startIndex: number
) {
  res.push([...state]);

  // 遍历所有选择
  for (let i = startIndex; i < choices.length; i++) {
    state.push(choices[i]);
    backTrack(state, choices, res, i + 1);
    state.pop();
  }
}

console.log(subsets([1, 2, 3]));

export {};
