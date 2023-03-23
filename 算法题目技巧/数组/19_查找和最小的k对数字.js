// https://leetcode.cn/problems/find-k-pairs-with-smallest-sums/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
// ?1.暴力破解,超时
var kSmallestPairs = function (nums1, nums2, k) {
  const result = []
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      result.push([nums1[i], nums2[j]])
    }
  }

  return result.sort((a, b) => a[0] + a[1] - b[0] - b[1]).slice(0, k)
};

// ?2.真正的做法应该是用堆排