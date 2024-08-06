// https://leetcode.cn/problems/3sum/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const len = nums.length
  if (len < 3) return []
  const set = new Set()
  nums.sort((a, b) => a - b)

  for (let i = 0; i < len - 2; i++) {
    if (nums[i] > 0) break
    let left = i + 1
    let right = len - 1

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]
      if (sum > 0) {
        right--
        continue
      }
      if (sum < 0) {
        left++
        continue
      }
      if (sum === 0) {
        set.add(`${nums[i]},${nums[left]},${nums[right]}`)
        left++
        right--
      }
    }
  }

  const res = Array.from(set).map(i => i.split(','))
  console.log(res)
};

threeSum([-1, 0, 1, 2, -1, -4])