// https://leetcode.cn/problems/valid-anagram/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const map1 = new Map()
  const map2 = new Map()
  for (let i = 0; i < s.length; i++) {
    if (map1.has(s[i])) {
      map1.set(s[i], map1.get(s[i]) + 1)
    } else {
      map1.set(s[i], 1)
    }
  }

  for (let j = 0; j < t.length; j++) {
    if (map2.has(t[j])) {
      map2.set(t[j], map2.get(t[j]) + 1)
    } else {
      map2.set(t[j], 1)
    }
  }

  if (map1.size > map2.size) {
    for (const item of map1) {
      if (map2.has(item[0])) {
        if (map2.get(item[0]) !== map1.get(item[0])) {
          return false
        }
      } else {
        return false
      }
    }
  } else {
    for (const item of map2) {
      if (map1.has(item[0])) {
        if (map1.get(item[0]) !== map2.get(item[0])) {
          return false
        }
      } else {
        return false
      }
    }
  }
  return true
};
// isAnagram('anagram', 'nagaram')
console.log(isAnagram('rat', 'car'))