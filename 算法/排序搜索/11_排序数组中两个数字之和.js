// https://leetcode.cn/problems/kLl5u1/
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  const map = new Map()
  for (let i = 0; i < numbers.length; i++) {
    if (map.has(target - numbers[i])) {
      return [map.get(target - numbers[i]), i]
    } else {
      map.set(numbers[i], i)
    }
  }
};