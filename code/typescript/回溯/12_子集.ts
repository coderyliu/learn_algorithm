// 求一个字符串的子集
function getSubsets(str: string): string[] {
  const res: string[] = [];
  backTrack([], str, res, 0);
  return res;
}

function backTrack(
  state: string[],
  choices: string,
  res: string[],
  startIndex: number
) {
  res.push([...state].join(""));

  // 遍历所有选择
  for (let i = startIndex; i < choices.length; i++) {
    state.push(choices[i]);
    backTrack(state, choices, res, i + 1);
    state.pop();
  }
}

// 字符串 'abc'的所有子集为：
console.log(getSubsets("abc"));
console.log(getSubsets("abcde"));

export {};
