// 76. 最小覆盖子串:给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。
// 如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。

// 注意：对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
// 如果 s 中存在这样的子串，我们保证它是唯一的答案。
 
// 示例 1： 输入：s = "ADOBECODEBANC", t = "ABC"  输出："BANC"
// 示例 2： 输入：s = "a", t = "a"  输出："a"
// 示例 3:  输入: s = "a", t = "aa" 输出: ""  解释: t 中两个字符 'a' 均应包含在 s 的子串中，因此没有符合条件的子字符串，返回空字符串。
 
// 提示：1 <= s.length, t.length <= 105 s 和 t 由英文字母组成

function getMinString(s,t){
  let l=0
  let r=0
  const need=new Map()
  for(let i=0;i<t.length;i++){
    need.set(t[i],need.has(t[i])?need.get(t[i])+1:1)
  }
  let needType=need.size
  let res=''
  while(r<s.length){
    const c=s[r]
    if(need.has(c)){
      need.set(c,need.get(c)-1)
      if(need.get(c)===0) needType-=1
    }
    while(needType===0){
      console.log(s.slice(l,r+1))
      let newRes=s.slice(l,r+1)
      if(!res||newRes.length<res.length) res=newRes
      const c2=s[l]
      if(need.has(c2)){
        need.set(c2,need.get(c2)+1)
        if(need.get(c2)===1) needType+=1
      }
      l+=1
    }
    r+=1
  }
  return res
}
// debugger
console.log(getMinString("ADOBECODEBANC","ABC"))