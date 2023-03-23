const readsync = require('readline-sync')

let line

//?打印机
while (line = readsync.question()) {
  let n = line.length;
  if (!n) return 0;
  let f = new Array(n + 1);
  for (let i = 0; i < n + 1; i++) f[i] = new Array(n + 1).fill(0);
  for (let len = 1; len <= n; len++)
    for (let l = 0; l + len - 1 < n; l++) {
      let r = l + len - 1;
      f[l][r] = f[l + 1][r] + 1;
      for (let k = l + 1; k <= r; k++)
        if (s[k] === s[l])
          f[l][r] = Math.min(f[l][r], f[l][k - 1] + f[k + 1][r]);
    }

  console.log(f[0][n - 1]);
}

//?最长公共前缀
// while (line = readsync.question()) {
//   let res = ''
//   let flag = false
//   let strs = line.split(' ')
//   for (let i = 0; i < strs[0].length; i++) {
//     for (let j = 1; j < strs.length; j++) {
//       if (strs[j][i] !== strs[0][i]) {
//         flag = true
//         break
//       }
//     }

//     if (!flag) {
//       res += strs[0][i]
//     } else {
//       break
//     }
//   }

//   if (res.length === 0) {
//     console.log(JSON.stringify(res))
//   } else {
//     console.log(res)
//   }
// }