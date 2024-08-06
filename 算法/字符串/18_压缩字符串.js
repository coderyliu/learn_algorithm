// https://leetcode.cn/problems/string-compression/solution/
/**
 * @param {character[]} chars
 * @return {number}
 */
// ?1.使用哈希，会有额外空间
var compress = function (chars) {
  const map = new Map()
  for (const c of chars) {
    map.set(c, map.has(c) ? map.get(c) + 1 : 1)
  }
  let count = 0
  chars = []
  for (const item of map) {
    chars.push(item[0])
    if (item[1] === 1) {
      chars.push('1')
      count += 1
    } else if (item[1] < 10) {
      chars.push(`${item[1]}`)
      count += 2
    } else {
      chars = chars.concat(item[1].toString().split(''))
      count += 3
    }
  }
  console.log(chars)
  return chars.length
};


// ?2.双指针
/**
 * 双指针法
 * 1. 指针i表示已经压缩结果的末尾，指针j表示未压缩的头部
 * 2. 当遇到相同的字符串，指针j往后滑动，直到遇到不同的字符
 *    2.1 指针j滑动的距离即为当前字符的长度
 *    2.2 因为这组字符每一项只展示一个字符，故需要将长度转为字符然后挨个赋值
 * 3. 直到未压缩指针j的值指到末尾时，结束遍历
 *    3.1 已经压缩的指针i每次递增到最后即为数组的新长度
 */
var compress = function (chars) {
  var len = chars.length
  for (var i = 0, j = 0; j < len;) {
    chars[i] = chars[j]
    var temp = j
    while (j < len && chars[i] === chars[j]) {
      j++
    }
    i++
    var dis = j - temp
    if (dis > 1) {
      var distance = Array.from('' + dis)
      for (var k = 0; k < distance.length; k++) {
        chars[i++] = distance[k]
      }
    }

  }
  return i
}

// compress(['a'])
compress(['a', 'a', 'b', 'b', 'c', 'c', 'c'])
// compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"])