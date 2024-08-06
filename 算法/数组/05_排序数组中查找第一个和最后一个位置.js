var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1,
    mid
  while (left <= right) {
    mid = left + Math.floor((right - left) / 2)
    if (nums[mid] < target) {
      left = mid + 1
    } else if (nums[mid] > target) {
      right = mid - 1
    } else {
      break
    }
  }
  if (left > right) return [-1, -1]
  let i = mid,
    j = mid
  while (nums[i] === nums[i - 1]) i--
  while (nums[j] === nums[j + 1]) j++
  return [i, j]
}
console.log(search([5, 7, 7, 8, 8, 10], 8))
console.log(search([5, 7, 7, 8, 8, 10], 6))
console.log(search([1], 1))
console.log(search([2, 2], 2))