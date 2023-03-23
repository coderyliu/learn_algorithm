const read_line = require('readline-sync')
let input1 = read_line.question('')
// console.log(input1)
// console.log(typeof input1)
// console.log(input1.length)

// while ((line = read_line()) != "") {
//   arr.push(line.replace(/\]\,/g, "").replace(/ /g, "").replace(/\[/g, "").replace(/\]/g, "").split(",").map(v => parseInt(v)));
// }

let arr = [[1,2,3],[4,5,6]]
console.log(arr.toString())
// 输出是：1,2,3,4,5,6
// 这样就错了，没有中括号

console.log(JSON.stringify(arr));
// 这样是对的

console.log([1,2,3])
console.log([[1,2,3]])

