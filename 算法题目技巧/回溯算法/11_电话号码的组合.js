// https: //leetcode.cn/problems/letter-combinations-of-a-phone-number/

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits.length) return []
  const totalArr = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  if (digits.length === 1) return totalArr[digits].split('')
  const res = []
  const path = []

  function backTracking(n, k, startIndex) {
    if (path.length === k) {
      res.push(path.join(''))
      return
    }
    for (const v of totalArr[Number(digits[startIndex])]) {
      path.push(v)
      backTracking(n, k, startIndex + 1)
      path.pop()
    }
  }

  backTracking(digits, digits.length, 0)
  return res

};