// https://leetcode.cn/problems/add-strings/
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let strA = num1.split('').reverse()
  let strB = num2.split('').reverse()
  let flag = 0
  let res = ''
  let len = Math.max(strA.length, strB.length)
  for (let i = 0; i < len; i++) {
    const s1 = strA[i] === undefined ? 0 : strA[i]
    const s2 = strB[i] === undefined ? 0 : strB[i]
    const sum = Number(s1) + Number(s2) + flag
    if (sum >= 10) {
      res += sum % 10
      flag = Math.floor(sum / 10)
    } else {
      res += sum
      flag = 0
    }
  }
  if (flag !== 0) {
    res += flag
    flag = 0
  }

  const result = res.split('').reverse().join('')
  // return result
  console.log(result)
};
addStrings('11', '123')
addStrings('456', '77')