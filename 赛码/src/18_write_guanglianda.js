const readline = require('readline-sync')

let line
let flag = false
let n, m,p
let res = []
let a1,a2

while (line = readline.question()) {
  if (!flag) {
    n = Number(line)
    p=2
    flag = true
  } else {
    const arr=line.split(' ').map(i => Number(i))
    p--
    if(p===1) a1=arr
    if(p===0) a2=arr
    if (p === 0) {
      let count=0
      const map=new Map()
      for(let i=0;i<a1.length;i++){
        map.set(a1[i],i)
      }

      for(let i=0;i<a2.length;i++){
        const index=map.get(a2[i])
        if(index>i) count++
      }

      flag = false
      console.log(count)
    }
  }
}
// while (line = readline.question()) {
//   if (!flag) {
//     const arr = line.split(' ').map(i => Number(i))
//     n = arr[0]
//     m = arr[1]
//     res = []
//     flag = true
//   } else {
//     res.push(line.split(' ').map(i => Number(i)))
//     m--
//     if (m === 0) {
//       let newArr = [res[0]]
//       let curr
//       let last

//       for (let i = 1; i < res.length; i++) {
//         curr = res[i]
//         last = newArr[newArr.length - 1]
//         if (last[1] >= curr[0]) {
//           last[1] = Math.max(curr[1], last[1])
//           last[2] = last[2] + curr[2]
//         } else {
//           newArr.push(curr)
//         }
//       }

//       let arr = []
//       for (let i = 1; i <= n; i++) {
//         arr.push(i)
//       }

//       let count = 0
//       for (const item of newArr) {
//         let start=item[0]
//         let end=item[1]
//         n = n - (end - start + 1)
//         count += item[2]
//       }

//       flag = false
//       console.log(count + n)
//     }
//   }
// }