// https://leetcode.cn/problems/permutation-in-string/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

// ? 初步想法，s1回溯求出s1的子串，判断s1的所有子串是否都在s2中包含
// ? 超时，只通过30个 
var checkInclusion = function (s1, s2) {

  const path = []
  const res = []

  function backTracking(used) {
    if (path.length === s1.length) {
      res.push(path.join(''))
    }

    for (let i = 0; i < s1.length; i++) {
      if (used[i]) continue
      used[i] = true
      path.push(s1[i])
      backTracking(used)
      used[i] = false
      path.pop()
    }
  }
  backTracking([])

  for (const item of res) {
    if (s2.indexOf(item) !== -1) {
      return true
    }
  }
  return false
};

// ?map+滑动窗口
function checkInclusion(s1, s2) {
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
      if(window.get(s2[r])===map.get(s2[r])) valid++
    }
    r++

    while(r-l>=s1.length){
      if(valid===map.size) return true
      if(map.has(s2[l])){
        if(window.get(s2[l])===map.get(s2[l])) valid--
        window.set(s2[l],window.get(s2[l])-1)
      }
      l++
    }
  }

  return false
}

console.log(checkInclusion('ab', 'eidboaoo'))
console.log(checkInclusion("prosperity", "properties"))