// https://leetcode.cn/problems/maximum-product-of-word-lengths/
/**
 * @param {string[]} words
 * @return {number}
 */
// ?1.暴力  时间复杂度O(n^3) 空间复杂度O(1)
var maxProduct = function (words) {
  let flag = false
  let res = 0
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      flag = false
      for (let p = 0; p < words[j].length; p++) {
        if (words[i].includes(words[j][p])) {
          flag = true
          break
        }
      }
      if (!flag) {
        res = Math.max(words[i].length * words[j].length, res)
      }
    }
  }

  console.log(res)
};

// ?2.如想要降低时间复杂度，就要使用位运算
maxProduct(["abcw", "baz", "foo", "bar", "xtfn", "abcdef"])
maxProduct(["a", "ab", "abc", "d", "cd", "bcd", "abcd"])