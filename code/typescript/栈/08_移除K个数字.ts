// https://leetcode.cn/problems/remove-k-digits/description/

function removeKdigits(num: string, k: number): string {
  // 维护一个栈：当前元素小于栈顶元素，则出栈，直到栈为空或者栈顶元素小于当前元素，则入栈
  if (num.length <= k) return "0";
  const stack: number[] = [];
  for (let i = 0; i < num.length; i++) {
    while (stack.length && stack[stack.length - 1] > +num[i] && k) {
      k--;
      stack.pop();
    }

    if (stack.length || num[i] !== "0") {
      stack.push(+num[i]);
    }
  }

  // !有特殊情况, 当字符串呈递增时, 不会进入删栈顶的判断,需要在遍历字符串结束后, 判断k 是否还大于0, 大于就循环删栈顶
  while (k--) stack.pop();
  return stack.length ? stack.join("") : "0";
}

console.log(removeKdigits("1432219", 3));
console.log(removeKdigits("10200", 1));
console.log(removeKdigits("10", 2));
console.log(removeKdigits("191787", 2));

export {};
