// https://leetcode.cn/problems/find-the-index-of-the-first-occurrence-in-a-string/?plan=perfectworld&plan_progress=zyxgsmm
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  // todo 简单做法
  // return haystack.indexOf(needle)

  // todo 复杂做法 KMP
  // 获取next数组
  function getNext(needle) {
    let j = 0
    let next = []
    next.push(j)
    for (let i = 1; i < needle.length; i++) {
      while (j > 0 && needle[i] !== needle[j]) {
        j = next[j - 1]
      }

      if (needle[i] === needle[j]) {
        j++
      }

      next.push(j)
    }

    return next
  }

  if (haystack.length === 0) return 0
  const next = getNext(needle)

  let j = 0
  for (let i = 0; i < haystack.length; i++) {
    while (j > 0 && haystack[i] !== needle[j]) {
      j = next[j - 1]
    }

    if (haystack[i] === needle[j]) {
      if (j === needle.length - 1) {
        return i - j
      }

      j++
    }
  }

  return -1
};