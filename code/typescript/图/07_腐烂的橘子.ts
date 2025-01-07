// 在给定的网格中，每个单元格可以有以下三个值之一：
// 值 0 表示空单元格；
// 值 1 表示新鲜橘子；
// 值 2 表示腐烂的橘子。
// 每分钟，腐烂的橘子（如果存在）会沿四个方向传播腐烂，即新鲜橘子变腐烂。
// 返回直到单元格中没有新鲜橘子为止所必须经过的最小分钟数。如果不可能，返回 -1。

function orangesRotting(grid: number[][]): number {
  // 方法：BFS - 广度优先搜索
  const rows = grid.length;
  const cols = grid[0]?.length || 0;
  let minutes: number = 0;
  const queue: number[][] = [];

  // 遍历每个单元格
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 2) {
        //queue里存储所有腐烂橘子的周围四个点，代表了第一分钟的所有起点
        queue.push([i - 1, j]);
        queue.push([i, j + 1]);
        queue.push([i + 1, j]);
        queue.push([i, j - 1]);
      }
    }
  }

  while (queue.length) {
    const length = queue.length;
    for (let i = 0; i < length; i++) {
      // 起点
      const [i, j] = queue.shift()!;
      // 边界条件
      if (i < 0 || i >= rows || j < 0 || j >= cols) continue;
      // 新鲜橘子
      if (grid[i][j] === 1) {
        // 腐烂橘子
        grid[i][j] = 2;
        // 腐烂橘子向四周传播
        queue.push([i - 1, j]);
        queue.push([i, j + 1]);
        queue.push([i + 1, j]);
        queue.push([i, j - 1]);
      } else {
        // 空单元格/腐烂橘子
        continue;
      }
    }
    // 分钟数+1
    minutes++;
  }

  // 检查是否还有新鲜橘子
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) return -1;
    }
  }

  // 如果所有橘子都腐烂了，返回分钟数
  return Math.max(0, minutes - 1);
}

console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1]
  ])
); // 4
console.log(
  orangesRotting([
    [2, 1, 1],
    [0, 1, 1],
    [1, 0, 1]
  ])
); // -1
console.log(orangesRotting([[0, 2]])); // 0

export {};
