// 给你两个字符串 word1 和 word2 。
// 请你从 word1 开始，通过交替添加字母来合并字符串。
// 如果一个字符串比另一个字符串长，就将多出来的字母追加到合并后字符串的末尾。
// 返回合并后的字符串。

function mergeAlternately(word1: string, word2: string): string {
  // * 时间复杂度：O(n + m)
  // * 空间复杂度：O(1)
  let res: string = "";
  let i = 0;
  let j = 0;
  while (i < word1.length && j < word2.length) {
    res += `${word1[i]}${word2[j]}`;
    i++;
    j++;
  }
  while (i < word1.length) {
    res += word1[i++];
  }
  while (j < word2.length) {
    res += word2[j++];
  }
  return res;
}

console.log(mergeAlternately("abc", "pqr")); // "apbqcr"
console.log(mergeAlternately("ab", "pqrs")); // "apbqrs"
console.log(mergeAlternately("abcd", "pq")); // "apbqcd"

export {};
