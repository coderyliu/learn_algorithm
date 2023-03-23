const read_line = require('readline-sync')

// 魔法游戏

let n, m
let arr = []
let zeroArr = []
let result = 0

while (n = read_line.question()) {
  if (n.length < 3 || parseInt(n) === 100) {
    result = 0
    zeroArr = []
    arr = []
    m = parseInt(n)
  } else {
    if (n[2] === '0') {
      zeroArr.push(n.split(' ').map(i => parseInt(i)))
    } else {
      arr.push(n.split(' ').map(i => parseInt(i)))
    }
  }
  if ((zeroArr.length + arr.length) === m) {
    arr.sort((a, b) => {
      return a[0] - b[0]
    })
    result = zeroArr.reduce((pre, cur) => {
      return pre + cur[0]
    }, 0)
    for (let i = arr.length - 1; i >= 0; i--) {
      if (result + arr[i][0] >= result * 2) {
        result = result + arr[i][0]
      } else {
        result = result * 2
      }
    }
    console.log(result)
  }
}