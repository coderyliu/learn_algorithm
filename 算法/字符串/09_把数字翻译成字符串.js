// https://leetcode.cn/problems/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof/
/**
 * @param {number} num
 * @return {number}
 */

// ?动态规划
// todo 类似于爬楼梯  爬楼梯就是两种选择
// todo 1:只向上爬一层
// todo 2：向上爬两层
// ?这道题的意思一样，要么这个数字自己组合，要么这个数字和前一个数字结合，但是还要判断是否小于等于25
var translateNum = function (num) {
  const str = num.toString()
  if (str.length <= 1) return str.length

  let count = [1, 1]
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] == 1 || str[i - 1] == 2 && str[i] <= 5) {
      count = [count[1], count[0] + count[1]]
    } else {
      count = [count[1], count[1]]
    }
  }

  return count[1]
};