// 某班级考试成绩按非严格递增顺序记录于整数数组 scores，请返回目标成绩 target 的出现次数.

function countTarget(scores: number[], target: number): number {
  //  方法一：暴力
  // * 时间复杂度：O(n)
  // * 空间复杂度：O(1)
  // let count = 0;
  // for (const score of scores) {
  //   if (score === target) count++;
  // }
  // return count;

  // 方法二：二分查找
  let l = 0;
  let r = scores.length - 1;
  while (l <= r) {
    const mid = Math.floor(l + (r - l) / 2);
    if (scores[mid] > target) {
      r = mid - 1;
    } else if (scores[mid] < target) {
      l = mid + 1;
    } else {
      // *找到目标成绩，本质上是寻找左右边界
      let start = mid;
      let end = mid;
      while (start >= 0 && scores[start] === target) {
        start--;
      }
      while (end < scores.length && scores[end] === target) {
        end++;
      }
      return end - start - 1;
    }
  }
  return 0;
}

console.log(countTarget([2, 2, 3, 4, 4, 4, 5, 6, 6, 8], 4));

export {};
