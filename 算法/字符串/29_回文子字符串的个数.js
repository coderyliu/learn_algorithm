// https://leetcode.cn/problems/a7VOhD/

/**
 * @param {string} s
 * @return {number}
 */
// ?1.暴力破解
var countSubstrings = function (s) {
  let count=0

  for(let i=0;i<s.length;i++){
    if(isPalindromic(s[i])) count++
    for(let j=i+1;j<s.length;j++){
      if(isPalindromic(s.slice(i,j+1))) count++
    }
  }

  return count
};

// 判断是否为回文子串
function isPalindromic(str){
  let len=str.length-1

  for(let i=0;i<=len;i++){
    if(str[i]!==str[len]){
      return false
    }

    len--
  }

  return true
}

// ?2.双指针
var countSubstrings=function(s){
  let count=0

  for(let i=0;i<s.length;i++){
    let res1='',res2=''
    for(let j=i;j<s.length;j++){
      res1+=s[j]
      res2=s[j]+res2
      if(res1===res2) count++
    }
  }

  return count
}