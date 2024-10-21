// https://leetcode.cn/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/description/

function findTargetIn2DPlants(plants: number[][], target: number): boolean {
  // 方法一：暴力
  // *时间复杂度：O(n*m)
  // *空间复杂度：O(1)
  // const r: number = plants.length;
  // const l: number = plants[0]?.length || 0;
  // for (let i = 0; i < r; i++) {
  //   for (let j = 0; j < l; j++) {
  //     if (plants[i][j] === target) return true;
  //   }
  // }
  // return false;

  // 方法二：优化成一维数组
  // *时间复杂度：O(n*m)
  // *空间复杂度：O(n*m)
  // const arr: number[] = plants.flat();
  // return arr.includes(target);

  // 方法三：二分查找
  // *时间复杂度：O(n*m) + O(log(n*m))
  // *空间复杂度：O(n*m)
  const arr: number[] = plants.flat().sort((a, b) => a - b);
  let left: number = 0;
  let right: number = arr.length - 1;
  while (left <= right) {
    const mid: number = Math.floor(left + (right - left) / 2);
    if (arr[mid] === target) return true;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return false;
}

console.log(
  findTargetIn2DPlants(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ],
    5
  )
);

export {};
