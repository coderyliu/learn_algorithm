// // 本题为考试单行多行输入输出规范示例，无需提交，不计分。
// process.stdin.resume();
// process.stdin.setEncoding('ascii');

// var input = "";

// process.stdin.on('data', function (data) {
//   input += data;
// });

// process.stdin.on('end', function () {
//   let stack = []
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] == '(' || input[i] == '{' || input[i] == '[') {
//       stack.push(input[i])
//     } else if (input[i] == ')') {
//       const index = stack.lastIndexOf('(')
//       if (index === -1) {
//         console.log(`),${i+2}`)
//         break
//       }else{
//         stack.splice(index,1)
//       }
//     }else if (input[i] == '}') {
//       const index = stack.lastIndexOf('{')
//       if (index === -1) {
//         console.log(`{,${i+2}`)
//         break
//       }else{
//         stack.splice(index,1)
//       }
//     }else if (input[i] == ']') {
//       const index = stack.lastIndexOf('[')
//       if (index === -1) {
//         console.log(`],${i+2}`)
//         break
//       }else{
//         stack.splice(index,1)
//       }
//     }
//   }

//   if(!stack.length){
//     console.log(`${stack.pop(),input.length+1}`)
//   }
// });

// 本题为考试单行多行输入输出规范示例，无需提交，不计分。
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input = "";
var input_array = "";

process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  input_array = input.split(" ");
  let w1 = input_array[0]
  let w2 = input_array[1]

  let row = w1.length
  let col = w2.length
  let dp = new Array(row + 1).fill(0).map(i => new Array(col + 1).fill(0))

  for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= col; j++) {
      if (w1[i - 1] == w2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        dp[i][j] = Math.min(dp[i - 1][j - 1] + 1, dp[i - 1][j] + 1, dp[i][j - 1] + 1)
      }
    }
  }

  console.log(dp[row][col])
});