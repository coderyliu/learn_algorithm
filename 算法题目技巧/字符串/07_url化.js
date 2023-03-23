/**
 * @param {string} S
 * @param {number} length
 * @return {string}
 */
var replaceSpaces = function (S, length) {
  // 1-正则替换
  // return S.slice(0, length).replace(/\s/g, '%20')
  // 2-字符数组遍历
  // const arr = []
  // for (let i = 0; i < length; i++) {
  //   if (S[i] === ' ') {
  //     arr.push(i)
  //   }
  // }
  // const arrS = S.slice(0, length).split('')
  // for (const item of arr) {
  //   arrS.splice(item, 1, '%20')
  // }
  // return arrS.join('')
};
console.log(replaceSpaces('     '))
console.log(replaceSpaces('Mr John Smith'))