const readline = require('readline-sync')

//对联
// 上联的这个字的平仄与下联对应位置的这个字的平仄要互不相同；
// 上联的最后一个字必须为仄声。因此相对应地，下联的最后一个字必须为平声
// 一声与二声为平声，三声与四声为仄声
// let total
// let val, sum = 3
// let flag = true
// let arr = []
// let res = []

// while (val = readline.question()) {
//   if (flag) {
//     total = parseInt(val)
//     flag = false
//     arr = []
//   } else {
//     if (total > 0) {
//       if (sum === 3) {
//         sum--
//       } else if (sum === 2) {
//         res.push(val.split(' ').map(i => parseInt(i[i.length - 1])))
//         sum--
//       } else {
//         res.push(val.split(' ').map(i => parseInt(i[i.length - 1])))
//         let p = res[0]
//         let q = res[1]
//         for (let i = 0; i < p.length; i++) {
//           if (i === p.length - 1 && (p[i] === 3 || p[i] === 4)) {
//             if (q[i] === 1 || q[i] === 2) {
//               arr.push('YES')
//               break
//             } else {
//               // console.log(4)
//               arr.push('NO')
//               break
//             }
//           } else if (i === p.length - 1 && (p[i] === 1 || p[i] === 2)) {
//             // console.log(3)
//             arr.push('NO')
//             break
//           }
//           if (p[i] === 1 || p[i] === 2) {
//             if (q[i] === 1 || q[i] === 2) {
//               // console.log(1)
//               arr.push('NO')
//               break
//             }
//           }
//           if (p[i] === 3 || p[i] === 4) {
//             if (q[i] === 3 || q[i] === 4) {
//               // console.log(2)
//               arr.push('NO')
//               break
//             }
//           }
//         }
//         res = []
//         sum = 3
//         total--
//       }
//     }
//     if (total === 0) {
//       console.log(arr.join('\n'))
//       flag = true
//     }
//   }

// }


//A值
let flag = 1
let val
let n
let arr
// gets(size)就可以82%了
while (val = readline.question()) {
  if (flag % 2 === 1) {
    flag++
    n = parseInt(val)
  } else {
    flag++
    arr = val.split(' ').map(i => parseInt(i))
    while (arr.length > 1) {
      arr.sort((a, b) => a - b)
      let m = arr[0]
      let n = arr[arr.length - 1]
      let ret = Math.floor((m + n) / 2)
      arr.splice(0, 1)
      arr.splice(arr.length - 1, 1)
      arr.push(ret)
    }
    console.log(arr[0])
  }
}