// https://leetcode.cn/problems/remove-all-adjacent-duplicates-in-string/description/

function removeDuplicates(s: string): string {
  // 方法：栈
  const stack: string[] = [];
  let flag = false; // 标记是否需要弹出栈顶元素
  for (const str of s) {
    // 如果栈顶元素与当前元素相同，则弹出栈顶元素
    while (stack.length && stack[stack.length - 1] === str) {
      stack.pop();
      flag = true;
    }
    if (!flag) stack.push(str);
    flag = false;
  }

  return stack.join("");
}

console.log(removeDuplicates("abbaca"));
console.log(removeDuplicates("azxxzy"));

export {};
