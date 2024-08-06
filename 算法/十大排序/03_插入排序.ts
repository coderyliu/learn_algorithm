// 插入排序 insertion sort
// 插入排序的思路是:取出第一个元素，认为他有序，接着再取出下一个元素，在已排序的数组中寻找位置插入
// 时间复杂度:O(n^2)

function insertionSort(arr: number[]): number[] {
  console.time("插入排序耗时:");

  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];

    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }

  console.timeEnd("插入排序耗时:");
  return arr;
}
const arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48]
console.log(insertionSort(arr))

export {}