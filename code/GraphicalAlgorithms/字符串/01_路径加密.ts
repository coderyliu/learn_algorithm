// 假定一段路径记作字符串 path，其中以 "." 作为分隔符。现需将路径加密，加密方法为将 path 中的分隔符替换为空格 " "，请返回加密后的字符串。

// 示例
// 输入：path = "a.b.c.d"
// 输出："a b c d"

function pathEncryption(path: string): string {
  // 方法一：使用正则表达式
  return path.replace(/\./g, " ");

  // 方法二：使用JS API
  // return path.split(".").join(' ');

  // 方法三：暴力解法
  // let res = "";
  // for (let i = 0; i < path.length; i++) {
  //   if (path[i] === ".") {
  //     res += " ";
  //   } else {
  //     res += path[i];
  //   }
  // }
  // return res;
}

export {};
