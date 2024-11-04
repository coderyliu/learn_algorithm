// https://leetcode.cn/problems/valid-parenthesis-string/

function checkValidString(s: string): boolean {
  // 栈
  const stack: number[] = []; // 存储左括号索引
  const starStack: number[] = []; // 存储星号索引
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else if (s[i] === "*") {
      starStack.push(i);
    } else {
      if (stack.length) {
        // 优先匹配左括号
        stack.pop();
      } else if (starStack.length) {
        // 其次匹配星号
        starStack.pop();
      } else {
        // 无法匹配
        return false;
      }
    }
  }

  // 检查剩余的左括号和星号
  while (stack.length && starStack.length) {
    if (stack.pop()! > starStack.pop()!) return false;
  }

  // 如果左括号栈为空，则说明所有左括号都匹配成功
  return stack.length === 0;
}

console.log(checkValidString("()"));
console.log(checkValidString("(*)"));
console.log(checkValidString("(*))"));

export {};
