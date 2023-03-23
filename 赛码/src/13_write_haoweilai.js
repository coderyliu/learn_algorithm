// 好未来

// 螺旋矩阵
var readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

var n = -1;
var row, col;
var res = [];
var res2 = [];
rl.on("line", function (line) {
  if (n < 0) {
    const arr = line.split(" ").map((i) => Number(i));
    row = arr[0];
    col = arr[1];
    res = [];
    res2 = [];
    n = row - 1;
    res.push(arr.slice(2));
  } else {
    const arr = line.split(" ").map((i) => Number(i));
    n--;
    res.push(arr);
    if (n === 0) {
      let loop = Math.ceil(row / 2);
      let offset = 1;
      let startX = 0;
      let startY = 0;
      if (row === 1) {
        console.log(res[0]);
      } else if (col === 1) {
        console.log([].concat(...res));
      }
      let mid = Math.floor(row / 2);
      while (loop) {
        let r = startX,
          l = startY;

        for (l; l < col - offset + startX; l++) {
          res2.push(res[r][l]);
        }

        for (r; r < row - offset + startY; r++) {
          res2.push(res[r][l]);
        }

        for (l; l > startY; l--) {
          res2.push(res[r][l]);
        }

        for (r; r > startY; r--) {
          res2.push(res[r][l]);
        }

        loop--;

        offset += 2;
        startX++;
        startY++;
      }

      if (row % 2 === 1 && col % 2 === 1) {
        res2.push(res[mid][mid]);
      }

      const len = col * row;
      while (res2.length > len) {
        res2.pop();
      }
      n = -1;
      console.log(res2.join(",") + ",");
    }
  }
});