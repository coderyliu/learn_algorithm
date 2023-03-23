// https://leetcode.cn/problems/permutation-in-string/
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

// ? 1.回溯+遍历 超时  通过30个用例
var checkInclusion = function (s1, s2) {
  const path = []
  const res = []

  // 字符串的全排列
  function backTracking(n, k, used) {
    if (path.length === k) {
      res.push(path.join(''))
    }

    for (let i = 0; i < k; i++) {
      if (used[i]) continue
      path.push(n[i])
      used[i] = true
      backTracking(n, k, used)
      used[i] = false
      path.pop()
    }
  }

  backTracking(s1, s1.length, [])

  for (let i = 0; i < res.length; i++) {
    if (s2.includes(res[i])) {
      return true
    }
  }

  return false
};

// ?2.map+滑动窗口
var checkInclusion = function (s1, s2) {
  // 先处理s1
  let map = new Map()
  for (const item of s1) {
    map.set(item, map.has(item) ? map.get(item) + 1 : 1)
  }

  // 在处理s2
  let l = 0,
    r = 0
  let window = new Map()
  let valid = 0
  while (r < s2.length) {
    if (map.has(s2[r])) {
      window.set(s2[r], window.has(s2[r]) ? window.get(s2[r]) + 1 : 1)
      if (window.get(s2[r]) == map.get(s2[r])) valid++
    }
    r++
    while (r - l >= s1.length) {
      if (valid == map.size) return true
      if (map.has(s2[l])) {
        if (window.get(s2[l]) == map.get(s2[l])) valid--
        window.set(s2[l], window.get(s2[l]) - 1)
      }
      l++
    }
  }

  return false
}

console.log(checkInclusion('ab', 'eidboaoo'))
console.log(checkInclusion('ab', 'eidbaooo'))