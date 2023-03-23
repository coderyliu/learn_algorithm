// https://leetcode-cn.com/problems/gas-station/

// 1-暴力解法
function canComplete(gas, cost) {

  for (let i = 0; i < cost.length; i++) {
    let rest = gas[i] - cost[i] //记录剩余量
    // 以i为起点行驶一圈，index为下一个目的地
    let index = (i + 1) % cost.length
    while (rest > 0 && index !== i) {
      rest += gas[index] - cost[index]
      index = (index + 1) % cost.length
    }
    if (rest >= 0 && index === i) return i
  }
  return -1
}

// 2-贪心算法
function canComplete(gas, cost) {
  const gasLen = gas.length
  let start = 0
  let curSum = 0
  let totalSum = 0

  for (let i = 0; i < gasLen; i++) {
    curSum += gas[i] - cost[i]
    totalSum += gas[i] - cost[i]
    if (curSum < 0) {
      curSum = 0
      start = i + 1
    }
  }

  if (totalSum < 0) return -1

  return start
}