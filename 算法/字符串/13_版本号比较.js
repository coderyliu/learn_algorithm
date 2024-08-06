// https://leetcode.cn/problems/compare-version-numbers/
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  let arrA = version1.split('.').map(i => i.replace(/^0*/g, ''))
  let arrB = version2.split('.').map(i => i.replace(/^0*/g, ''))

  let len = Math.max(arrA.length, arrB.length)
  for (let i = 0; i < len; i++) {
    let strA = arrA[i] === '' || undefined ? undefined : arrA[i]
    let strB = arrB[i] === '' || undefined ? undefined : arrB[i]

    if (strA === undefined && strB === undefined && i === len - 1) {
      return 0
    } else if (strA && strB === undefined) {
      return 1
    } else if (strB && strA === undefined) {
      return -1
    }

    if (Number(strA) > Number(strB)) {
      return 1
    } else if (Number(strA) < Number(strB)) {
      return -1
    } else if (i === len - 1) {
      return 0
    }
  }
};
console.log(compareVersion('1.01', '1.001'))
console.log(compareVersion('1.0', '1.0.0'))
console.log(compareVersion('0.1', '1.1'))
console.log(compareVersion('1.0.1', '1'))
console.log(compareVersion('1.2', '1.10'))