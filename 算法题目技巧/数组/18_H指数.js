// https://leetcode.cn/problems/h-index/
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  citations.sort((a, b) => b - a)
  // console.log(citations)
  let res = 0
  for (let i = 0; i < citations.length;) {
    if (++i <= citations[i - 1]) {
      res = Math.max(res, i)
    }
    break
  }
  return res
};
hIndex([3, 0, 1, 6, 5])