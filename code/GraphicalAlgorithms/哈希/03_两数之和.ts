// 购物车内的商品价格按照升序记录于数组 price。请在购物车中找到两个商品的价格总和刚好是 target。若存在多种情况，返回任一结果即可。

// 示例
// 输入：price = [3, 9, 12, 15], target = 18
// 输出：[3,15] 或者 [15,3]

function twoSum(price: number[], target: number): number[] {
  // 哈希
  // *时间复杂度：O(n)
  // *空间复杂度：O(n)
  const map = new Map<number, number>();
  for (const num of price) {
    if (map.has(target - num)) {
      return [num, map.get(target - num)!];
    }
    map.set(num, num);
  }
  return [];
}

console.log(twoSum([3, 9, 12, 15], 18));

export {};
