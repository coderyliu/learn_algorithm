/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = new Map()
  for (const item of nums) {
    map.set(item, map.has(item) ? map.get(item) + 1 : 1)
  }
  const res = []
  const result = []
  for (const item of map) {
    res.push(item)
  }
  res.sort((a, b) => a[1] - b[1])
  let index = res.length - 1
  for (let i = 0; i < k; i++) {
    result.push(res[index--][0])
  }
  return result
};