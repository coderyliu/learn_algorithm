const generateParenthesis = function (n) {
  const res = []

  function dfs(l, r, str) {
    if (l === n && r === n) {
      return res.push(str)
    }

    // 小于r时不满足剪纸
    if (l < r) {
      return
    }

    if (l < n) {
      dfs(l + 1, r, str + '(')
    }

    if (r < n) {
      dfs(l, r + 1, str + ')')
    }
  }
  dfs(0, 0, '')

  return res
}
console.log(generateParenthesis(3))