// ?https://leetcode.cn/problems/find-all-numbers-disappeared-in-an-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const map = new Map()
  for (let i = 1; i <= nums.length; i++) {
    map.set(i, i)
  }

  for (let j = 0; j < nums.length; j++) {
    if (map.has(nums[j])) {
      map.delete(nums[j])
    }
  }

  const res = [...map.values()]
  // console.log(res)
  return res
};
findDisappearedNumbers([1, 1])
findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])