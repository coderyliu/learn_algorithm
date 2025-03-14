// 有效的括号
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 每个右括号都有一个对应的相同类型的左括号。

function isValid(s: string): boolean {
  if (s.length % 2 !== 0) return false;
  // 栈实现
  const stack: string[] = [];
  const hash = {
    "(": ")",
    "{": "}",
    "[": "]"
  };
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    } else {
      // 简化下面的操作
      if (!stack.length) return false;
      const top = stack[stack.length - 1];
      if (s[i] !== hash[top]) return false;
      stack.pop();
      // switch (s[i]) {
      //   case ")":
      //     if (stack[stack.length - 1] === "(") {
      //       stack.pop();
      //     } else {
      //       stack.push(s[i])
      //     }
      //     break;
      //   case "}":
      //     if (stack[stack.length - 1] === "{") {
      //       stack.pop();
      //     } else {
      //       stack.push(s[i])
      //     }
      //     break;
      //   case "]":
      //     if (stack[stack.length - 1] === "[") {
      //       stack.pop();
      //     } else {
      //       stack.push(s[i])
      //     }
      //     break;
      //   default:
      //     break;
      // }
    }
  }

  return stack.length === 0;
}

export {};
