// https://leetcode.cn/problems/SsGoHC/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// ?归并排序  
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  let res = [intervals[0]]
  let last
  let curr

  for (let i = 1; i < intervals.length; i++) {
    curr = intervals[i]
    last = res[res.length - 1]
    if (curr[0] <= last[1]) {
      last[1] = Math.max(last[1], curr[1])
    } else {
      res.push(curr)
    }
  }

  console.log(res)
  return res
};
merge([
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18]
])