// https://leetcode.cn/problems/minimum-window-substring/?plan=leetcode_75&plan_progress=gty1ops
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
// ?滑动窗口+双指针+map
var minWindow = function (s, t) {
  const map = new Map()
  for (let i = 0; i < t.length; i++) {
    map.set(t[i], map.has(t[i]) ? map.get(t[i]) + 1 : 1)
  }

  let valid = map.size
  let l = 0
  let r = 0
  let res = ''

  while (r < s.length) {
    if (map.has(s[r])) {
      map.set(s[r], map.get(s[r]) - 1)
      if (map.get(s[r]) === 0) valid--
    }


    while (valid === 0) {
      let newRes = s.slice(l, r + 1)
      if (!res || newRes.length < res.length) res = newRes

      if (map.has(s[l])) {
        map.set(s[l], map.get(s[l]) + 1)
        if (map.get(s[l]) === 1) valid++
      }
      l++
    }
    r++
  }

  return res
};