// https://leetcode.cn/problems/word-search/

function exist(board: string[][], word: string): boolean {
  // DFS：深度优先搜索
  const r = board.length;
  const l = board[0].length;
  const dfs = (idx: number, i: number, j: number): boolean => {
    // base case
    if (i < 0 || j < 0 || i >= r || j >= l || word[idx] !== board[i][j])
      return false;
    // 递归结束条件
    if (!word[idx + 1]) return true;

    // 标记已经遍历过的节点
    board[i][j] = "";
    // 递归
    const bool =
      dfs(idx + 1, i - 1, j) ||
      dfs(idx + 1, i, j + 1) ||
      dfs(idx + 1, i + 1, j) ||
      dfs(idx + 1, i, j - 1);

    if (!bool) board[i][j] = word[idx];
    return bool;
  };

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < l; j++) {
      const bool = dfs(0, i, j);
      if (bool) return true;
    }
  }

  return false;
}

console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"]
    ],
    "ABCCED"
  )
);

export {};
