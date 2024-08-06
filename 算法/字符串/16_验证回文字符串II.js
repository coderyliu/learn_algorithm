// https://leetcode.cn/problems/valid-palindrome-ii/
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  // 去除字符串中的空格
  let reg = /[a-zA-Z0-9]/i

  function delTrim(s) {
    let res = ''
    for (const item of s) {
      if (reg.test(item)) {
        res += item
      }
    }
    return res
  }
  // 全部转为小写
  const str = delTrim(s).toLowerCase()
  // 双指针
  let count = 0
  let end = str.length - 1
  let arr = Array.from(str)

  function isCircle(arr, flag) {
    count = 0
    end = str.length - 1
    for (let i = 0; i <= end; i++) {
      if (arr[i] !== arr[end] && flag === 0) {
        count++
        if (count === 2) {
          return false
        }
      } else if (arr[i] !== arr[end] && flag === 1) {
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
  return isCircle(arr, 0) || isCircle(arr, 1)
};