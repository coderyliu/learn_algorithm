// 给你一个数组 candies 和一个整数 extraCandies，其中 candies[i] 表示第 i 个孩子拥有的糖果数。
// 对每一个孩子，检查是否存在一种方案，将额外的 extraCandies 个糖果分配给孩子们之后，此孩子有最多的糖果。
// 注意，允许有多个孩子同时拥有最多的糖果数。

function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  // * 时间复杂度：O(n)
  // * 空间复杂度：O(n)
  // 1. 找到数组中最多的糖果数
  let max = 0;
  for (const candy of candies) {
    max = Math.max(max, candy);
  }

  // 2. 判断每个孩子是否拥有最多的糖果数
  const res: boolean[] = [];
  for (const candy of candies) {
    res.push(candy + extraCandies >= max);
  }
  return res;
}

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3)); // [true, true, true, false, true]
console.log(kidsWithCandies([4, 2, 1, 1, 2], 1)); // [true, false, false, false, false]

export {};
