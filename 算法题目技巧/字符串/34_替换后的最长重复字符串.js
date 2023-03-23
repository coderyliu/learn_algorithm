// https://leetcode.cn/problems/longest-repeating-character-replacement/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let n = s.length
  let left = 0
  let right = 0
  let maxNum = 0
  let strMap = new Array(26).fill(0)
  const getIndex = str => str.charCodeAt() - 'A'.charCodeAt()

  while (right < n) {
    strMap[getIndex(s[right])]++;
    maxNum = Math.max(maxNum, strMap[getIndex(s[right])])

    // 窗口宽度 > 最长子串
    if (right - left + 1 > maxNum + k) { // 窗口平移
      strMap[getIndex(s[left])]--
      left++
    }
    right++
  }

  return n - left
};