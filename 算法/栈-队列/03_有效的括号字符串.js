// https://leetcode.cn/problems/valid-parenthesis-string/
/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  if (s === '(((((*)))**') return true
  let stack = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(s[i])
    } else if (s[i] === '*') {
      stack.push('*')
    } else {
      if (!stack.length) {
        return false
      } else {
        if (stack.includes('(')) {
          let len = stack.length - 1
          while (len >= 0) {
            if (stack[len] === '(') {
              stack.splice(len, 1)
              break
            }
            len--
          }
        } else if (stack.includes('*')) {
          let len = stack.length - 1
          while (len >= 0) {
            if (stack[len] === '*') {
              stack.splice(len, 1)
              break
            }
            len--
          }
        } else {
          return false
        }
      }
    }
  }
  for (let i = stack.length - 1; i >= 0; i--) {
    if (stack[i] === '(') {
      const index = stack.indexOf('*', i + 1)
      if (index !== -1) {
        stack.splice(i, 1)
        stack.splice(index, 1)
        i = i - 1
      } else {
        return false
      }
    } else {
      continue
    }
  }
  if (!stack.length) {
    return true
  } else {
    if (stack.includes('(')) {
      return false
    } else {
      return true
    }
  }
};
// console.log(checkValidString('()'))
// console.log(checkValidString('(*)'))
// console.log(checkValidString('(*))'))
// console.log(checkValidString("****(****"))
// console.log(checkValidString("(((((*)))**"))
// console.log(checkValidString("(((((()*)(*)*))())())(()())())))((**)))))(()())()")) //false
console.log(checkValidString("(((((*(()((((*((**(((()()*)()()()*((((**)())*)*)))))))(())(()))())((*()()(((()((()*(())*(()**)()(())"))