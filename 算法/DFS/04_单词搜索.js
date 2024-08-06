// https://leetcode.cn/problems/word-search/

var exist = function (board, word) {
  const W = board.length;
  const H = board[0].length
  const K = word.length

  //搜索的方向
  const dirs = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0]
  ]

  function helper(i, j, k) {
    if (k >= K) return true
    if (i >= W || j >= H || i < 0 || j < 0) return false

    if (board[i][j] !== word[k]) return false
    board[i][j] = '*'
    for (let [x, y] of dirs) {
      if (helper(i + x, j + y, k + 1)) return true
    }
    board[i][j] = word[k]
    return false
  }
  for (let i = 0; i < W; i++) {
    for (let j = 0; j < H; j++) {
      if (helper(i, j, 0)) return true
    }
  }
  return false
};