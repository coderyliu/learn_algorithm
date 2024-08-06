// https://leetcode.cn/problems/valid-mountain-array/
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  // todo 先找出最大值，及其下标
  if (arr.length < 3) return false
  let max = arr[0],
    index = 0
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
      index = i
    }
  }

  // 如果最大值下标在0或者数组末尾不存在转折点
  if (index === 0 || index === arr.length - 1) return false

  // 如果最大值前半段不是递增的不满足条件
  for (let i = 0; i < index; i++) {
    if (arr[i] > arr[i + 1]) return false
  }

  // 如果最大值后半段，不是递减的不满足条件
  for (let i = index; i < arr.length; i++) {
    if (arr[i] <= arr[i + 1]) return false
  }

  // 都满足条件
  return true
};