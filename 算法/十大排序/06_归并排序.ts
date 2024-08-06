// 归并排序 merge sort
// 归并排序的思想就是分而治之，主要用户合并有序数组
// 对于无序的数组，那么就要递归，分成两个数组，然后再分再分成有序的数组合并

function mergeSort(arr:number[]):any{
  if(arr.length<=1){
    return arr
  }

  const middle=Math.floor(arr.length/2)
  let left=arr.slice(0,middle)
  let right=arr.slice(middle)

  return merge(mergeSort(left),mergeSort(right))
}

function merge(left:number[],right:number[]):any{
  const result=[]

  while(left.length&&right.length){
    if(left[0]<=right[0]){
      result.push(left.shift())
    }else{
      result.push(right.shift())
    }
  }
  while(left.length){
    result.push(left.shift())
  }

  while(right.length){
    result.push(right.shift())
  }

  return result
}

const arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(mergeSort(arr))

export {}