// 假设有一个很长的花坛，一部分地块种植了花，另一部分却没有。可是，花不能种植在相邻的地块上，它们会争夺水源，两者都会死去。
// 给你一个整数数组 flowerbed 表示花坛，由若干 0 和 1 组成，其中 0 表示没种植花，1 表示种植了花。
// 另有一个数 n ，能否在不打破种植规则的情况下种入 n 朵花？能则返回 true ，不能则返回 false 。

function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  // 方法：贪心
  // 局部最优：每次种花时，尽量种在当前位置，这样可以减少种花的次数
  // 全局最优：在满足种花次数的情况下，尽量种在当前位置
  // * 时间复杂度：O(n)
  // * 空间复杂度：O(1)
  // 遍历数组，如果当前位置为 0，并且前后位置都为 0，则可以种花
  // 注意边界情况
  for (let i = 0; i < flowerbed.length; i++) {
    if (
      flowerbed[i] === 0 &&
      (flowerbed[i - 1] === 0 || flowerbed[i - 1] === undefined) &&
      (flowerbed[i + 1] === 0 || flowerbed[i + 1] === undefined)
    ) {
      flowerbed[i] = 1;
      n--;
    }
  }
  return n <= 0;
}

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1)); // true
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2)); // false

export {};
