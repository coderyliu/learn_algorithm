// https://leetcode.cn/problems/flood-fill/

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  const m = image.length
  const n = image[0].length
  const initColor = image[sr][sc]

  // 深度优先遍历函数
  const dfs = (i, j) => {
    if (i < 0 || i >= m || j < 0 || j >= n || image[i][j] !== initColor || image[i][j] === color) return

    image[i][j] = color

    dfs(i + 1, j)
    dfs(i, j + 1)
    dfs(i - 1, j)
    dfs(i, j - 1)
  }

  dfs(sr, sc)

  return image
};