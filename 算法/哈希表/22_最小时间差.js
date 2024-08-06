// https://leetcode.cn/problems/569nqc/

/**
 * @param {string[]} timePoints
 * @return {number}
 */
// ?转化为分钟排序--》求最小差值
var findMinDifference = function (timePoints) {
  const arr = timePoints.map(time => {
    const date = time.split(':')
    return Number(date[0]) * 60 + Number(date[1])
  }).sort((a, b) => a - b)

  let min = arr[1] - arr[0]
  for (let i = 1; i < arr.length - 1; i++) {
    min = Math.min(min, arr[i + 1] - arr[i])
  }

  min = Math.min(min, 1440 - arr[arr.length - 1] + arr[0]) //防止["23:59", "00:00"]出现

  return min
};

findMinDifference(["23:59", "00:00"])