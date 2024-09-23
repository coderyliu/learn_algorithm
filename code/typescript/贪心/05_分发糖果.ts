// https://leetcode.cn/problems/candy/description/

function candy(ratings: number[]): number {
  // 两次贪心
  // 1. 从左到右(只比较右边孩子评分比左边大的情况)，如果 ratings[i] > ratings[i - 1]，则 candies[i] = candies[i - 1] + 1
  // 2. 从右到左(只比较左边孩子评分比右边大的情况)，如果 ratings[i] > ratings[i + 1]，则 candies[i] = max(candies[i], candies[i + 1] + 1)

  // 先给每个孩子一个糖果
  const res = Array(ratings.length).fill(1);

  // 从左到右
  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      res[i] = res[i - 1] + 1;
    }
  }

  // 从右到左
  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      res[i] = Math.max(res[i], res[i + 1] + 1);
    }
  }

  return res.reduce((a, b) => a + b);
}

console.log(candy([1, 0, 2]));

export {};
