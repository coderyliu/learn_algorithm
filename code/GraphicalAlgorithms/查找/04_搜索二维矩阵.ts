// https://leetcode.cn/problems/search-a-2d-matrix-ii/description/

function findTargetIn2DPlants(plants: number[][], target: number): boolean {
  // 方法一：暴力
  // * 时间复杂度：O(m * n)
  // * 空间复杂度：O(1)
  // for (let i = 0; i < plants.length; i++) {
  //   for (let j = 0; j < plants[i].length; j++) {
  //     if (plants[i][j] === target) {
  //       return true;
  //     }
  //   }
  // }
  // return false;

  // 方法二：排序 + 二分查找
  // * 时间复杂度：O(m * n * log(m * n))
  // * 空间复杂度：O(m * n)
  // const arr = plants.flat().sort((a, b) => a - b);
  // let l = 0;
  // let r = arr.length - 1;
  // while (l <= r) {
  //   const mid = Math.floor(l + (r - l) / 2);
  //   if (arr[mid] > target) {
  //     r = mid - 1;
  //   } else if (arr[mid] < target) {
  //     l = mid + 1;
  //   } else {
  //     return true;
  //   }
  // }
  // return false;

  // 方法三：Z字形查找
  // * 时间复杂度：O(m + n)
  // * 空间复杂度：O(1)
  const m = plants.length;
  const n = plants[0]?.length || 0;
  if (m === 0 || n === 0) return false;
  let i = 0;
  let j = n - 1;
  while (i < m && j >= 0) {
    if (plants[i][j] === target) {
      return true;
    } else if (plants[i][j] > target) {
      j--;
    } else {
      i++;
    }
  }
  return false;
}

export {};
