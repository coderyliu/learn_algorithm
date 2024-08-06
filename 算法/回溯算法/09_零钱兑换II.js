/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
// 回溯超时，栈溢出
// 这道题就是完全背包问题，借助动态规划来解决
var change = function (amount, coins) {
  
}
change(5, [1, 2, 5])
console.log(change(3, [2]))
console.log(change(500, [1, 2, 5]))

// var change = function (amount, coins) {
//   let path = [],
//     res = []
//   const set = new Set()

//   function backTracking() {
//     let sum = path.reduce((pre, cur) => {
//       return pre + cur
//     }, 0)
//     if (sum > amount) return
//     if (sum === amount) {
//       res.push([...path])
//       return
//     }
//     for (let i = 0; i < coins.length; i++) {
//       path.push(coins[i])
//       backTracking(i)
//       path.pop()
//     }
//   };
//   backTracking()
//   for (const item of res) {
//     set.add(item.sort((a, b) => a - b).join(''))
//   }
//   return set.size
// }