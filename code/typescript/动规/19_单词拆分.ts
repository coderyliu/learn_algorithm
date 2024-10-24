// https://leetcode.cn/problems/word-break/solutions/2256918/tsdphashxiang-xi-zhu-shi-by-while-7-amtv/

function wordBreak(s: string, wordDict: string[]): boolean {
  // 方法：动态规划 + 哈希表
  // 动规五部曲：
  // 1. 确定dp数组以及下标的含义: dp[i] 表示字符串s的前i个字符是否可以被拆分为wordDict中的单词
  // 2. 确定递推公式: dp[j] = true && wordDict.includes(s.slice(j, i))
  // 3. dp数组如何初始化: dp[0] = true
  // 4. 确定遍历顺序: 由前到后
  // 5. 举例推导dp数组
  const set = new Set<string>(wordDict);
  const len: number = s.length;
  const dp: boolean[] = Array(len + 1).fill(false);
  // 初始化
  dp[0] = true;
  // 遍历
  for (let i = 1; i <= len; i++) {
    for (let j = 0; j < i; j++) {
      if (set.has(s.slice(j, i)) && dp[j]) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[len];
}

console.log(wordBreak("leetcode", ["leet", "code"]));
console.log(wordBreak("applepenapple", ["apple", "pen"]));
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]));

export {};
