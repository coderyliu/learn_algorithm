// 希尔排序:shell sort
// 希尔排序的思想就是：化远为近  减少交换的次数和移动的距离

function shellSort(arr:number[]):number[]{
  const len=arr.length
  let temp:number
  let gap=1
  console.time('希尔排序耗时:')

  while(gap<(len/5)){
    gap=gap*5+1
  }

  for(gap;gap>0;gap=Math.floor(gap/5)){
    for(let i=gap;i<len;i++){
      temp=arr[i]
      for(let j=i-gap;j>=0&&arr[j]>temp;){}
    }
  }

  return arr
}