// https://leetcode.cn/problems/longest-substring-without-repeating-characters/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const map = new Map()
  let res = 0
  let l = 0

  for (let r = 0; r < s.length; r++) {
    if (map.has(s[r]) && map.get(s[r]) >= l) {
      l = map.get(s[r]) + 1
    }

    map.set(s[r], r)
    res = Math.max(res, r - l + 1)
  }

  return res

};