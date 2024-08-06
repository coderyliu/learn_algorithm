// https://leetcode.cn/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-ii-lcof/
/**
 * @param {number[]} nums
 * @return {number}
 */
// ?1.哈希法  时间复杂度O(n) 空间复杂度O(n)
var singleNumber = function (nums) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], map.has(nums[i]) ? map.get(nums[i]) + 1 : 1)
  }

  for (const item of map) {
    if (item[1] === 1) {
      return item[0]
    }
  }
};

// ?2.遍历 时间复杂度较高 O(n^2)
var singleNumber = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let index = nums.indexOf(nums[i])
    index = nums.indexOf(nums[i], index + 1)
    if (index === -1) {
      return nums[i]
    } else {
      continue
    }
  }
}

console.log(singleNumber([3, 4, 3, 3]))
console.log(singleNumber([9, 1, 7, 9, 9, 7]))