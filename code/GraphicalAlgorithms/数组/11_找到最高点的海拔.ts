// 有一个自行车手打算进行一场公路骑行，这条路线总共由 n + 1 个不同海拔的点组成。自行车手从海拔为 0 的点 0 开始骑行.
// 给你一个长度为 n 的整数数组 gain ，其中 gain[i] 是点 i 和点 i + 1 的净海拔高度差（0 <= i < n）。请你返回 最高点的海拔 。

function largestAltitude(gain: number[]): number {
  // 方法一：暴力
  // * 时间复杂度：O(n)
  // * 空间复杂度：O(n)
  //   const altitude: number[] = [0];
  //   for (let i = 0; i < gain.length; i++) {
  //     altitude[i + 1] = altitude[i] + gain[i];
  //   }
  //   return Math.max(...altitude);

  // 方法二：优化空间复杂度 - 前缀和
  // * 时间复杂度：O(n)
  // * 空间复杂度：O(1)
  let max = 0;
  let altitude = 0;
  for (const g of gain) {
    altitude += g;
    max = Math.max(max, altitude);
  }
  return max;
}

console.log(largestAltitude([-5, 1, 5, 0, -7])); // 1
console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2])); // 0

export {};
