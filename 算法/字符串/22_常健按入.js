// https://leetcode.cn/problems/long-pressed-name/
/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
  // const map = new Map()
  // for (let i = 0; i < name.length; i++) {
  //   map.set(name[i], map.has(name[i]) ? map.get(name[i]) + 1 : 1)
  // }
  let index = 0
  for (let i = 0; i < typed.length; i++) {
    if (typed[i] !== name[index]) {
      if (typed[i] !== name[index - 1]) {
        return false
      } else {
        continue
      }
    } else if (typed[i] === name[index]) {
      index++
    }
  }
  if (index !== name.length) {
    return false
  }
  console.log(index)
  return true
};
console.log(isLongPressedName('alex', 'aaleex'))
console.log(isLongPressedName('saeed', 'ssaaedd'))
console.log(isLongPressedName('alexd', 'ale'))