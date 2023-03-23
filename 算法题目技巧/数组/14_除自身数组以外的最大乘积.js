// https://leetcode.cn/problems/product-of-array-except-self/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// ?左右列表乘积
// todo 三次循环版本
var productExceptSelf = function (nums) {
  const res = []
  const left = [1],
    right = []
  for (let i = 1; i < nums.length; i++) {
    left[i] = nums[i - 1] * left[i - 1]
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    right[i] = right[i + 1] === undefined ? 1 : right[i + 1] * nums[i + 1]
  }

  for (let j = 0; j < nums.length; j++) {
    res[j] = left[j] * right[j]
  }

  return res
};
// todo 两次循环版本
var productExceptSelf = function (nums) {
  const res = [1]
  let rightMiddleValue = 1
  for (let i = 1; i < nums.length; i++) {
    res[i] = nums[i - 1] * res[i - 1]
  }


  for (let j = nums.length - 1; j >= 0; j--) {
    res[j] = res[j] * rightMiddleValue
    rightMiddleValue *= nums[j]
  }

  return res
};
console.log(productExceptSelf([1, 2, 3, 4]))
console.log(productExceptSelf([-1, 1, 0, -3, 3]))