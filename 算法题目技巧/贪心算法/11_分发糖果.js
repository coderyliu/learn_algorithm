// https://leetcode.cn/problems/candy/

/**
 * @param {number[]} ratings
 * @return {number}
 */
// ?暴力  不太行，不正确
var candy = function (ratings) {
  let num = 0

  for (let i = 1; i < ratings.length; i++) {
    if (i === 1 && ratings[i] > ratings[i - 1]) {
      num++
    } else if (i === 1 && ratings[i] < ratings[i - 1]) {
      num++
    } else if (ratings[i] > ratings[i - 1] && ratings[i - 1] <= ratings[i - 2]) {
      num++
    } else if (ratings[i] < ratings[i - 1] && ratings[i - 1] >= ratings[i - 2]) {
      num++
    }
  }

  return ratings.length + num
};

// ?贪心算法，遍历两次
var candy = function (ratings) {
  if (ratings.length < 1) return 0

  // todo 1. 首先，每个孩纸至少一个糖果
  const result = new Array(ratings.length).fill(1)

  // todo 2.正序遍历，递增糖果加1
  for (let i = 0; i < ratings.length - 1; i++) {
    if (ratings[i + 1] > ratings[i]) {
      result[i + 1] = result[i] + 1
    }
  }

  // todo 3.倒序遍历，如果递减，取最大
  for (let i = ratings.length - 1; i > 0; i--) {
    if (ratings[i - 1] > ratings[i]) {
      result[i - 1] = Math.max(result[i - 1], result[i] + 1)
    }
  }

  return result.reduce((prev, cur) => prev += cur)
}