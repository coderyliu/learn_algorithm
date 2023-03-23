// https://leetcode.cn/problems/que-shi-de-shu-zi-lcof/

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const map = new Map()
  const len = nums.length
  for (let i = 0; i <= len; i++) {
    map.set(i, true)
  }

  for (let i = 0; i < len; i++) {
    if (map.has(nums[i])) {
      map.delete(nums[i])
    }
  }

  return [...map][0][0]

};
console.log(missingNumber([0, 1, 3]))
console.log(missingNumber([0, 1, 2, 3, 4, 5, 6, 7, 9]))