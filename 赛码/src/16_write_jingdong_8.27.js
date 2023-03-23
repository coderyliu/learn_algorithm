// // 本题为考试多行输入输出规范示例，无需提交，不计分。
// ?简单
// var readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
//   terminal: false
// });

// var n = -1; // 初始状态为负数，表示还没开始读取
// var ans = 0;

// rl.on('line', function (line) { // javascript每行数据的回调接口
//   if (n < 0) { // 测试用例第一行读取n
//     let arr = line.split(' ').map(i => Number(i))
//     n = arr[0]
//     ans = arr[1]
//   } else {
//     let str = line
//     str = str.slice(0, ans).toUpperCase() + str.slice(ans).toLowerCase()

//     console.log(str)
//     n = -1
//   }
// });

// ?长城
var readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

var n = -1;
rl.on("line", function (line) {
  if (n < 0) {
    n = parseInt(line.trim());
  } else {
    var tokens = line.split(" ").map((i) => Number(i));
    let count = 0;
    let max1 = 0,
      res1, res2,
      max2 = 0;
    const map1 = new Map()
    const map2 = new Map()
    for (let i = 0; i < tokens.length; i++) {
      if (i % 2 === 0) {
        map1.set(tokens[i], map1.has(tokens[i]) ? map1.get(tokens[i]) + 1 : 1)
      } else {
        map2.set(tokens[i], map2.has(tokens[i]) ? map2.get(tokens[i]) + 1 : 1)
      }
    }

    for (const item of map1) {
      if (item[1] > max1) {
        max1 = item[1]
        res1 = item[0]
      }
    }

    for (const item of map2) {
      if (item[1] > max2) {
        max2 = item[1]
        res2 = item[0]
      }
    }

    for (let i = 0; i < tokens.length; i++) {
      if (i % 2 === 0 && tokens[i] !== res1) {
        count++
      } else if (i % 2 !== 0 && tokens[i] !== res2) {
        count++
      }
    }
    n = -1;
    console.log(count);
  }
});

// ?矩阵相邻为合为奇数
// process.stdin.resume();
// process.stdin.setEncoding('ascii');

// var input = "";


// process.stdin.on('data', function (data) {
//   input += data;
// });

// process.stdin.on('end', function () {
//   const l = []
//   const r = []
//   for (let i = 1; i <= Math.pow(Number(input), 2); i++) {
//     if (i % 2 == 0) {
//       r.push(i)
//     } else {
//       l.push(i)
//     }
//   }

//   let m = Number(input)
//   let n = Number(input)
//   let res = new Array(m).fill(0).map(i => new Array(n).fill(0))
//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       if (i % 2 == 0) {
//         if (j % 2 == 0) {
//           res[i][j] = l.shift()
//         } else {
//           res[i][j] = r.shift()
//         }
//       } else {
//         if (j % 2 == 0) {
//           res[i][j] = r.shift()
//         } else {
//           res[i][j] = l.shift()
//         }
//       }
//     }
//   }

//   for(const item of res){
//     console.log(item.join(' '))
//   }
// });