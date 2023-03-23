const readline = require('readline-sync')

// ?组队吃鸡
let line
let flag = false
let res = []

while (line = readline.question()) {
  if (!flag) {
    res = []
    n = Number(line)
    flag = true
  } else {
    let arr = line.split(' ').map(i => Number(i))
    let a = arr[0]
    let b = arr[1]
    let c = arr[2]
    let count = arr[3]

    if (a >= c) {
      count += c
      a = a - c
    } else {
      count += a
      a = 0
      c = c - a
    }

    if (b % 2 === 0) {
      count += b / 2
      b=0
    } else {
      let n2=Math.floor(b / 2)
      count += n2
      b=b-(n2*2)
    }

    if(a!==0){
      let num=Math.floor(a/2)
      a=a-(num*2)
      if(b!==0&&b>=num){
        count+=num
      }else if(b!==0&&b<num){
        count+=b
      }
    }
    
    if(a!==0){
      count+=Math.floor(a/4)
    }

    res.push(count)
    n--

    if (n === 0) {
      flag = false
      console.log(res.join('\n'))
    }
  }
}