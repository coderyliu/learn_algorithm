// https://leetcode.cn/problems/longest-valid-parentheses/description/

function longestValidParentheses(s: string): number {
  // ?方法一：把（）替换成 0,最后找到 0 的最长连续子串的长度
  // const reg = /\((0*)\)/;
  // while (reg.test(s)) {
  //   s = s.replace(reg, "0$10");
  // }
  // let len = 0;
  // let res = 0;

  // for (let i = 0; i < s.length; i++) {
  //   if (s[i] === "0") {
  //     len += 1;
  //     res = Math.max(res, len);
  //   } else {
  //     len = 0;
  //   }
  // }

  // return res;

  // ?方法二： 借助栈，栈中只存放的是 '(' 的索引，如果遇到 ')', 弹出栈顶元素表示匹配了当前右括号
  // 两种情况：
  // 1. 栈不为空，当前右括号的下标减去栈顶元素即为「以该右括号为结尾的最长有效括号的长度」
  // 2. 栈为空，当前右括号的下标减去当前栈的索引即为「以该右括号为结尾的最长有效括号的长度」
  const stack: number[] = [-1];
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else {
      stack.pop();
      if (stack.length) {
        max = Math.max(max, i - stack[stack.length - 1]);
      } else {
        stack.push(i);
      }
    }
  }

  return max;
}

console.log(longestValidParentheses("(()"));
console.log(longestValidParentheses("(())"));
console.log(longestValidParentheses(")()())"));
console.log(longestValidParentheses("()(()"));
console.log(longestValidParentheses("()(())"));

export {};
