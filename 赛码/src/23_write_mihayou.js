var readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

var n = -1;

rl.on('line', function (line) {
  if (n < 0) {
    n = parseInt(line.trim())
  } else {
    var arr = line.split(' ');

    let pre=arr[0]
    let count=0
    for(let i=1;i<arr.length;i++){
      while(arr[i]<pre){
        arr[i]=arr[i]*2
        count++
      }
      pre=arr[i]
    }
    n=-1
    console.log(count)
  }
});

// var n = -1;
// let k

// rl.on('line', function (line) { // javascript每行数据的回调接口
//   if (n < 0) { // 测试用例第一行读取n
//     let arr = line.split(' ').map(i => Number(i));
//     k = arr[1]
//     n = arr[0]
//   } else {
//     let str = line

//     let needle = 'mihoyo'
//     let l, r
//     let p=0

//     while (str.length > 0) {
//       let index = str.indexOf(needle,p)
//       if (index === -1) break

//       p=index+6
//       if (!l) {
//         l = index
//       }

//       k--
//       if(k===0){
//         r=index+6
//       }
//     }

//     if(k!==0) console.log(-1)
//     console.log(`${l} ${r}`)
//   }
// });