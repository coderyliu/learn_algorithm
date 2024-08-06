// https://leetcode.cn/problems/longest-palindrome/

/**
 * @param {string} s
 * @return {number}
 */
// ?想法：找出s中所有偶数的数量+1？？0
var longestPalindrome = function (s) {
  if(s.length===1) return 1
  const map = new Map()

  for (let i = 0; i < s.length; i++) {
    map.set(s[i], map.has(s[i]) ? map.get(s[i]) + 1 : 1)
  }
  //  拿到map的所有value
  const arr = [...map.values()]
  let count = 0
  for (const v of arr) {
    if (v % 2 === 0) {
      count += v
    } else if (v > 2 && v % 2 !== 0) {
      count += v - 1
    }
  }


  if (count === s.length) {
    return count
  } else {
    return count + 1
  }
};