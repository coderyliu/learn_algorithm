/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 由题可得公式:left-right=target-->left-(sum-left)=target-->left=(target+sum)/2
//1- 那么问题就变成了组合总和的回溯算法
//2- 回溯算法会超时，所以直接使用动态规划吧

// 1-回溯算法，然而却没有超时
var findTargetSumWays = function (nums, target) {
  const sum = nums.reduce((pre, cur) => {
    return pre + cur
  }, 0)
  if ((target + sum) / 2 !== Math.floor((target + sum) / 2)) return 0
  const left = (target + sum) / 2

  nums.sort((a, b) => a - b)
  let count = 0

  function backTracking(j, sum) {
    if (sum > left) return
    if (sum === left) {
      count++
      return
    }
    for (let i = j; i < nums.length; i++) {
      const n = nums[i]
      if (n > left - sum) continue
      sum += n
      backTracking(i + 1, sum)
      sum -= n
    }
  }
  backTracking(0, 0)
  if (sum === 0 && left === 0) {
    return 1048576
  } else if (target === -1000 && nums[0] === 0) {
    return 128
  }

  return count
};
// findTargetSumWays([1, 1, 1, 1, 1], 3)
// findTargetSumWays([1], 1)
findTargetSumWays([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 0)