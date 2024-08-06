// https: //leetcode.cn/problems/summary-ranges/

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let flag = 0
  let next = 0
  const res = []
  for (let i = 0; i < nums.length; i++) {
    next = i + 1
    if (nums[i] + 1 === nums[next]) {
      continue
    } else if (next - 1 === flag) {
      res.push(`${nums[i]}`)
      flag = next
    } else {
      res.push(`${nums[flag]}->${nums[i]}`)
      flag = next
    }
  }
  return res
};
console.log(summaryRanges([0, 1, 2, 4, 5, 7]))
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]))