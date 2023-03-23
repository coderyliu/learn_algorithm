/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// ?双指针
var threeSum = function (nums) {
  if (nums.length < 3) return []
  const res = new Set()
  nums.sort((a, b) => a - b)
  let len = nums.length
  for (let i = 0; i < len - 2; i++) {
    if (nums[i] > 0) break
    let left = i + 1
    let right = len - 1

    while (left < right) {
      let sum = nums[left] + nums[right] + nums[i]
      if (sum > 0) {
        right--
        continue
      }
      if (sum < 0) {
        left++
        continue
      }
      if (sum === 0) res.add(`${nums[i]},${nums[left]},${nums[right]}`)
      left++
      right--
    }
  }

  console.log(Array.from(res).map(i => i.split(',')))
};
threeSum([-1, 0, 1, 2, -1, 4])