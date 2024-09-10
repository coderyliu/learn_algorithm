// https://leetcode.cn/problems/restore-ip-addresses

function restoreIpAddresses(s: string): string[] {
  // 回溯
  const res: string[] = [];
  backTrack([], s, 0, res);
  return res;
}

function backTrack(
  state: string[],
  choices: string,
  startIndex: number,
  res: string[]
) {
  if (state.length > 4) return;
  // 是否符合条件
  if (state.length === 4 && startIndex === choices.length) {
    res.push(state.join("."));
    return;
  }

  // 遍历所有选择
  for (let i = startIndex; i < choices.length; i++) {
    // 剪枝
    const num = choices.substr(startIndex, i - startIndex + 1);
    if (Number(num) > 255) break;
    if (num.length > 1 && num[0] === "0") break;

    // 尝试： 选择
    state.push(num);
    // 开始下一轮选择
    backTrack(state, choices, i + 1, res);
    // 回退：撤销选择
    state.pop();
  }
}

console.log(restoreIpAddresses("25525511135"));

export {};
