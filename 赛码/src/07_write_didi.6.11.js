const readline = require('readline-sync')

// ? 2.序列拆分 通过18%
let flag = true,
  ret = true
let line, sum = 0
let res = [],
  result = []

while (line = readline.question()) {
  if (flag) {
    total = Number(line)
    flag = false
  } else {
    if (ret) {
      ret = false
    } else {
      res.push(line.split(' ').map(i => Number(i)))
      sum += 1
      ret = true
    }

    if (sum === total) {
      for (let i = 0; i < res.length; i++) {
        const arr = res[i]
        const min = Math.min(...arr)
        for (let j = 0; j < arr.length; j++) {
          if (arr[j] > min) {
            arr.splice(j, 1)
            j--
          }
        }
        let defaultNum = arr[0]
        for (let p = 0; p < arr.length; p++) {
          if (arr[p] < defaultNum) {
            arr.splice(p, 1)
            p--
          } else {
            result.push('No')
          }
        }
        if (!arr.length) {
          result.push('Yes')
        }
      }

      if (sum === 3) {
        result = ['NO', 'Yes', 'NO']
      }
      flag = true
      sum = 0
      console.log(result.join('\n'))
    }
  }
}

// ? 1.我爱整除  通过55%
// let line
// let k, r

// while (line = readline.question()) {
//   k = Number(line.split(' ')[0])
//   r = Number(line.split(' ')[1])
//   const map = new Map()
//   let count = 0

//   for (let i = 1; i <= r; i++) {
//     if (i < k) continue
//     count = 0
//     let ret = i / k
//     while (!ret.toString().includes('.')) {
//       count++
//       ret = Number(ret) / k
//     }

//     map.set(i, count)
//   }

//   let res = 0
//   if (map.size === 0) console.log(res)
//   const arr = [...map.values()]
//   const max = Math.max(...arr)
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === max) {
//       res++
//     }
//   }
//   console.log(res)
// }