// https://leetcode.cn/problems/palindrome-number/

/**
 * @param {number} x
 * @return {boolean}
 */
// ?1.转为字符串，判断是否回文
var isPalindrome = function (x) {
  let str=x+''

  let end=str.length-1
  for(let i=0;i<=end;i++){
    if(str[i]!==str[end]){
      return false
    }
    end--
  }

  return true
};

// ?2.利用数组的reverse方法
var isPalindrome = function (x) {
  let str=x+''

  let str2=str.split('').reverse().join('')

  return str===str2
};
