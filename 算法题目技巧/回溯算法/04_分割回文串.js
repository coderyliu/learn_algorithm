// 判断是否会文
function isPalindrome(s, l, r) {
  for (let i = l, j = r; i < j; i++, j--) {
    if (s[i] !== s[j]) return false
  }
  return true
}

function partition(s) {
  const path = []
  const result = []
  const len = s.length

  function backTracking(i) {
    if (i >= len) {
      result.push([...path])
      return
    }

    for (let j = i; j < len; j++) {
      if (!isPalindrome(s, i, j)) continue;
      path.push(s.substr(i, j - i + 1))
      backTracking(j + 1)
      path.pop()
    }
  }

  backTracking(0)
  return result
}
console.log(partition('aab'))