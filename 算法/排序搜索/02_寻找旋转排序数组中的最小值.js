// ?https://leetcode.cn/problems/find-minimum-in-rotated-sorted-array/
/**
 * @param {number[]} nums
 * @return {number}
 */
// ?细节处理
//  1.right = mid 而不是 mid - 1,因为right等于mid时是有意义的，因为mid可能为数组最小的元素，若令right = mid - 1可能会错过最小值
//  2.left < right 而不是 left <= right,因为我们要找的目标值是未知的，left <= right最后会使left == right,返回的值不一定是正确的，
// 而left < right,最后目标值在[left, right]区间内，我们只需要在区间内取满足题目要求的最小值就可以了

var findMin = function (nums) {
  let left = 0,
    right = nums.length - 1,
    mid
  // 若nums长度为1直接返回第一个元素
  if (nums.length == 1) return nums[0]
  while (left < right) {
    mid = left + Math.floor((right - left) / 2)
    // 当数组未旋转时
    if (nums[mid] < nums[nums.length - 1] && nums[mid] > nums[0]) return nums[0]

    if (nums[mid] > nums[right]) {
      if (nums[mid] > nums[mid + 1] && nums[mid + 1] !== undefined) return nums[mid + 1]
      else left = mid + 1
    } else right = mid
  }
  return nums[left]
};