/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  const len=Math.max(num1.length,num2.length)
  const arr1=num1.split('').reverse()
  const arr2=num2.split('').reverse()
  const arr3=[]

  let flag=0
  for(let i=0;i<len;i++){
    const n1=arr1[i]===undefined?0:Number(arr1[i])
    const n2=arr2[i]===undefined?0:Number(arr2[i])

    let sum=n1+n2+flag
    if(sum>=10){
      flag=Math.floor(sum/10)
      arr3.push(sum%10)
    }else{
      flag=0
      arr3.push(sum)
    }
  }

  if(flag!==0){
    arr3.push(flag)
  }
  return arr3.reverse().join('')
};