// https://leetcode-cn.com/problems/maximize-sum-of-array-after-k-negations/submissions/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
  nums.sort((a, b) => {
    return Math.abs(b) - Math.abs(a)
  })
  console.log(nums)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0 && k > 0) {
      nums[i] *= -1
      k--
    }
  }

  if (k > 0 && k % 2 === 1) {
    nums[nums.length - 1] *= -1
  }

  k = 0
  return nums.reduce((a, b) => {
    return a + b
  })
};
console.log(largestSumAfterKNegations([2, -3, -1, 5, 4]))