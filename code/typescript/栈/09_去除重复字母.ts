// https://leetcode.cn/problems/remove-duplicate-letters/description/

function removeDuplicateLetters(s: string): string {
  // 栈 + 哈希
  // * 时间复杂度：O(n)
  // * 空间复杂度：O(n)
  // 1. 声明一个栈，用于存储字典序
  const stack: string[] = [];

  // 2. 遍历字符串，统计每个字符出现的最后的索引
  const lastInx = new Array(26).fill(0);
  const asset = "a".charCodeAt(0); // 偏移量
  for (let i = 0; i < s.length; i++) {
    lastInx[s[i].charCodeAt(0) - asset] = i;
  }

  // 3. 声明一个哈希表，用于记录栈中存放的字符
  const inStack = new Array(26).fill(false);

  // 4. 从左到右扫描字符串，寻找不重复的字典序
  for (let i = 0; i < s.length; i++) {
    // 4.1 如果当前字符，已经在字典序中，无需处理
    if (inStack[s[i].charCodeAt(0) - asset]) continue;

    // 4.2 如果当前字符不在栈中：入栈需要比较栈内元素是不是最小字典序
    // - 栈不为空 && 栈顶元素 > 当前字符 && 栈顶元素在后面还会出现
    // - 则说明之后会出现更小的字典序，需要出栈栈顶元素
    // - 直到栈为空或栈顶字符比当前字符小，或栈顶字符在当前位置之后不会再出现
    while (
      stack.length &&
      stack[stack.length - 1] > s[i] &&
      lastInx[stack[stack.length - 1].charCodeAt(0) - asset] > i
    ) {
      // 更新栈中存放的元素
      inStack[stack.pop()!.charCodeAt(0) - asset] = false;
    }

    // 入栈
    stack.push(s[i]);
    inStack[s[i].charCodeAt(0) - asset] = true;
  }

  return stack.join("");
}

console.log(removeDuplicateLetters("bcabc"));
console.log(removeDuplicateLetters("cbacdcbc"));

export {};
