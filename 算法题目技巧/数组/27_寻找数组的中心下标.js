/**
 * @param {number[]} nums
 * @return {number}
 */
// ?直接暴力
var pivotIndex = function (nums) {
  if (nums.length === 1) return 0

  let sum=nums.slice(1).reduce((pre,cur)=>pre+cur,0)
  if(sum===0) return 0

  for (let i = 1; i < nums.length - 1; i++) {
    const leftSum = nums.slice(0, i).reduce((pre, cur) => pre + cur, 0)
    const rightSum = nums.slice(i + 1, nums.length).reduce((pre, cur) => pre + cur, 0)

    if(leftSum===rightSum){
      return i
    }
  }

  sum=nums.slice(0,nums.length-1).reduce((pre,cur)=>pre+cur,0)
  if(sum===0) return nums.length-1

  return -1
};