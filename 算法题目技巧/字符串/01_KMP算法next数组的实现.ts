// 前缀表不删减也不移动
function next(needle:string[]):number[]{
  let next:number[]=[]
  let j:number=0//j表示前缀开始位置
  next.push(j)//j=0无相等前后缀
  // i表示后缀开始的位置
  for(let i=1;i<needle.length;i++){
    // 前后缀不相等
    while(j>0&&needle[i]!==needle[j]){
      j=next[j-1]
    }
    // 前后缀相等
    if(needle[i]===needle[j]){
      j++
    }
    next.push(j)
  }
  return next
}

const s:string='aabaaf'
const needle:string[]=s.split('')
const res=next(needle)
console.log(res)

export {}