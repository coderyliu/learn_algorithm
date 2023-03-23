// https: //leetcode.cn/problems/island-perimeter/

/**
 * @param {number[][]} grid
 * @return {number}
 */
const islandPerimeter = function (grid) {
  let res = 0;
  let lh = grid.length;
  let lv = grid[0].length;
  for (let i = 0; i < lh; i++) {
    for (let j = 0; j < lv; j++) {
      if (grid[i][j]) {
        if (!grid[i][j - 1]) res += 2;
        if (!grid[i - 1] || !grid[i - 1][j]) res += 2;
      }
    }
  }
  return res;
};