// function getLen(n1,n2){
//   const col=Math.pow(n1.x-n2.x)
//   const row=Math.pow(n1.y-n2.y)

//   const len=Math.sqrt(row+col)
// }

// ?1
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 寻找包含e的单词的个数
 * @param string string字符串 输入字符串，不同单词用空格隔开
 * @return int整型
 */
function findEwordCount(string) {
  let count = 0
  const arr = string.split(' ')
  for (const item of arr) {
    if (item.includes('e') || item.includes('E')) {
      count++
    }
  }
  return count
}

// ?2
/*
 * function Point(a, b){
 *   this.x = a || 0;
 *   this.y = b || 0;
 * }
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 求四个点的面积
 * @param p1 Point类 点1
 * @param p2 Point类 点2
 * @param p3 Point类 点3
 * @param p4 Point类 点4
 * @return long长整型
 */
function getArea(p1, p2, p3, p4) {
  let l1 = Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2))
  let l2 = Math.sqrt(Math.pow(p2.x - p3.x, 2) + Math.pow(p2.y - p3.y, 2))
  let l3 = Math.sqrt(Math.pow(p3.x - p4.x, 2) + Math.pow(p3.y - p4.y, 2))
  let l4 = Math.sqrt(Math.pow(p1.x - p4.x, 2) + Math.pow(p1.y - p4.y, 2))
  let l5 = Math.sqrt(Math.pow(p1.x - p3.x, 2) + Math.pow(p1.y - p3.y, 2))

  if (l1 === l2 && l1 === l3 && l1 === l4) {
    return Math.round(l1 ** 2)
  }

  let s1 = (1 / 4) * Math.sqrt((l1 + l2 + l5) * (l1 + l2 - l5) * (l1 + l5 - l2) * (l5 + l2 - l1))
  let s2 = (1 / 4) * Math.sqrt((l3 + l4 + l5) * (l3 + l4 - l5) * (l3 + l5 - l4) * (l5 + l4 - l3))

  return Math.round(s1 + s2)

}

// ?3
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 查找"iflytek"子串
 * @param str string字符串 输入字符串
 * @return int整型
 */
function findIflytek(str) {

}

findIflytek("iflytekiflytek")