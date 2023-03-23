// 实现一个随机分配红包的函数，接受两个参数，金额和个数，输出一个红包数组

function generateRandomMoneyFn(money, number) {
  let arr = []
  let range = money
  let preTotal = 0

  for (let i = 0; i < number - 1; i++) {
    const item = Math.ceil(Math.random() * (range / 2))
    arr.push(item)
    range -= item
    preTotal += item
  }
  arr.push(money - preTotal)

  console.log(arr)
  console.log(arr.reduce((pre, cur) => pre + cur), 0)
}

generateRandomMoneyFn(100, 10)
generateRandomMoneyFn(200, 10)