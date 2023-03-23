// 思路：先转化为二进制，在比较位置的不同

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let x1,y1
  if(x===0&&y!==0){
    x1=[0]
    y1=getBinaryNum(y)
  }else if(x!==0&&y===0){
    x1=getBinaryNum(x)
    y1=[0]
  }else if(x===0&&y===0){
    x1=[0]
    y1=[0]
  }else{
    x1=getBinaryNum(x)
    y1=getBinaryNum(y)
  }

  let len1=x1.length
  let len2=y1.length

  while(len1<len2){
    x1.unshift(0)
    len1=x1.length
  }

  while(len1>len2){
    y1.unshift(0)
    len2=y1.length
  }

  let count=0
  for(let i=0;i<len1;i++){
    if(x1[i]!==y1[i]){
      count++
    }
  }

  return count

  // ?求一个数的二进制
  function getBinaryNum(num){
    const res=[]
    while(num!==1){
      const flag=num%2
      res.unshift(flag)
      num=Math.floor(num/2)
    }
    res.unshift(1)

    return res
  }
};

console.log(hammingDistance(3,1))
console.log(hammingDistance(1,4))