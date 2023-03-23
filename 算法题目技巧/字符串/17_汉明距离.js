// https: //leetcode.cn/problems/hamming-distance/

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
// ?直接求出两个数的二进制，然后比较
var hammingDistance = function (x, y) {
  let arrX, arrY, count = 0
  if (x === 0 && y !== 0) {
    arrX = [0]
    arrY = binaryNumber(y)
  } else if (y === 0 && x !== 0) {
    arrY = [0]
    arrX = binaryNumber(x)
  } else if (x === 0 && y === 0) {
    arrX = [0]
    arrY = [0]
  } else {
    //求二进制
    arrX = binaryNumber(x)
    arrY = binaryNumber(y)
  }
  while (arrX.length < arrY.length) {
    arrX.unshift(0)
  }

  while (arrY.length < arrX.length) {
    arrY.unshift(0)
  }


  for (let i = 0; i < arrX.length; i++) {
    if (arrX[i] !== arrY[i]) {
      count++
    }
  }

  console.log(count)
  // return count
};

hammingDistance(1, 4)
hammingDistance(3, 1)
hammingDistance(0, 1)
hammingDistance(0, 0)

function binaryNumber(num) {
  const stack = []
  let n = num
  while (n !== 1) {
    let item = n % 2
    stack.unshift(item)
    n = Math.floor(n / 2)
  }
  stack.unshift(1)

  return stack
}