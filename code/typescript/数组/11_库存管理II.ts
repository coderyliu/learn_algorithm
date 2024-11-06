// https://leetcode.cn/problems/shu-zu-zhong-chu-xian-ci-shu-chao-guo-yi-ban-de-shu-zi-lcof/description/

function inventoryManagement(stock: number[]): number {
  // 方法一：暴力 + 哈希
  // * 时间复杂度 O(n)
  // * 空间复杂度 O(n)
  // const map = new Map<number, number>();
  // for (const num of stock) {
  //   if (map.has(num)) {
  //     map.set(num, map.get(num)! + 1);
  //   } else {
  //     map.set(num, 1);
  //   }

  //   if (map.get(num)! > stock.length / 2) {
  //     return num;
  //   }
  // }

  // return -1;

  // 方法二：排序
  // * 时间复杂度 O(nlogn)
  // * 空间复杂度 O(1)
  // stock.sort((a, b) => a - b);
  // return stock[Math.floor(stock.length / 2)];

  // 方法三：摩尔投票
  // * 时间复杂度 O(n)
  // * 空间复杂度 O(1)
  let candidate = 0;
  let count = 0;
  for (const num of stock) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
  }
  return candidate;
}

console.log(inventoryManagement([1, 2, 3, 2, 2, 2, 5, 4, 2]));
console.log(inventoryManagement([6, 1, 3, 1, 1, 1]));

export {};
