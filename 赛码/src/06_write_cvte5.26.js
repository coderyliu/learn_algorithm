// 1.字符串匹配
function strXuanZhuan(str, s2) {
  for (let i = 0; i < str.length; i++) {
    let res = str.slice(str.length - i) + str.slice(0, str.length - i)
    if (res.includes(s2)) {
      return true
    }
  }
  return false
}
console.log(strXuanZhuan('ABCD', 'CDA'))


// 2.rgba转十六进制
function handleRgba(rgbaStr) {
  let res = '#'
  let str = rgbaStr.slice(5, rgbaStr.length - 1)
  const arr = str.split(',')
  for (let i = 0; i < arr.length - 1; i++) {
    let item = Number(arr[i]).toString(16)
    if (item.length === 1) {
      item = '0' + item
    }
    res += item
  }
  console.log([res, arr[3]])
}
handleRgba('rgba(255,255,255,0.4)')
handleRgba('rgba(253,253,253,0.2)')
handleRgba('rgba(200,200,200,0.2)')
handleRgba('rgb(255, 145, 145,0.2)')