// https://leetcode.cn/problems/M1oyTv/
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
// ?滑动窗口+map
var minWindow = function (s, t) {
  const map=new Map()

  for(let i=0;i<t.length;i++){
    map.set(t[i],map.has(t[i])?map.get(t[i])+1:1)
  }

  let l=0,r=0
  let valid=map.size
  let res=''
  while(r<s.length){
    if(map.has(s[r])){
      map.set(s[r],map.get(s[r])-1)
      if(map.get(s[r])===0) valid--
    }

    while(valid===0){
      if(!res){
        res=s.slice(l,r+1)
      }else{
        res=res.length>s.slice(l,r+1).length?s.slice(l,r+1):res
      }

      if(map.has(s[l])){
        map.set(s[l],map.get(s[l])+1)
        if(map.get(s[l])===1) valid++
      }

      l++
    }
    r++
  }

  return res
};