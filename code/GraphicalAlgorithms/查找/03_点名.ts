// 某班级 n 位同学的学号为 0 ~ n-1。点名结果记录于升序数组 records。假定仅有一位同学缺席，请返回他的学号。

// 示例：
// 输入：records = [0, 1, 2, 3, 5]
// 输出：4

function takeAttendance(records: number[]): number {
  // 方法一：暴力
  // * 时间复杂度：O(n)
  // * 空间复杂度：O(1)
  // for (let i = 0; i < records.length; i++) {
  //   if (records[i] !== i) {
  //     return i;
  //   }
  // }
  // return records.length;

  // 方法二：二分查找
  // * 时间复杂度：O(logn)
  // * 空间复杂度：O(1)
  let l = 0;
  let r = records.length - 1;
  while (l <= r) {
    const mid = Math.floor(l + (r - l) / 2);
    if (records[mid] === mid) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return l;
}

export {};
