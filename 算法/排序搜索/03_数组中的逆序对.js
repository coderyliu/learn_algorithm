// https://leetcode.cn/problems/shu-zu-zhong-de-ni-xu-dui-lcof/
/**
 * @param {number[]} nums
 * @return {number}
 */
//? 1.暴力  超时
var reversePairs = function (nums) {
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        count++
      }
    }
  }

  console.log(count)
};

// ? 2.归并排序  时间复杂度O(nlogn)
var reversePairs = function (nums) {
  let cnt = 0;
  const merge = (left, right) => {
    let res = []
    let i = 0,
      j = 0
    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        res.push(left[i++])
        cnt += j //逆序对增加
      } else {
        res.push(right[j++])
      }
    }

    if (i < left.length) {
      res.push(...left.slice(i))
      cnt += (left.length - i) * j //逆序对增加
    } else {
      res.push(...right.slice(j))
    }

    return res
  }

  const mergeSort = arr => {
    if (arr.length < 2) return arr
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))

    return merge(left, right)
  }

  mergeSort(nums);
  return cnt;
};
console.log(reversePairs([7, 5, 6, 4]))