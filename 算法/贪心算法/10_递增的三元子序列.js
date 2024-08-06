/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  if (nums.length < 3) return false
  let first = nums[0]
  let second = Number.MAX_VALUE
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i]
    if (num > second) {
      return true
    } else if (num > first) {
      second = num
    } else {
      first = num
    }
  }

  return false
};
console.log(increasingTriplet([4, 5, 2147483647, 1, 2]))
console.log(increasingTriplet([1, 2, 3, 4, 5]))
console.log(increasingTriplet([6, 7, 1, 2]))
console.log(increasingTriplet([5, 4, 3, 2, 1]))
console.log(increasingTriplet([2, 1, 5, 0, 4, 6]))
console.log(increasingTriplet([20, 100, 10, 12, 5, 13]))