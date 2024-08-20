// https://leetcode.cn/problems/letter-case-permutation/
// 给定一个字符串 s ，通过将字符串 s 中的每个字母转变大小写，我们可以获得一个新的字符串。
// 返回所有可能得到的字符串集合 。以任意顺序返回输出。

function letterCasePermutation(s: string): string[] {
  const res: string[] = [];
  backTrack([], s, 0, res);
  return res;
}

// 回溯算法 - 每一轮将一个字母转为大写或者小写
function backTrack(
  state: string[],
  choices: string,
  startIndex: number,
  res: string[]
) {
  // 判断是否为解
  if (state.length === choices.length && choices.length === startIndex) {
    // 添加解
    res.push(state.join(""));
  }

  // 剪枝
  if (choices.length - startIndex + state.length < choices.length) return;

  // 遍历所有选择
  for (let i = startIndex; i < choices.length; i++) {
    const current = choices[i];
    // 正常选择
    state.push(current);
    // 进行下一轮选择
    backTrack(state, choices, i + 1, res);
    // 回退：撤销选择，恢复到之前的状态
    state.pop();
    // 字母的时候还需做一次选择
    if (/[a-zA-Z]/.test(current)) {
      state.push(
        current === current.toLowerCase()
          ? current.toUpperCase()
          : current.toLowerCase()
      );
      backTrack(state, choices, i + 1, res);
      state.pop();
    }
  }
}

export {};
