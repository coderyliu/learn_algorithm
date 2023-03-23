/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// ?直接转化为数组、遍历
// todo 这是字符串相加
var multiply = function (num1, num2) {
  let arr1 = num1.split('').map(i => Number(i)).reverse()
  let arr2 = num2.split('').map(i => Number(i)).reverse()

  let len = Math.max(arr1.length, arr2.length)
  let flag = 0
  let res = []

  for (let i = 0; i < len; i++) {
    let n1 = arr1[i] === undefined ? 0 : arr1[i]
    let n2 = arr2[i] === undefined ? 0 : arr2[i]

    let ret = n1 + n2 + flag
    if (ret > 10) {
      flag = Math.floor(ret / 10)
      ret = ret % 10
    } else {
      flag = 0
    }

    res.push(ret)
  }

  if (flag) {
    res.push(flag)
  }

  return res.reverse().join('')
};

// ?字符串相乘
var multiply = function (num1, num2) {
  let m = num1.length
  let n = num2.length

  // 结果最多为m+n位
  let res = new Array(m + n).fill(0)

  // 从个位数开始相乘
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      let mul = (num1[i] - 0) * (num2[j] - 0)

      // 乘积在对应res的索引位置
      let p1 = i + j
      let p2 = i + j + 1
      // 叠加到res上
      let sum = mul + res[p2]
      res[p2] = sum % 10
      res[p1] += parseInt(sum / 10)
    }
  }

  // 结果前缀可能存在0
  let i = 0
  while (i < res.length && res[i] === 0) {
    i++
  }
  // 将计算结果转化为字符串
  let str = ""
  for (; i < res.length; i++) {
    str += res[i]
  }

  return str.length == 0 ? '0' : str
}