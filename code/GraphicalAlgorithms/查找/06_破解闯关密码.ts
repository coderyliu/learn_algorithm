// 闯关游戏需要破解一组密码，闯关组给出的有关密码的线索是：
// 一个拥有密码所有元素的非负整数数组 password
// 密码是 password 中所有元素拼接后得到的最小的一个数
// 请编写一个程序返回这个密码。

// 示例 1：
// 输入：password = [1, 2, 3]
// 输出：123

// 示例 2：
// 输入：password = [10, 2]
// 输出：102

function crackPassword(password: number[]): string {
  // 方法一：排序
  // * 时间复杂度：O(nlogn)
  // * 空间复杂度：O(n)
  password.sort((a, b) => {
    const strA = a.toString();
    const strB = b.toString();
    return strA + strB > strB + strA ? 1 : -1;
  });
  return password.join("");
}

console.log(crackPassword([1, 2, 3])); // 123
console.log(crackPassword([10, 2])); // 102

export {};
