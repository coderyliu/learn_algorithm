// https://leetcode.cn/problems/palindromic-substrings/description/

function countSubstrings(s: string): number {
  // 记录所有可能的回文串
  const res = getAllContiguousSubstrings(s);
  // 统计回文串
  let count = 0;
  for (const str of res) {
    if (isPalindrome(str) && str.length > 0) count++;
  }
  return count;
}

// !回溯得不到连续的子串
function backTrack(
  state: string[],
  choices: string,
  startIndex: number,
  res: string[]
) {
  res.push(state.join(""));

  // 遍历所有选择
  for (let i = startIndex; i < choices.length; i++) {
    // 做出选择
    state.push(choices[i]);
    // 进行下一轮选择
    backTrack(state, choices, i + 1, res);
    // 撤销选择
    state.pop();
  }
}

// 判断一个字符串是否是回文串
function isPalindrome(s: string): boolean {
  let l = 0;
  let r = s.length - 1;
  while (l <= r) {
    if (s[l] !== s[r]) return false;
    l++;
    r--;
  }
  return true;
}

console.log(countSubstrings("abc"));
console.log(countSubstrings("aaa"));

// * 得到连续的子串
function getAllContiguousSubstrings(s: string): string[] {
  const substrings: string[] = [];

  for (let start = 0; start < s.length; start++) {
    for (let end = start + 1; end <= s.length; end++) {
      substrings.push(s.substring(start, end));
    }
  }

  return substrings;
}

console.log(getAllContiguousSubstrings("abc"));
console.log(getAllContiguousSubstrings("aaa"));

export {};
