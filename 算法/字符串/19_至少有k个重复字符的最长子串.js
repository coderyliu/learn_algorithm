// https: //leetcode.cn/problems/longest-substring-with-at-least-k-repeating-characters/
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
  if (s.length < k) return 0; //如果s长度小于k，提前退出 返回长度0
  const cache = new Map();
  for (let i = 0; i < s.length; i++) {
    cache.set(s[i], cache.has(s[i]) ? cache.get(s[i]) + 1 : 1);
  }
  for (const [key, val] of cache.entries()) {
    if (val < k) { //数量小于k的字符，那么该字符串必不合格 处理如下
      let res = 0;
      for (const i of s.split(key)) { //按照个数小于k的字符划分字符串 分治！
        res = Math.max(res, longestSubstring(i, k)); //对划分的字符串继续递归判断
      }
      return res;
    }
  }
  return s.length; //如果s中所有字符个数都大于k，返回s的长度
}
longestSubstring('aaabb', 3)