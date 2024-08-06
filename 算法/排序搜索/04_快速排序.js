// https://leetcode.cn/problems/sort-an-array/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// ?1.直接用库函数
var sortArray = function (nums) {
  return nums.sort((a, b) => a - b)
};

// ?2.用排序方法--快排
var sortArray = function (nums) {
  if (nums.length < 2) return nums

  const index = Math.floor(nums.length / 2)
  const num = nums.splice(index, 1)[0]
  let leftArr = []
  let rightArr = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < num) {
      leftArr.push(nums[i])
    } else {
      rightArr.push(nums[i])
    }
  }

  return sortArray(leftArr).concat(num, sortArray(rightArr))

}