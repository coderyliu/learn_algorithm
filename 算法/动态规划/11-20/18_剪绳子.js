/**
 * @param {number} n
 * @return {number}
 */
/**
 * 边界:
 * f(2) = 1;
 * ...
 * n长的绳子: 
 *  先切1长度, 剩下的 n-1 可以切,也可不切:
 *      ?如果切, 则 f(n) = 1 * f(n - 1);
 *      ?如果不切, 则 f(n) = 1 * (n - 1);
 *      因此, f(n) = max(1 * f(n - 1), 1 * (n - 1));
 *  同理, 如果先切2长度, f(n) = max(2 * f(n - 2), 2 * (n - 2));
 *  ...
 *  遍历到 先切 n - 2 长度, f(n) = max((n - 2) * f(2), (n - 2) * 2);
 *  (先切n-1长度的情况可以忽略)
 * 
 * 答案即为上述遍历的f(n)的最大值
 */
let cache = [0, 0, 1]; // 记忆数组
var cuttingRope = function (n) {
  if (cache[n]) {
    return cache[n];
  }
  let max = 0;
  for (let i = 1; i < n - 1; i++) {
    let temp = Math.max(i * cuttingRope(n - i), i * (n - i));
    if (temp > max) {
      max = temp;
    }
  }
  return cache[n] = max; // 将f(n)的结果存储起来
};
// 不过, 上述的遍历明显存在一些重复从而影响性能, 比如 1 * (n - 1) 和 (n - 1) * 1, 可以改进一下算法