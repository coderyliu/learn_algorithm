/**
 * @param {string[]} words
 * @return {number}
 */
// ? 暴力破解
var maxProduct = function (words) {
  let max = 0
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (!isSameWord(words[i], words[j])) {
        max = Math.max(max, words[i].length * words[j].length)
      }
    }
  }

  return max
};

// 判断两个字符串是否含有相同字母
function isSameWord(str1, str2) {
  const map = new Map()
  for (let i = 0; i < str1.length; i++) {
    map.set(str1[i], true)
  }

  for (let j = 0; j < str2.length; j++) {
    if (map.has(str2[j])) {
      return true
    }
  }
  return false
}