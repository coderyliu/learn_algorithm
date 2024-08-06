// https://leetcode.cn/problems/unique-number-of-occurrences/
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const map = new Map()
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], map.has(arr[i]) ? map.get(arr[i]) + 1 : 1)
  }

  const res = new Set(map.values())

  return res.size === map.size
};

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]))
console.log(uniqueOccurrences([1, 2]))