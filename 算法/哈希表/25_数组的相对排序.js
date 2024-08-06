// https://leetcode.cn/problems/0H97ZC/

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  const map = new Map()

  for (let i = 0; i < arr2.length; i++) {
    map.set(arr2[i], i)
  }

  let res = []
  let ret = []
  let arr = []
  for (let i = 0; i < arr1.length; i++) {
    if (!map.has(arr1[i])) {
      res.push(arr1[i])
    } else {
      if (ret.includes(arr1[i])) {
        arr.push(arr1[i])
      } else {
        ret[map.get(arr1[i])] = arr1[i]
      }
    }
  }

  for (const item of arr) {
    const index = ret.lastIndexOf(item)
    ret.splice(index, 0, item)
  }

  res.sort((a, b) => a - b)
  ret.push(...res)

  return ret
};
relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])