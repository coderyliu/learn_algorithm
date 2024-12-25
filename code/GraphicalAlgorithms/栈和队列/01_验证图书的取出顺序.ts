// 现在图书馆有一堆图书需要放入书架，并且图书馆的书架是一种特殊的数据结构，只能按照一定的顺序放入和拿取书籍。
// 给定一个表示图书放入顺序的整数序列 putIn，请判断序列 takeOut 是否为按照正确的顺序拿取书籍的操作序列。你可以假设放入书架的所有书籍编号都不相同。

// 示例
// 输入：putIn = [1, 2, 3, 4, 5], takeOut = [4, 5, 3, 2, 1]
// 输出：true

function validateBookSequences(putIn: number[], takeOut: number[]): boolean {
  // 栈
  // *时间复杂度：O(n)
  // *空间复杂度：O(n)
  const stack: number[] = [];
  for (const book of putIn) {
    stack.push(book);
    // 如果栈顶元素与 takeOut 的第一个元素相同，则弹出栈顶元素
    while (stack.length && stack[stack.length - 1] === takeOut[0]) {
      takeOut.shift();
      stack.pop();
    }
  }
  return stack.length === 0;
}

console.log(validateBookSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]));

export {};
