// 仓库管理员以数组 stock 形式记录商品库存表。
// stock[i] 表示商品 id，可能存在重复。原库存表按商品 id 升序排列。
// 现因突发情况需要进行商品紧急调拨，管理员将这批商品 id 提前依次整理至库存表最后。请你找到并返回库存表中编号的 最小的元素 以便及时记录本次调拨。

function inventoryManagement(stock: number[]): number {
  // 方法一：暴力
  // * 时间复杂度：O(n)
  // * 空间复杂度：O(1)
  // let min: number = stock[0];
  // for (let i = 1; i < stock.length; i++) {
  //   min = Math.min(min, stock[i]);
  // }
  // return min;

  // 方法二：使用JS - API
  // * 时间复杂度：O(n)
  // * 空间复杂度：O(1)
  // return Math.min(...stock);

  // 方法三： 排序
  // * 时间复杂度：O(nlogn)
  // * 空间复杂度：O(1)
  // stock.sort((a, b) => a - b);
  // return stock[0];

  // 方法四：二分查找
  // * 时间复杂度：O(logn)
  // * 空间复杂度：O(1)
  let low = 0;
  let high = stock.length - 1;
  while (low < high) {
    const mid = Math.floor(low + (high - low) / 2);
    if (stock[mid] > stock[high]) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return stock[low];
}

export {};
