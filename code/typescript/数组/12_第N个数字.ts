// https://leetcode.cn/problems/nth-digit/

function findNthDigit(n: number): number {
  // 方法一：暴力 - 超时
  // * 时间复杂度 O(n)
  // * 空间复杂度 O(n)
  // const res: number[] = [];
  // for (let i = 0; i < n; i++) {
  //   res.push(i + 1);
  // }
  // return Number(res.join("")[n - 1]);

  // 方法二：数学
  // * 时间复杂度 O(logn)
  // * 空间复杂度 O(1)
  // ?规律：
  // * 1-9（一位数的个数） 9 * 1 = 9
  // * 10-99（两位数的个数） 90 * 2 = 180
  // * 100-999（三位数的个数） 900 * 3 = 2700
  // * 1000-9999（四位数的个数） 9000 * 4 = 36000
  // * 以此类推...

  let digit = 1; // 第N位数字所在数字的位数
  // 循环找到第N位数字所在数字的位数
  while (n > 9 * Math.pow(10, digit - 1) * digit) {
    n -= 9 * Math.pow(10, digit - 1) * digit;
    digit++;
  }

  // 计算属于哪个数字
  let target = Math.pow(10, digit - 1) + Math.floor((n - 1) / digit);
  // 计算是该数字中的第几个数字,从0开始
  let i = (n - 1) % digit;

  // 返回target的第i位数字
  // 先让 i 后面的数字去掉
  // 然后再跟10取余
  return Math.floor(target / Math.pow(10, digit - i - 1)) % 10;
}

console.log(findNthDigit(3)); // 3
console.log(findNthDigit(10)); // 1
console.log(findNthDigit(11)); // 0
console.log(findNthDigit(90)); // 9

export {};
