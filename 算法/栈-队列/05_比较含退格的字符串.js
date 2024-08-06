// https://leetcode.cn/problems/backspace-string-compare/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
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
    }
    if (str[i] !== '#') {
      stack.push(str[i])
    }
  }

  return stack.join('')
}