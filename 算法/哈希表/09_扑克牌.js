// https://leetcode.cn/problems/bu-ke-pai-zhong-de-shun-zi-lcof/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function (nums) {
  nums.sort((a, b) => a - b)
  const map = new Map()
  let count = 0
  const len = nums[nums.length - 1]
  if (nums.length < len) return false
  for (let i = len; i > len - nums.length; i--) {
    map.set(i, true)
  }
  for (let j = 0; j < nums.length; j++) {
    if (map.has(nums[j])) {
      map.delete(nums[j])
    } else if (nums[j] === 0) {
      count++
    }
  }

  return map.size === count

};
console.log(isStraight([1, 2, 3, 4, 5]))
console.log(isStraight([0, 0, 1, 2, 5]))