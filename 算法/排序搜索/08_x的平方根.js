// https://leetcode.cn/problems/sqrtx/

/**
 * @param {number} x
 * @return {number}
 */
// ?二分查找法
var mySqrt = function (x) {
  let beg = 0
  let end = x
  if (x === 1 || x === 0) return x
  while (end - beg !== 1) {
    let mid = Math.floor((beg + end) / 2)
    if (mid * mid === x) {
      return mid
    } else if (mid * mid > x) {
      end = mid
    } else {
      beg = mid
    }
  }
  return beg
};