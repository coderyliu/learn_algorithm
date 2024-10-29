// https://leetcode.cn/problems/search-a-2d-matrix-ii/description/

function searchMatrix(matrix: number[][], target: number): boolean {
  // 方法一：暴力
  // *时间复杂度：O(m*n)
  // *空间复杂度：O(1)
  // const m = matrix.length;
  // const n = matrix[0].length;
  // for (let i = 0; i < m; i++) {
  //   for (let j = 0; j < n; j++) {
  //     if (matrix[i][j] === target) return true;
  //   }
  // }
  // return false;

  // 方法二：变为一维数组，排序然后二分查找
  // *时间复杂度：O(m*n)
  // *空间复杂度：O(m*n)
  // const newArr = matrix.flat().sort((a, b) => a - b);
  // let l = 0;
  // let r = newArr.length - 1;
  // while (l <= r) {
  //   const mid = Math.floor(l + (r - l) / 2);
  //   if (newArr[mid] > target) {
  //     r = mid - 1;
  //   } else if (newArr[mid] < target) {
  //     l = mid + 1;
  //   } else {
  //     return true;
  //   }
  // }
  // return false;

  // 方法三：从右上角开始搜索(从左下角也可以) - 最优解 - 二叉搜索树原理
  // *时间复杂度：O(m+n)
  // *空间复杂度：O(1)
  const m = matrix.length;
  const n = matrix[0].length;
  let x = 0;
  let y = n - 1;
  while (x < m && y >= 0) {
    if (matrix[x][y] > target) {
      y--;
    } else if (matrix[x][y] < target) {
      x++;
    } else {
      return true;
    }
  }
  return false;
}

console.log(
  searchMatrix(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19]
    ],
    5
  )
);

export {};
