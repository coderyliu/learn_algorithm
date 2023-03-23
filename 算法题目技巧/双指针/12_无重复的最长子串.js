/**
 * @param {string} s
 * @return {number}
 */

// ?哈希
var lengthOfLongestSubstring = function (s) {
  const map = new Map()
  let l = 0

  let res = 0
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i]) && map.get(s[i]) >= l) {
      l = map.get(s[i]) + 1
    }

    map.set(s[i], i)
    res = Math.max(res, i - l + 1)
  }

  return res
};