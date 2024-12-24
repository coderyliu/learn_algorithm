// 展览馆展出来自 13 个朝代的文物，每排展柜展出 5 个文物。
// 某排文物的摆放情况记录于数组 places，其中 places[i] 表示处于第 i 位文物的所属朝代编号。
// 其中，编号为 0 的朝代表示未知朝代。请判断并返回这排文物的所属朝代编号是否能够视为连续的五个朝代（如遇未知朝代可算作连续情况）。

// 输入: places = [0, 6, 9, 0, 7]
// 输出: True

function checkDynasty(places: number[]): boolean {
  // 方法一：排序 + 遍历
  // * 时间复杂度：O(nlogn)
  // * 空间复杂度：O(1)
  // let zeroCount = 0;
  // // 统计未知朝代的数量
  // for (let i = 0; i < places.length; i++) {
  //   if (places[i] === 0) zeroCount++;
  // }
  // // 排序
  // places.sort((a, b) => a - b);
  // // 遍历
  // for (let i = 0; i < places.length - 1; i++) {
  //   if (places[i] === 0) continue; // 未知朝代跳过
  //   if (places[i] === places[i + 1]) return false; // 如果相邻的朝代相同，则不连续
  //   if (places[i] + 1 !== places[i + 1] && zeroCount <= 0) return false; // 如果相邻的朝代不连续，且没有未知朝代，则不连续
  //   if (places[i] + 1 !== places[i + 1] && zeroCount > 0) {
  //     zeroCount -= places[i + 1] - places[i] - 1;
  //     if (zeroCount < 0) return false;
  //     continue;
  //   }
  // }
  // return true;

  // 方法二：哈希表
  // ?判断满足朝代连续只需要满足下面两个条件
  // 1. 各个朝代编号不同
  // 2. 最大的朝代编号与最小的朝代编号的差值小于 5
  // * 时间复杂度：O(n)
  // * 空间复杂度：O(n)
  const set = new Set();
  let min = Infinity;
  let max = -Infinity;
  for (let i = 0; i < places.length; i++) {
    if (places[i] === 0) continue; // 未知朝代跳过
    if (set.has(places[i])) return false; // 如果朝代编号已存在，则不连续
    set.add(places[i]);
    min = Math.min(min, places[i]);
    max = Math.max(max, places[i]);
  }
  return max - min < 5;
}

console.log(checkDynasty([4, 1, 6, 0, 9])); // false
console.log(checkDynasty([10, 11, 0, 12, 6])); // false

export {};
