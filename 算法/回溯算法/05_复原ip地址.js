// https://leetcode-cn.com/problems/restore-ip-addresses/

// s = "25525511135"
// 输出：["255.255.11.135","255.255.111.35"]
// 一样是切割字符串
function restoreIpAddress(s) {
  const res = []
  const path = []

  function backTracking(i) {
    const len = path.length
    if (len > 4) return
    if (len === 4 && i === s.length) {
      res.push(path.join('.'))
      return
    }

    for (let j = i; j < s.length; j++) {
      const str = s.substr(i, j - i + 1)
      if (str.length > 3 || +str > 255) break
      if (str.length > 1 && str[0] === '0') break
      path.push(str)
      backTracking(j + 1)
      path.pop()
    }
  }
  backTracking(0)

  return res
}