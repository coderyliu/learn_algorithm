// https://leetcode.cn/problems/palindromic-substrings/
/**
 * @param {string} s
 * @return {number}
 */

// ? 1.暴力  时间复杂度o(n^3)
var countSubstrings = function (s) {
  let count = 0
  let res = ''
  for (let i = 0; i < s.length; i++) {
    res = ''
    res += s[i]
    if (Palindrome(res)) {
      count++
    }
    for (let j = i + 1; j < s.length; j++) {
      res += s[j]
      if (Palindrome(res)) {
        count++
      }
    }
  }

  console.log(count)
};

// 判断字符串是否回文
function Palindrome(str) {
  let len = str.length - 1
  for (let i = 0; i <= len; i++) {
    if (str[i] !== str[len]) return false
    len--
  }
  return true
}

// ? 2.双指针  时间复杂度O(n^2)
var countSubstrings = function (s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    let s1 = '',
      s2 = '';
    for (let j = i; j < s.length; j++) {
      s1 += s[j], s2 = s[j] + s2;
      if (s1 === s2) count++;
    }
  }

  return count;
};

// countSubstrings('aaa')
// countSubstrings('abc')
countSubstrings('aabaabbc')