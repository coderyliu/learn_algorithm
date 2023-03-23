const read_line = require('readline-sync')

// 商品优惠种类

// var sc, flag = 1;
// var arr;
// var arr1, arr2;
// var count = 0;
// while (sc = read_line.question()) {
//   if (flag == 1) {
//     flag++
//     count = 0
//     arr = parseInt(sc.split(' ')[0])
//   } else if (flag === 2) {
//     flag++
//     arr1 = sc.split(' ')
//   } else if (flag === 3) {
//     flag = 1
//     arr2 = sc.split(' ')
//     for (let i = 0; i < arr; i++) {
//       if (arr1.indexOf(String(i)) !== -1 && arr2.indexOf(String(i)) !== -1) {
//         count++
//       }
//     }
//     // print(count)
//     console.log(count)
//   }
// }

// 魔法
var sc;
var m, n;
var count = 0;
while (sc = read_line.question()) {
  count = 0
  var arr = sc.split(' ')
  m = parseInt(arr[0])
  n = parseInt(arr[1])

  while (m !== n) {
    let arr = tools(m, n)
    // console.log(typeof arr)
    let flag = arr[1]
    let min = arr[0]
    if (flag === 1) {
      n = min
      m = m
      count++
    } else {
      m = min
      n = n
      count++
    }
  }
  console.log(count)
}

function tools(m, n) {
  const arrA = [Math.abs(m * 2 - n), Math.abs(Math.floor(m / 2) - n), Math.abs(m + 1 - n)]
  const arrB = [Math.abs(n * 2 - m), Math.abs(Math.floor(n / 2) - m), Math.abs(n + 1 - m)]
  // console.log(arrA, arrB)
  let minA = Math.min(...arrA)
  let minB = Math.min(...arrB)
  // console.log(minA, minB)
  if (minA > minB) {
    const indexA = arrB.indexOf(minB)
    // console.log(indexA)
    if (indexA === 0) {
      minB = n * 2
    } else if (indexA === 1) {
      minB = Math.floor(n / 2)
    } else {
      minB = n + 1
    }
    // console.log(minB)
  } else {
    const indexB = arrA.indexOf(minA)
    if (indexB === 0) {
      minA = m * 2
    } else if (indexB === 1) {
      minA = Math.floor(m / 2)
    } else {
      minA = m + 1
    }
  }
  return minA > minB ? [minB, 1] : [minA, 0]
}