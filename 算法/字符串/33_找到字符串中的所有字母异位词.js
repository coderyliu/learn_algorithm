// https://leetcode.cn/problems/find-all-anagrams-in-a-string/

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
// ?双指针 超时 思路是对的
var findAnagrams = function (s, p) {
  let l = 0
  let r = 0
  const res = []
  p = p.split('').sort((a, b) => a > b ? 1 : -1).join('')

  while (r < s.length) {
    r = l + p.length - 1
    let str = s.slice(l, r + 1).split('').sort((a, b) => a > b ? 1 : -1).join('')
    if (str === p) {
      res.push(l)
    }

    l++
  }
  console.log(res)
  return res
};

// ?典型滑动窗口
var findAnagrams=function(s,p){
  if(s.length<p.length) return []

  let valid=0
  let res=[]
  let left=0,right=0
  let window={},need={}
  for(const c of p){
    if(!need[c]) need[c]=0
    need[c]++
    window[c]=0
  }

  let needSize=Object.keys(need).length

  while(right<s.length){
    const c=s[right]
    right++
    
    if(need[c]){
      window[c]++
      if(window[c]===need[c]) valid++
    }

    if(valid===needSize) res.push(left)

    while(right-left>=p.length){
      const d=s[left]
      left++

      if(window[d]){
        if(need[d]===window[d]) valid--
        window[d]--
      }
    }
  }

  return res
}
console.log(findAnagrams("cbaebabacd", "abc"))
findAnagrams("abab", "ab")