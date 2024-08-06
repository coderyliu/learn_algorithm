// https://leetcode.cn/problems/RQku0D/

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  if (isPalindromic(s)) return true
  let count = 0
  let end = s.length - 1

  function isCircle(s, flag) {
    count = 0
    end=s.length-1
    for (let i = 0; i <= end; i++) {
      if (s[i] !== s[end] && flag === 0) {
        count++
        if (count === 2) {
          return false
        }
      } else if (s[i] !== s[end] && flag === 1) {
        count++
        if (count === 2) {
          return false
        }
        end--
        i--
      } else {
        end--
      }
    }

    return true
  }

  return isCircle(s, 0) || isCircle(s, 1)
};

// 判断是否为回文子串
function isPalindromic(str) {
  let len = str.length - 1

  for (let i = 0; i <= len; i++) {
    if (str[i] !== str[len]) {
      return false
    }

    len--
  }

  return true
}