// https://leetcode.cn/problems/move-zeroes/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 1.暴力循环
// var moveZeroes = function (nums) {
//   const len = nums.length
//   let index = 0
//   for (let i = 0; i < len - index; i++) {
//     if (nums[i] === 0) {
//       nums.splice(i, 1)
//       i--
//       index++
//       nums.push(0)
//     }
//   }
//   return nums
// };
// console.log(moveZeroes([0, 1, 0, 3, 12]))
// console.log(moveZeroes([0, 0, 1]))

// 2.双指针
var moveZeroes = function (nums) {
  let index = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[index++] = nums[i]
    }
  }
  nums.fill(0, index)
  console.log(nums)
}

moveZeroes([0, 1, 0, 3, 12])
moveZeroes([0, 1, 0])