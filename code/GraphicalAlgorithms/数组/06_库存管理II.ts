// 仓库管理员以数组 stock 形式记录商品库存表。stock[i] 表示商品 id，可能存在重复。请返回库存表中数量大于 stock.length / 2 的商品 id。

// 示例
// 输入: stock = [6, 1, 3, 1, 1, 1]
// 输出: 1

function inventoryManagement(stock: number[]): number {
  // 方法一：哈希表
  // *时间复杂度：O(n)
  // *空间复杂度：O(n)
  // const map = new Map<number, number>();

  // for (const item of stock) {
  //   map.set(item, (map.get(item) || 0) + 1);
  //   if (map.get(item)! > stock.length / 2) {
  //     return item;
  //   }
  // }
  // return -1;

  // 方法二：摩尔投票
  // *时间复杂度：O(n)
  // *空间复杂度：O(1)
  let candidate = stock[0];
  let count = 0;
  for (const item of stock) {
    if (count === 0) {
      candidate = item;
    }
    count += item === candidate ? 1 : -1;
  }
  return candidate;
}

console.log(inventoryManagement([6, 1, 3, 1, 1, 1]));

export {};
