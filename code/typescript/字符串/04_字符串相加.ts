// https://leetcode.cn/problems/add-strings/

function addStrings(num1: string, num2: string): string {
  // 方法一： 利用JS - API
  // return BigInt(num1) + BigInt(num2) + "";

  // 方法二：大数相加
  num1 = num1.split("").reverse().join("");
  num2 = num2.split("").reverse().join("");
  let res = "";
  let flag = 0;
  let len = Math.max(num1.length, num2.length);
  for (let i = 0; i < len; i++) {
    let n1 = Number(num1[i] || 0);
    let n2 = Number(num2[i] || 0);
    let sum = n1 + n2 + flag;
    if (sum >= 10) {
      flag = Math.floor(sum / 10);
      res += sum % 10;
    } else {
      flag = 0;
      res += sum;
    }
  }

  res = flag ? res + flag : res;

  return res.split("").reverse().join("");
}

console.log(addStrings("11", "123"));

export {};
