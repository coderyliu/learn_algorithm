function longestCommonPrefix(strs: string[]): string {
  // 最长公共前缀:暴力解法
  let res = "";
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== strs[0][i]) return res;
    }

    res += strs[0][i];
  }

  return res;
}

export {};
