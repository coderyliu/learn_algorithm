// 这道题画出图来就好理解了
// 它的规律是既然是摆动序列，那么每一次要么是单调递增要么是单调递减，并且单调两边只有两个峰值
// 局部最优是确保单调的时候只有两个峰值，中间的值多余了就删除
// 全局最优就是峰值的个数就是最终的结果
/**
 * @param {number[]} nums
 * @return {number}
 */

var wiggleMaxLength = function (nums) {
  if (nums.length <= 1) return nums.length
  let result = 1
  let preDiff = 0
  let curDiff = 0
  for (let i = 0; i < nums.length; i++) {
    curDiff = nums[i + 1] - nums[i]
    if ((curDiff > 0 && preDiff <= 0) || (curDiff < 0 && preDiff >= 0)) {
      result++
      preDiff = curDiff
    }
  }

  return result
};
console.log(wiggleMaxLength([1, 7, 4, 9, 2, 5]))
console.log(wiggleMaxLength([1, 17, 5, 10, 13, 15, 10, 5, 16, 8]))
console.log(wiggleMaxLength([1, 2, 3, 4, 5, 6, 7, 8, 9]))
console.log(wiggleMaxLength([0, 0, 0]))
console.log(wiggleMaxLength([3, 3, 3, 2, 5]))