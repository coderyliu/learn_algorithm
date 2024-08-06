// https://leetcode.cn/problems/add-binary/
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let strA = a.split('').reverse()
  let strB = b.split('').reverse()
  let flag = 0
  let res = ''
  let len = Math.max(strA.length, strB.length)
  for (let i = 0; i < len; i++) {
    const s1 = strA[i] === undefined ? 0 : strA[i]
    const s2 = strB[i] === undefined ? 0 : strB[i]
    const sum = Number(s1) + Number(s2) + flag
    if (sum === 1 || sum === 0) {
      res += sum
      flag = 0
    } else if (sum === 2) {
      flag = 1
      res += 0
    } else if (sum === 3) {
      flag = 1
      res += 1
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

// addBinary('11', '1')
// addBinary('1010', '1011')
addBinary('1111', '1111')