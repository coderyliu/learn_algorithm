/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  // 利用字符串排序后的顺序是否相等
  const map = new Map()

  for (let i = 0; i < strs.length; i++) {
    let str = strs[i].split('').sort().join('')
    // console.log(str)
    if (map.has(str)) {
      let temp = map.get(str)
      temp.push(strs[i])
      map.set(str, temp)
    } else {
      map.set(str, [strs[i]])
    }
  }

  return [...map.values()]
};