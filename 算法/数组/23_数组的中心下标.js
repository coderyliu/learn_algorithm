// https: //leetcode.cn/problems/find-pivot-index/
/**
 * @param {number[]} nums
 * @return {number}
 */

// ?这种时间复杂度较高
var pivotIndex = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let sum1 = 0,
      sum2 = 0
    if (i !== 0) {
      sum1 = nums.slice(0, i).reduce((pre, cur) => pre + cur, 0)
    }

    if (i !== nums.length - 1) {
      sum2 = nums.slice(i + 1, nums.length).reduce((pre, cur) => {
        return pre + cur
      }, 0)
    }
    if (sum1 === sum2) return i
  }
  return -1
};

// ?中心索引求和
var pivotIndex = function (nums) {
  const sum = nums.reduce((a, b) => a + b); //求和
  let leftSum = 0
  let rightSum = 0
  for (let i = 0; i < nums.length; i++) {
    leftSum += nums[i]
    rightSum = sum - leftSum + nums[i]
    if (leftSum === rightSum) {
      return i
    }
  }

  return -1
};
console.log(pivotIndex([1, 7, 3, 6, 5, 6]))
console.log(pivotIndex([1, 2, 3]))