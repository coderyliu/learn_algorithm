function letterCombinations(digits: string): string[] {
  const res: string[] = [];
  const choices = [
    "",
    "",
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqrs",
    "tuv",
    "wxyz"
  ];
  if (!digits.length) return [];
  if (digits.length === 1) return choices[digits[0]].split("");
  backTrack([], choices, digits, res, 0);
  return res;
}

function backTrack(
  state: string[],
  choices: string[],
  target: string,
  res: string[],
  startIndex: number
) {
  // 判断是否为解
  if (state.length === target.length) {
    res.push(state.join(""));
    return;
  }

  // 遍历所有选择
  for (const v of choices[target[startIndex]]) {
    // 尝试：做选择
    state.push(v);
    // 开始下一轮选择
    backTrack(state, choices, target, res, startIndex + 1);
    // 回退：撤销选择
    state.pop();
  }
}

export {};
