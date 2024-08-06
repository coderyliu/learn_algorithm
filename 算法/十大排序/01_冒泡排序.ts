// 冒泡排序--Bubble  sort
// 内排序：所有排序操作都在内存中完成； 
// 外排序：由于数据太大，因此把数据放在磁盘中，而排序通过磁盘和内存的数据传输才能进行；
// 时间复杂度O(n^2)  空间复杂度O(1)
function bubbleSort(arr:number[]):number[]{
  const len:number=arr.length
  for(let i=0;i<len;i++){
    for(let j=0;j<len-1-i;j++){
      if(arr[j]>arr[j+1]){
        const temp=arr[j+1]
        arr[j+1]=arr[j]
        arr[j]=temp
      }
    }
  }

  return arr
}

const arr=[2,1,3,6,8,7,9,5]
console.log(bubbleSort(arr))
export {}
