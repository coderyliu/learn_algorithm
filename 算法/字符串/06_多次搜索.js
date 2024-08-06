/**
 * @param {string} big
 * @param {string[]} smalls
 * @return {number[][]}
 */
var multiSearch = function (big, smalls) {
  if (!smalls.length) return []
  const result = []
  let res = []
  for (let i = 0; i < smalls.length; i++) {
    res = []
    if (smalls[i] === "") {
      result.push(res)
      continue
    }
    let index = big.indexOf(smalls[i])
    while (index !== -1) {
      res.push(index)
      index = big.indexOf(smalls[i], index + 1)
    }
    result.push(res)
  }
  return result
};
console.log(multiSearch("mississippi", ["is", "ppi", "hi", "sis", "i", "ssippi"]))
console.log(multiSearch("abc", [""]))