// 给你一个包含若干星号 * 的字符串 s 。
// 在一步操作中，你可以：
// 选中 s 中的一个星号。
// 移除星号左侧最近的那个非星号字符，并移除该星号自身。
// 返回移除所有星号之后的字符串。
// 注意：
// 生成的输入保证总是可以执行题面中描述的操作。
// 可以证明结果字符串是唯一的。

function removeStars(s: string): string {
  // 栈
  // * 时间复杂度O(n)
  // * 空间复杂度O(n)
  const stack: string[] = [];
  for (const str of s) {
    if (str !== "*") {
      stack.push(str);
    } else {
      if (stack.length) {
        stack.pop();
      }
    }
  }

  return stack.join("");
}

console.log(removeStars("leet**cod*e")); // lecoe

export {};
