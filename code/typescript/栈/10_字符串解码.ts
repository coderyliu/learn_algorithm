// https://leetcode.cn/problems/decode-string/description/

function decodeString(s: string): string {
  // 使用栈来解决
  // *时间复杂度O(n) 空间复杂度O(n)
  const stack: string[] = [];
  for (const item of s) {
    // 不是"]"，直接入栈
    if (item !== "]") {
      stack.push(item);
    } else {
      // 遇到"]"，开始解码
      // 将[]内的字符串取出
      let str = "";
      while (stack[stack.length - 1] !== "[") {
        str = stack.pop() + str;
      }
      // 将"["弹出
      stack.pop();
      // 将数字取出
      let num = "";
      while (stack.length && !isNaN(Number(stack[stack.length - 1]))) {
        num = stack.pop() + num;
      }
      // 将解码后的字符串重新入栈
      stack.push(str.repeat(Number(num)));
    }
  }
  // 将栈中的字符串拼接起来
  return stack.join("");
}

console.log(decodeString("3[a]2[bc]")); // "aaabcbc"
console.log(decodeString("3[a2[c]]")); // "accaccacc"
console.log(decodeString("2[abc]3[cd]ef")); // "abcabccdcdcdef"

export {};
