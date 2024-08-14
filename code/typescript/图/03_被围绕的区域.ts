/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): string[][] {
  // !这道题的核心点：就是找到边缘的O，以及和边缘O相连的O
  const r = board.length;
  const l = board[0].length;

  const dfs = (i: number, j: number) => {
    // base case
    if (i < 0 || j < 0 || i >= r || j >= l || board[i][j] !== "O") return;

    board[i][j] = "#";
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i + 1, j);
    dfs(i, j - 1);
  };

  // 找到第一行和最后一行的O，标记为'#'
  for (let i = 0; i < r; i++) {
    dfs(i, 0);
    dfs(i, l - 1);
  }

  // 找到第一列和最后一列的O，标记为'#'
  for (let i = 0; i < l; i++) {
    dfs(0, i);
    dfs(r - 1, i);
  }

  // 遍历剩下的O， 变为X
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < l; j++) {
      if (board[i][j] === "O") {
        board[i][j] = "X";
      }
    }
  }

  // 把标记为‘#’变为O
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < l; j++) {
      if (board[i][j] === "#") {
        board[i][j] = "O";
      }
    }
  }

  return board;
}

export {};
