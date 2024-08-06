// https://leetcode.cn/problems/interleaving-string

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
// ?1.直接暴力
var isInterleave = function (s1, s2, s3) {
  if(s1.length+s2.length!==s3.length) return false

  let arr1=s1.split('')
  let arr2=s2.split('')
  console.log(arr1,arr2)

  for(let i=0;i<s3.length;i++){
    if(arr1.length&&arr1[0]===s3[i]){
      arr1.shift()
    }else if(arr2.length&&arr2[0]===s3[i]){
      arr2.shift()
    }else{
      console.log(i)
      return false
    }
  }

  // return !arr1.length&&!arr2.length
};

console.log(isInterleave("aabcc","dbbca","aadbbcbcac"))