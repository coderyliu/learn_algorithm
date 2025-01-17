// 给你字符串 s 和整数 k 。
// 请返回字符串 s 中长度为 k 的单个子字符串中可能包含的最大元音字母数。
// 英文元音字母为 'a', 'e', 'i', 'o', 'u' 。

function maxVowels(s: string, k: number): number {
  // 滑动窗口 + 哈希 - 超出时间限制
  // * 时间复杂度：O(n * k)
  // * 空间复杂度：O(1)
  const set = new Set(["a", "e", "i", "o", "u"]);
  let l = 0;
  let r = k - 1;
  let maxCount = 0;
  while (r < s.length) {
    const subStr = s.slice(l, r + 1);
    let count = 0;
    for (const char of subStr) {
      if (set.has(char)) {
        count++;
      }
    }
    maxCount = Math.max(maxCount, count);
    l++;
    r++;
  }
  return maxCount;
}

console.log(maxVowels("abciiide", 3)); // 3
console.log(maxVowels("aeiou", 2)); // 2
console.log(maxVowels("leetcode", 3)); // 2

export {};
