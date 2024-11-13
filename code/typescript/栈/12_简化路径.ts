// https://leetcode.cn/problems/simplify-path/solutions/1194227/yi-ban-jie-fa-by-usualminds-ylyw/

function simplifyPath(path: string): string {
  // 方法：栈
  // ?思路：通过对 / 进行字符串分割，通过栈维护两种情况即可
  // 1. 遇到 .(当前目录) 或者 ///(根目录) 则不进行任何操作
  // 2. 遇到 ..(上一级目录) 则弹出栈顶元素
  // 3. 遇到正常字符串则压入栈中
  // 4. 最后将栈中元素拼接成路径

  const stack: string[] = [];
  const paths = path.split("/");
  for (const p of paths) {
    if (p === "" || p === ".") continue;
    if (p === "..") stack.length && stack.pop();
    else stack.push(p);
  }
  return "/" + stack.join("/");
}

console.log(simplifyPath("/home/"));
console.log(simplifyPath("/../"));
console.log(simplifyPath("/home//foo/"));
console.log(simplifyPath("/a/./b/../../c/"));

export {};
