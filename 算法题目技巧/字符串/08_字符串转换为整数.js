// https://leetcode.cn/problems/ba-zi-fu-chuan-zhuan-huan-cheng-zheng-shu-lcof/
/**
 * @param {string} str
 * @return {number}
 */
// ? 1.直接使用库函数
var strToInt = function (str) {
  const res = parseInt(str)
  if (isNaN(res)) {
    return 0
  }

  if (res < (-2) ** 31) {
    return (-2) ** 31
  } else if (res > 2 ** 31 - 1) {
    return 2 ** 31 - 1
  }
  return res
};

// ? 2.字符串转换为空格
var strToInt = function (str) {
  let res = ''
  let substr = str.trim()
  let reg = /[0-9]/
  for (let i = 0; i < substr.length; i++) {
    if (substr[i] === '-' && i === 0) {
      res += substr[i]
      continue
    }

    if (substr[i] === '+' && i === 0) {
      res += ''
      continue
    }
    if (reg.test(substr[i])) {
      res += substr[i]
    } else {
      break
    }
  }

  if (res < (-2) ** 31) {
    return (-2) ** 31
  } else if (res > 2 ** 31 - 1) {
    return 2 ** 31 - 1
  }

  if (res === '-' || res === '+') {
    return 0
  }
  return res
};

strToInt('45')
strToInt('word list 45')
strToInt(' -45')
strToInt('3.1415926')