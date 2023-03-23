// https://leetcode.cn/problems/valid-sudoku/
/**
 * @param {character[][]} board
 * @return {boolean}
 */
// 1.暴力
var isValidSudoku = function (board) {
  const arrCol = Array(9).fill('.').map(i => Array(9).fill('.'))
  const res1 = [],res2 = [],res3 = [],res4 = [],res5 = [],res6 = [],res7 = [],res8 = [],res9 = []
  // 1.1验证每一行
  for (let i = 0; i < 9; i++) {
    const map = generateMap()
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === '.') continue
      if (board[i][j] !== '.') {
        arrCol[j][i] = board[i][j]
      }
      if (i < 3 && j < 3) {
        res1.push(board[i][j])
      } else if (i < 3 && j < 6) {
        res2.push(board[i][j])
      } else if (i < 3 && j < 9) {
        res3.push(board[i][j])
      } else if (i < 6 && j < 3) {
        res4.push(board[i][j])
      } else if (i < 6 && j < 6) {
        res5.push(board[i][j])
      } else if (i < 6 && j < 9) {
        res6.push(board[i][j])
      } else if (i < 9 && j < 3) {
        res7.push(board[i][j])
      } else if (i < 9 && j < 6) {
        res8.push(board[i][j])
      } else if (i < 9 && j < 9) {
        res9.push(board[i][j])
      }

      if (map.has(board[i][j])) {
        map.delete(board[i][j])
      } else if (!map.has(board[i][j])) {
        return false
      }
    }
  }
  const res = [res1, res2, res3, res4, res5, res6, res7, res8, res9]
  // 验证每一列
  for (let i = 0; i < 9; i++) {
    const map = generateMap()
    for (let j = 0; j < 9; j++) {
      if (arrCol[i][j] === '.') continue
      if (map.has(arrCol[i][j])) {
        map.delete(arrCol[i][j])
      } else if (!map.has(arrCol[i][j])) {
        return false
      }
    }
  }

  // 验证条件三
  for (let i = 0; i < 9; i++) {
    const map = generateMap()
    const arr = res[i]
    for (let j = 0; j < arr.length; j++) {
      if (map.has(arr[j])) {
        map.delete(arr[j])
      } else if (!map.has(arr[j])) {
        return false
      }
    }
  }

  return true
};

function generateMap() {
  const map = new Map()
  for (let i = 1; i <= 9; i++) {
    map.set(i.toString(), true)
  }

  return map
}

console.log(isValidSudoku([
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]))
console.log(isValidSudoku([["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
))

// 2.简化
var isValidSudoku = function(board) {
  var row = new Array(9);
  var col = new Array(9);
  var box = new Array(9);
  for(let i = 0;i < 9;i++){
      row[i] = new Array(10).fill(0);
      col[i] = new Array(10).fill(0);
      box[i] = new Array(10).fill(0);
  }
  for(let i = 0;i < 9;i++){
      for(let j = 0;j < 9;j++){
          if(board[i][j] === ".") continue;
          let temp = parseInt(board[i][j]);
          if(row[i][temp] === 1) return false;
          if(col[j][temp] === 1) return false;
          if(box[Math.floor(i / 3) * 3 + Math.floor(j / 3)][temp] === 1) return false;

          row[i][temp] = 1;
          col[j][temp] = 1;
          box[Math.floor(i / 3) * 3 + Math.floor(j / 3)][temp] = 1;
      }
  }
  return true;

};