// https://leetcode.cn/problems/longest-substring-with-at-least-k-repeating-characters/

function longestSubstring(s: string, k: number): number {
  // 方法一：暴力 - 超时
  // 1. 求出字符串的所有子串
  // 2. 判断子串是否满足至少有k个重复字符
  // 3. 返回满足条件的最长子串长度
  const subStrs = getSubsequence(s);
  let maxLen = 0;
  for (const subStr of subStrs) {
    if (isAtLeastK(subStr, k)) {
      maxLen = Math.max(maxLen, subStr.length);
    }
  }

  return maxLen;
}

// 获取字符串的所有子串 - 按照顺序
function getSubsequence(s: string): string[] {
  const res: string[] = [];
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      res.push(s.slice(i, j));
    }
  }

  return res;
}

// 判断子串是否满足至少有k个重复字符
function isAtLeastK(subStr: string, k: number): boolean {
  const map = new Map();
  for (const char of subStr) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  for (const [key, value] of map) {
    if (value < k) return false;
  }

  return true;
}

console.log(longestSubstring("aaabb", 3)); // 3
console.log(longestSubstring("ababbc", 2)); // 5

export {};
