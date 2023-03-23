// https://leetcode.cn/problems/median-of-two-sorted-arrays/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// ?1.暴力
var findMedianSortedArrays = function (nums1, nums2) {
  const nums3 = nums1.concat(nums2)

  nums3.sort((a, b) => a - b)
  if (nums3.length % 2 !== 0) {
    return nums3[Math.floor(nums3.length / 2)]
  } else {
    return (nums3[Math.floor(nums3.length / 2)] + nums3[Math.floor(nums3.length / 2) - 1]) / 2
  }
};

// ?2.归并排序
const findMedianSortedArrays = function (nums1, nums2) {
  let i = nums1.length > 0 ? nums1.length - 1 : -1
  let j = nums2.length > 0 ? nums2.length - 1 : -1
  let k = nums1.length + nums2.length - 1

  const res = Array(nums1.length + nums2.length)

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      res[k] = nums1[i]
      k--
      i--
    } else {
      res[k] = nums2[j]
      k--
      j--
    }
  }

  while (i >= 0) {
    res[k] = nums1[i]
    i--
    k--
  }

  while (j >= 0) {
    res[k] = nums2[j]
    j--
    k--
  }

  if (res.length % 2 !== 0) {
    return res[Math.floor(res.length / 2)]
  } else {
    return (res[Math.floor(res.length / 2)] + res[Math.floor(res.length / 2) - 1]) / 2
  }
}