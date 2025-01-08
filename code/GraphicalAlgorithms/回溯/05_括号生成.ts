// 括号生成
// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且有效的括号组合。

// 示例：
// 输入：n = 3
// 输出：["((()))","(()())","(())()","()(())","()()()"]

function generateParenthesis(n: number): string[] {
  // 方法一：推理
  // *从 n-1 推导出 n 的组合情况，只需要遍历 n-1 的所有组合，并在所有组合的每个位置填入一对括号 () 并去重即可。
  // *空间复杂度：O(n^2)
  // *时间复杂度：O(n^2)
  let set = new Set<string>(["()"]);
  // 从 n = 2 开始，遍历到 n
  for (let i = 2; i <= n; i++) {
    let nextSet = new Set<string>();
    for (const str of set) {
      for (let j = 0; j < str.length; j++) {
        nextSet.add(str.slice(0, j) + "()" + str.slice(j));
      }
    }
    set = nextSet;
  }
  return Array.from(set);

  // 方法二：回溯
}

console.log(generateParenthesis(3)); // ["((()))","(()())","(())()","()(())","()()()"]

export {};
