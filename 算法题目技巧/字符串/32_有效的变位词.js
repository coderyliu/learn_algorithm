// https://leetcode.cn/problems/dKk3P7/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const map1 = new Map()
  for (let i = 0; i < s.length; i++) {
    map1.set(s[i], map1.has(s[i]) ? map1.get(s[i]) + 1 : 1)
  }

  const map2 = new Map()
  for (let i = 0; i < t.length; i++) {
    map2.set(t[i], map2.has(t[i]) ? map2.get(t[i]) + 1 : 1)
  }

  if (s === t) {
    return false
  }

  if (map1.size !== map2.size) {
    return false
  }

  for (const item of map1) {
    if (map2.has(item[0])) {
      if (map2.get(item[0]) === item[1]) {
        map2.delete(item[0])
      } else {
        return false
      }
    }
  }

  if(map2.size!==0) return false

  return true
};