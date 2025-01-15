// 给定一个区间的集合 intervals ，其中 intervals[i] = [start, end] 。返回需要移除区间的最小数量，使剩余区间互不重叠。
// 注意 只在一点上接触的区间是 不重叠的。例如 [1, 2] 和 [2, 3] 是不重叠的。

function eraseOverlapIntervals(intervals: number[][]): number {
  // * 时间复杂度: O(nlogn)
  // * 空间复杂度: O(logn)
  // 1.排序 - 按区间起始点排序
  intervals.sort((a, b) => a[0] - b[0]);

  // 2.判断是否重叠 - x轴方向上
  // * 如果intervals[0][1] > intervals[1][0] => 重叠
  // * 如果intervals[0][1] <= intervals[1][0] => 不重叠
  let arrow = 1; // 箭头数量
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] >= intervals[i - 1][1]) {
      // 没有重叠
      arrow++;
    } else {
      // 有重叠, 更新区间
      intervals[i][1] = Math.min(intervals[i][1], intervals[i - 1][1]);
    }
  }
  // 3.返回需要移除区间的最小数量 = 总区间数 - 箭头数量
  return intervals.length - arrow;
}

console.log(
  eraseOverlapIntervals([
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3]
  ])
); // 1
console.log(
  eraseOverlapIntervals([
    [1, 2],
    [1, 2],
    [1, 2]
  ])
); // 2
console.log(
  eraseOverlapIntervals([
    [1, 2],
    [2, 3]
  ])
); // 0

export {};
