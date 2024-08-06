// https://leetcode.cn/problems/merge-sorted-array/
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let len = m + n - 1
  let i = m - 1
  let j = n - 1
  // const res = new Array(len)

  while (i >= 0 && j >= 0) {
    if (nums1[i] < nums2[j]) {
      nums1[len] = nums2[j]
      j--
      len--
    } else {
      nums1[len] = nums1[i]
      i--
      len--
    }
  }

  while (i >= 0) {
    nums1[len] = nums1[i]
    i--
    len--
  }

  while (j >= 0) {
    nums1[len] = nums2[j]
    j--
    len--
  }

  // return res
};