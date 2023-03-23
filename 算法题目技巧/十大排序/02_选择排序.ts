// 选择排序  selection sort
// 选择排序的思路是在数组中找到当前的最大(最小)元素，添加到数组的末尾(首部)
// 再从剩余的数中挑选，以此类推，知道遍历完毕
// 时间复杂度:O(n^2)  空间复杂度：O(1)

function selectionSort(arr:number[]):number[]{
  let minIndex:number
  let temp:number
  const len=arr.length
  console.time('选择排序耗时')
  for(let i=0;i<len-1;i++){
    minIndex=i
    for(let j=i+1;j<len;j++){
      if(arr[j]<arr[minIndex]){
        minIndex=j
      }
    }

    temp=arr[i]
    arr[i]=arr[minIndex]
    arr[minIndex]=temp
  }
  console.timeEnd('选择排序耗时')
  return arr
}
const arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48]
console.log(selectionSort(arr))
export {}
