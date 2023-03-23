// https://leetcode.cn/problems/simplify-path/solution/dai-ma-jian-ji-de-jie-fa-jsban-ben-by-it-b5oc//

var simplifyPath = function (path) {
  let result = [];
  let pathArr = path.split("\/");
  console.log(pathArr)
  pathArr.forEach(val => {
    if (val === "..")
      result.pop();
    else if (val !== "" && val !== ".")
      result.push(val)
  })
  return "/" + result.join("/")
}

console.log(simplifyPath('/home/'))
console.log(simplifyPath("/a/./b/../../c/"))