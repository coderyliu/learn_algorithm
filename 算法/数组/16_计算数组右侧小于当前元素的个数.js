// https://leetcode.cn/problems/count-of-smaller-numbers-after-self/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// ?1.暴力解法:超时
var countSmaller = function (nums) {
  const res = []
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    count = 0
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        count++
      }
    }
    res.push(count)
  }
  return res
};

// ?2.暴力+剪枝
var countSmaller = function (nums) {
  if (!nums.length) return []
  const res = Array(nums.length-1)
  let i = nums.length,
    temp
  while (i--) {
    temp = 0
    let j = i + 1
    for (; j < nums.length; j++) {
      if (nums[j] === nums[i]) {
        res[i] = res[j] + temp
        break
      }
      if (nums[j] < nums[i]) temp++
    }
    res[i] = res[i] || temp
  }

  return res
}

console.log(countSmaller([5, 2, 6, 1]))
console.log(countSmaller([-1, -1]))