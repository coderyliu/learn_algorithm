// https://leetcode.cn/problems/string-rotation-lcci/
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isFlipedString = function (s1, s2) {
  if (!s1.length && !s2.length) return true
  if (s1.length && !s2.length) return false
  if (s1 === s2) return true
  if (s1.length < s2.length) return false
  for (let i = 0; i < s1.length; i++) {
    let res = s1.slice(s1.length - i) + s1.slice(0, s1.length - i)
    if (res.includes(s2)) {
      return true
    }
  }
  return false
};
console.log(isFlipedString("waterbottle", "erbottlewat"))
console.log(isFlipedString('aa', 'aba'))