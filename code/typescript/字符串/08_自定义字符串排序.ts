// https://leetcode.cn/problems/custom-sort-string/description/

function customSortString(order: string, s: string): string {
  const orderMap = new Map();

  // 步骤1：创建一个映射，将order字符串中的字符及其位置存储起来
  for (let i = 0; i < order.length; i++) {
    orderMap.set(order[i], i);
  }

  // 步骤2：根据orderMap对字符串s进行排序
  return s
    .split("")
    .sort((a, b) => {
      // 步骤3：根据orderMap中的位置比较字符
      return (orderMap.get(a) || 0) - (orderMap.get(b) || 0);
    })
    .join(""); // 步骤4：将排序后的数组重新拼接成字符串
}

console.log(customSortString("cba", "abcd")); // 输出: "cbad"
console.log(customSortString("cbafg", "abcd")); // 输出: "cbad"
console.log(customSortString("kqep", "pekeq")); // 输出: "kqeep"

export {};
