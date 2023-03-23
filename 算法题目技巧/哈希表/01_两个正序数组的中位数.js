var findMedianSortedArrays = function (nums1, nums2) {
  let m = nums1.length
  let n = nums2.length
  let i = 0,
    j = 0
  let newArr = []

  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      newArr.push(nums1[i++])
    } else {
      newArr.push(nums2[j++])
    }
  }
  newArr = newArr.concat(i < m ? nums1.slice(i) : nums2.slice(j))
  const len = newArr.length
  if (len % 2 === 0) {
    return (newArr[len / 2] + newArr[(len / 2) - 1]) / 2
  } else {
    return newArr[Math.floor(len / 2)]
  }
};
console.log(findMedianSortedArrays([1, 3], [2]))