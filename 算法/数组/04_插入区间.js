// https://leetcode.cn/problems/insert-interval/
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  intervals.push(newInterval)
  intervals.sort((a, b) => a[0] - b[0])

  const mergeArr = [intervals[0]]
  let last
  let curr
  for (let i = 1; i < intervals.length; i++) {
    curr = intervals[i]
    last = mergeArr[mergeArr.length - 1]
    if (last[1] >= curr[0]) {
      last[1] = Math.max(last[1], curr[1])
    } else {
      mergeArr.push(curr)
    }
  }

  return mergeArr
};