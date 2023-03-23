// https://leetcode.cn/problems/backspace-string-compare/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// ?1.暴力
var backspaceCompare = function (s, t) {
  function getStr(str) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '#' && i !== 0) {
        str = str.slice(0, i - 1) + str.slice(i + 1)
        i = i - 2
      }
    }

    let i = 0
    while (true) {
      if (str[i] === '#') {
        str = str.slice(i + 1)
      }
      break
    }

    return str
  }

  const s1 = getStr(s)
  const t1 = getStr(t)

  if (s1 === t1) return true
  return false
};

// ?2.栈
var backspaceCompare = function (s, t) {
  const s1 = getStackArr(s)
  const s2 = getStackArr(t)

  return s1 === s2
};

function getStackArr(str) {
  const stack = []
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '#' && stack.length > 0) {
      stack.pop()
      continue
    }
    if (str[i] !== '#') {
      stack.push(str[i])
    }
  }

  return stack.join('')
}