// https: //leetcode.cn/problems/zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof/
/**
 * @param {string} s
 * @return {number}
 */
// ? 1.使用哈希表
var lengthOfLongestSubstring = function (s) {
  if (!s.length) return 0
  const map = new Map()
  let l = 0
  let res = 0
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      res = Math.max(res, i - l + 1)
      map.set(s[i], i)
    } else if (map.has(s[i])) {
      if (map.get(s[i]) >= l) {
        l = map.get(s[i]) + 1
        map.set(s[i], i)
      } else {
        map.set(s[i], i)
      }
      res = Math.max(res, i - l + 1)
    }
  }

  console.log(res)
  // return res
};

lengthOfLongestSubstring('abcabcbb')
lengthOfLongestSubstring('bbbb')
lengthOfLongestSubstring('pwwkew')
lengthOfLongestSubstring('aab')
lengthOfLongestSubstring('tmmzuxt')
lengthOfLongestSubstring('aabaab!bb')