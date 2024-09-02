/**
 Do not return anything, modify board in-place instead.
 */
function gameOfLife(board: number[][]): void {
  // 解题思路：暴力
  // 八个方向分别是：上下左右，以及左上，右上，左下，右下 [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]]
  // 两个场景：
  // 1. 如果死细胞周围活细胞数恰好等于3，则该死细胞复活 0 -> 1
  // 2. 如果活细胞周围活细胞数少于2 或者 大于3， 则该活细胞死亡 1 -> 0

  const directions = [
    [-1, -1], // 左上
    [-1, 0], // 上
    [-1, 1], // 右上
    [0, -1], // 左
    [0, 1], // 右
    [1, -1], // 左下
    [1, 0], // 下
    [1, 1] // 右下
  ];

  const m = board.length;
  const n = board[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 看当前方向有几个活细胞
      let liveCount = 0;

      for (let d = 0; d < directions.length; d++) {
        const x = i + directions[d][0];
        const y = j + directions[d][1];

        // 边界判断
        if (
          x >= 0 &&
          x < m &&
          y >= 0 &&
          y < n &&
          (board[x][y] === 1 || board[x][y] === 2)
        ) {
          liveCount++;
        }
      }

      if (board[i][j] === 0) {
        // 1. 死细胞 -> 活细胞：0 -> 1
        if (liveCount === 3) {
          // 标记为 3 表示 死细胞 -> 活细胞(以前是死细胞)
          board[i][j] = 3;
        }
      } else {
        // 2. 活细胞 -> 死细胞：1 -> 0
        if (liveCount < 2 || liveCount > 3) {
          // 标记为 2 表示 活细胞 -> 死细胞（以前是活细胞）
          board[i][j] = 2;
        }
      }
    }
  }

  // 恢复状态
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 2) {
        board[i][j] = 0;
      } else if (board[i][j] === 3) {
        board[i][j] = 1;
      }
    }
  }
}

export {};
