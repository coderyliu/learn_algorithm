// https://leetcode.cn/problems/merge-intervals/description/

function merge(intervals: number[][]): number[][] {
  // 先排序
  intervals.sort((a, b) => a[0] - b[0]);
  // 遍历
  const res: number[][] = [];
  let start = intervals[0][0];
  let end = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
    const [curStart, curEnd] = intervals[i];
    if (curStart <= end) {
      end = Math.max(end, curEnd);
    } else {
      res.push([start, end]);
      start = curStart;
      end = curEnd;
    }
  }
  res.push([start, end]);
  return res;
}

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18]
  ])
);

export {};
