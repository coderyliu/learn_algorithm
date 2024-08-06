// https://leetcode.cn/problems/jian-sheng-zi-lcof/

/**
 * @param {number} n
 * @return {number}
 */
// ?1.回溯算法-肯定会栈溢出,只能通过20个用例
var cuttingRope = function (n) {
  const res = [],
    path = []
  let result = 1

  function backTracking() {
    const sum = path.reduce((pre, cur) => {
      return pre + cur
    }, 0)
    if (sum > n) return
    if (sum === n) {
      res.push([...path])
    }
    for (let i = 1; i < n; i++) {
      path.push(i)
      backTracking()
      path.pop()
    }
  }

  backTracking()
  for (const item of res) {
    const maxValue = item.reduce((pre, cur) => {
      return pre * cur
    }, 1)
    result = Math.max(maxValue, result)
  }
  console.log(result)
};
// cuttingRope(5)
// cuttingRope(10)
// cuttingRope(15)
// cuttingRope(20)
// todo 21以后机会栈溢出
cuttingRope(21)