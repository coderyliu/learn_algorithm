// https://leetcode.cn/problems/multiply-strings/description/

function multiply(num1: string, num2: string): string {
  // 方法一：利用JS API
  // return BigInt(num1) * BigInt(num2) + "";

  // 方法二：大数相乘 - 暴力
  let res: (number | string)[][] = [];
  // 先计算每一位的乘积
  for (let i = num1.length - 1; i >= 0; i--) {
    let flag = 0;
    const tmp: number[] = [];
    for (let j = num2.length - 1; j >= 0; j--) {
      const n1 = +num1[i];
      const n2 = +num2[j];
      const mul = n1 * n2 + flag;
      if (mul >= 10) {
        flag = Math.floor(mul / 10);
        tmp.unshift(mul % 10);
      } else {
        flag = 0;
        tmp.unshift(mul);
      }
    }
    if (flag) tmp.unshift(flag);
    res.push(tmp);
  }

  res.forEach((tmp, idx) => tmp.push("0".repeat(idx)));
  const ret = res.map((tmp) => tmp.join(""));
  // 字符串的大数相加
  let mul = BigInt(0);
  for (let i = 0; i < ret.length; i++) {
    mul += BigInt(ret[i]);
  }

  return mul + "";
}

// 123 * 456 = 56088
console.log(multiply("123", "456"));
console.log(multiply("999", "999"));

export {};
