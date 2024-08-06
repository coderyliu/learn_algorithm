// https://leetcode.cn/problems/nZZqjQ/solution/er-fen-by-cai-zhi-wei-anuy/

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
// ?二分查找
var minEatingSpeed = function (piles, h) {
  let len = piles.length
  piles.sort((a, b) => a - b)
  if (h === len) return piles[len - 1]

  let min = 1
  let max = piles[len - 1]

  function complete(speed) {
    const sum = piles.reduce((pre, cur) => pre + Math.ceil(cur / speed), 0)
    return sum <= h
  }

  while (min < max) {
    const mid = Math.floor((max - min) / 2) + min
    if (complete(mid)) {
      max = mid
    } else {
      min = mid + 1
    }
  }

  return min
};