// 给你一个 m 行 n 列的矩阵 matrix ，请按照顺时针螺旋顺序 ，返回矩阵中的所有元素。

function spiralOrder(matrix: number[][]): number[] {
  const res: number[] = [];
  const row = matrix.length; // 行数
  const col = matrix[0].length; // 列数
  // 定义循环一个圈的起始位置
  let startX: number = 0;
  let startY: number = 0;
  // 需要循环的次数: 取最小
  let loop = Math.ceil(row / 2);
  const mid = Math.floor(row / 2);
  // 偏移量
  let offset: number = 1;

  // 遍历矩阵
  while (loop) {
    let i: number = startX;
    let j: number = startY;

    // 下面开始模拟转一圈
    // 模拟上侧从左到右（左闭右开）
    for (j; j < col - offset + startY; j++) {
      res.push(matrix[i][j]);
    }

    // 模拟右侧从上到下（左闭右开）
    for (i; i < row - offset + startX; i++) {
      res.push(matrix[i][j]);
    }

    // 模拟下侧从右到左
    for (j; j > startY; j--) {
      res.push(matrix[i][j]);
    }

    // 模拟左侧从下到上
    for (i; i > startX; i--) {
      res.push(matrix[i][j]);
    }

    loop--;
    offset += 2;

    startX++;
    startY++;
  }

  if (row % 2 !== 0 && col % 2 !== 0) {
    res.push(matrix[mid][mid]);
  }

  while (res.length > row * col) {
    res.pop();
  }

  return res;
}

export {};
