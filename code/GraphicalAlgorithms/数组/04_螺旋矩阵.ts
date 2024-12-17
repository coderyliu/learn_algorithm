// 给定一个二维数组 array，请返回「螺旋遍历」该数组的结果。
// 螺旋遍历：从左上角开始，按照 向右、向下、向左、向上 的顺序 依次 提取元素，然后再进入内部一层重复相同的步骤，直到提取完所有元素。

function spiralArray(array: number[][]): number[] {
  const result: number[] = []; // 结果数组
  const row = array.length; // 行数
  const col = array[0].length; // 列数
  if (row === 0 || col === 0) return result;
  let startX = 0; // 起始行
  let startY = 0; // 起始列
  let offset = 1; // 偏移量
  let loop = Math.ceil(row / 2); // 循环次数
  let mid = Math.floor(row / 2); // 中间行
  while (loop--) {
    let i: number = startX; // 行
    let j: number = startY; // 列

    // 上：从左到右
    for (j; j < col - offset + startY; j++) {
      result.push(array[i][j]);
    }
    // 右：从上到下
    for (i; i < row - offset + startX; i++) {
      result.push(array[i][j]);
    }
    // 下：从右到左
    for (j; j > startY; j--) {
      result.push(array[i][j]);
    }
    // 左：从下到上
    for (i; i > startX; i--) {
      result.push(array[i][j]);
    }

    startX++;
    startY++;
    offset += 2;
  }

  if (row % 2 !== 0 && col % 2 !== 0) {
    result.push(array[mid][mid]);
  }

  while (result.length > row * col) {
    result.pop();
  }

  return result;
}

console.log(
  spiralArray([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ])
);

export {};
