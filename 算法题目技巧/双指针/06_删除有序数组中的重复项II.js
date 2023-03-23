// ?https: //leetcode.cn/problems/remove-duplicates-from-sorted-array-ii/
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  //todo 1.暴力循环
  // let flag = 0
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] === nums[i + 1] && flag === 0) {
  //     flag = 1
  //     continue
  //   } else if (nums[i] === nums[i + 1] && flag === 1) {
  //     nums.splice(i, 1)
  //     i--
  //   } else if (nums[i] !== nums[i + 1]) {
  //     flag = 0
  //   }
  // }

  // return nums.length

  //todo 2.双指针
  let slow = 2
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] !== nums[slow - 2]) {
      nums[slow++] = nums[i]
    }
  }

  return slow
};
console.log(removeDuplicates([1, 1, 1, 2, 2, 3]))
console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]))