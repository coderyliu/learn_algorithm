// ?https://leetcode.cn/problems/shortest-unsorted-continuous-subarray/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  //todo 先排序，找不同,双指针
  const copy = [...nums]
  copy.sort((a, b) => a - b)
  let start = 0,
    end = nums.length - 1
  let len = -1
  while (start <= end) {
    if (copy[start] !== nums[start] && copy[end] !== nums[end]) {
      len = end - start + 1
      break
    }
    if (copy[start] === nums[start]) {
      start++
    }
    if (copy[end] === nums[end]) {
      end--
    }
  }

  return len === -1 ? 0 : len
};
console.log(findUnsortedSubarray([1, 2, 3, 4]))
console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]))