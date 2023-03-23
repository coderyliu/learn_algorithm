// ?1.两个正整数a，b  倍数的最少操作次数
var input = "";
let res = []

process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  res = input.split(' ').map(i => Number(i))
  let num1 = res[0]
  let num2 = res[1]

  if (num1 % num2 === 0 || num2 % num1 === 0) console.log(0)

  const path = []
  let set1 = new Set()
  let set2 = new Set()

  function backTracking(str, startIndex, set) {
    set.add(path.join(''))
    for (let i = startIndex; i < str.length; i++) {
      path.push(str[i])
      backTracking(str, i + 1, set)
      path.pop()
    }
  }

  backTracking(num1 + '', 0, set1)
  backTracking(num2 + '', 0, set2)
  console.log(4)

});

// ?2.长城，{2,1,2,1,2} {1,9,1,9} 最少操作次数
// todo 找出奇数和偶数的最大位置
var n = -1;
rl.on("line", function (line) {
  if (n < 0) {
    n = parseInt(line.trim());
  } else {
    var tokens = line.split(" ").map((i) => Number(i));
    let count = 0;
    let max1 = 0,
      max2 = 0;
    if (max1 === max2) max1 += 1
    for (let i = 0; i < tokens.length; i++) {
      if (i % 2 === 0) {
        max1 = Math.max(max1, tokens[i]);
      } else {
        max2 = Math.max(max2, tokens[i]);
      }
    }
    for (let i = 0; i < tokens.length; i++) {
      if (i % 2 === 0) {
        count += max1 - tokens[i]
      } else {
        count += max2 - tokens[i]
      }
    }
    n = -1;
    console.log(count);
  }
});

// ？4.三元组
var n = -1;
rl.on('line', function (line) {
  if (n < 0) {
    n = parseInt(line.trim())
  } else {
    // ?1.暴力  通过57%
    // var tokens = line.split(' ').map(i => Number(i));
    // let count = 0
    // for (let i = 0; i < tokens.length; i++) {
    //   for (let j = i + 1; j < tokens.length; j++) {
    //     for (let p = j + 1; p < tokens.length; p++) {
    //       if (tokens[i] === tokens[p] && tokens[i] > tokens[j]) count++
    //     }
    //   }
    // }
    // n = -1

    // ?2.双指针 这样做不知道为什么不对
    var tokens = line.split(' ').map(i => Number(i));
    let count = 0
    for (let i = 0; i < tokens.length; i++) {
      let left = i + 1;
      let right = tokens.length - 1;

      while (left < right) {
        if (tokens[i] === tokens[right] && tokens[i] > tokens[left]) {
          count++;
        }

        left++;
      }

      left = i + 1
      right = tokens.length - 2
      while (left < right) {
        if (tokens[i] === tokens[right] && tokens[i] > tokens[left]) {
          count++;
        }

        right--;
      }
    }
    n = -1
    console.log(count)
  }
});