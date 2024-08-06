// https://leetcode.cn/problems/lexicographical-numbers/
/**
 * @param {number} n
 * @return {number[]}
 */
// 1.直接比较sort排序，100ms
var lexicalOrder = function (n) {
  const res = []
  for (let i = 1; i <= n; i++) {
    res.push(i)
  }
  res.sort((a, b) => {
    // js中如果两个字符串都是数值的比较，如果位数一致，就是比较数值大小，如果位数不一致，那么以第一位为准比较
    return a.toString() > b.toString() ? 1 : -1
  })
  return res
};

lexicalOrder(13)
// lexicalOrder(113)