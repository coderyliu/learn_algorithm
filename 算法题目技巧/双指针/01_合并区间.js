/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length === 0) return []
  intervals.sort((a, b) => a[0] - b[0])
  const mergeArr = [intervals[0]]
  let last
  let curr
  for (let j = 1; j < intervals.length; j++) {
    curr = intervals[j]
    last = mergeArr[mergeArr.length - 1]
    if (last[1] >= curr[0]) {
      last[1] = Math.max(curr[1], last[1])
    } else {
      mergeArr.push(intervals[j])
    }
  }

  return mergeArr
};