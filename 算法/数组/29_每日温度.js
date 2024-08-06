// https://leetcode.cn/problems/iIQa4I/

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
// 暴力破解
var dailyTemperatures = function (temperatures) {
  const res=[]
  for(let i=0;i<temperatures.length;i++){
    for(let j=i+1;j<temperatures.length;j++){
      if(temperatures[j]>temperatures[i]){
        res.push(j-i)
      }
    }
    if(res.length!==i-1){
      res.push(0)
    }
  }
  return res
};