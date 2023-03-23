/**
 * @param {string} s
 * @return {string}
 */

// ?1.暴力解法
function longestPalindrome(s) {
  let res = ''
  for (let i = 0; i < s.length; i++) {
    let str = s[i]
    if (isPalindrome) {
      res = res.length < str.length ? str : res
    }
    for (let j = i + 1; j < s.length; j++) {
      str += s[j]
      if (isPalindrome(str)) {
        res = res.length < str.length ? str : res
      }
    }
  }

  return res
}

// ?2.找到字符串s的所有子集，判断,并不正确
function longestPalindrome(s) {
  const set = new Set()
  const path = []
  let res = ''

  backTracking(0)

  function backTracking(startIndex) {
    set.add(path.join(''))

    for (let i = startIndex; i < s.length; i++) {
      path.push(s[i])
      backTracking(i + 1)
      path.pop()
    }
  }

  for (const str of set) {
    if (isPalindrome(str)) {
      res = res.length > str.length ? res : str
    }
  }
  console.log(res)
}

longestPalindrome('babad')

// ?判断是否是回文字符串
function isPalindrome(str) {
  let end = str.length - 1
  for (let i = 0; i <= end; i++) {
    if (str[i] !== str[end]) {
      return false
    }

    end--
  }

  return true
}