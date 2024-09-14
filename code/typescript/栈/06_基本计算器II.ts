// https://leetcode.cn/problems/basic-calculator-ii/

function calculate(s: string): number {
  // 栈
  // ?解题思路：重点是字符串中只包括数字、加减乘除、空格，不包括括号
  // ?因此可以直接先计算乘除运算，然后再计算加减运算，遇到加法入栈num,减法入栈-num，乘除法入栈计算结果
  const stack: number[] = [];
  let lastOperator = "+"; // 上一次操作符
  let num = 0; // 数字
  for (let i = 0; i < s.length; i++) {
    if (!Number.isNaN(+s[i]) && s[i] !== " ") {
      num = Number(s[i]) + num * 10;
    }

    if (Number.isNaN(+s[i]) || i === s.length - 1) {
      switch (lastOperator) {
        case "+":
          stack.push(num);
          break;
        case "-":
          stack.push(-num);
          break;
        case "*":
          stack.push(stack.pop()! * num);
          break;
        case "/":
          stack.push(Math.trunc(stack.pop()! / num));
          break;
        default:
          break;
      }

      lastOperator = s[i];
      num = 0;
    }
  }
  return stack.reduce((pre, cur) => pre + cur, 0);
}

console.log(calculate("3+2*2"));
console.log(calculate("3/2"));
console.log(calculate("42"));

export {};
