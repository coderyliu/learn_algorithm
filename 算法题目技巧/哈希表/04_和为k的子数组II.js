// https: //leetcode.cn/problems/subarray-sum-equals-k/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  const map = new Map()
  let sum1 = 0
  let sum2 = 0
  let count = 0
  map.set(0, 1)
  for (let i = 0; i < nums.length; i++) {
    sum1 += nums[i]
    sum2 = sum1 - k
    if (map.has(sum2)) {
      count += map.get(sum2)
    }
    let sumCnt = map.get(sum1) || 0
    map.set(sum1, sumCnt + 1)
  }
  return count
};