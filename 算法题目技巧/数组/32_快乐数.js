// https://leetcode.cn/problems/happy-number/
/**
 * @param {number} n
 * @return {boolean}
 */
// ?暴力 解决不了无限循环
var isHappy = function (n) {
  while (n !== 1) {
    let str = n + ''
    let left = 0
    let res = 0

    while (left < str.length) {
      res += Math.pow(str[left], 2)
      left++
    }

    n = res
  }
  return true
};

// ? 暴力+map
var isHappy = function (n) {
  const map = new Map()

  function getSum(n) {
    let sum = 0

    while (n) {
      sum += (n % 10) ** 2
      n = Math.floor(n / 10)
    }

    return sum
  }

  while (true) {
    // n出现过,证明已经陷入无限循环
    if (map.has(n)) return false
    if (n === 1) return true
    map.set(n, true)

    n = getSum(n)
  }
}
console.log(isHappy(19))
console.log(isHappy(2))