// https://leetcode.cn/problems/UhWRSj/

/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dictionary, sentence) {
  let arr = sentence.split(' ')
  dictionary.sort((a, b) => a.length - b.length)

  let res = []
  for (let i = 0; i < arr.length; i++) {
    let flag = false
    for (const item of dictionary) {
      if (arr[i].startsWith(item)) {
        flag = true
        res.push(item)
        break
      }
    }
    if (!flag) res.push(arr[i])
  }

  return res.join(' ')
};
replaceWords(["cat", "bat", "rat"], "the cattle was rattled by the battery")