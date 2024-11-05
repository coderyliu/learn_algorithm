// https://leetcode.cn/problems/valid-triangle-number/description/

function triangleNumber(nums: number[]): number {
  // 三角形的三边关系 a + b > c（任意两边之和大于第三边）
  // 方法一：暴力 - 三层循环
  // *时间复杂度：O(n^3)
  // *空间复杂度：O(1)
  // const len = nums.length;
  // let count: number = 0;
  // for (let i = 0; i < len - 2; i++) {
  //   for (let j = i + 1; j < len - 1; j++) {
  //     for (let k = j + 1; k < len; k++) {
  //       const res1 = nums[i] + nums[j];
  //       const res2 = nums[i] + nums[k];
  //       const res3 = nums[j] + nums[k];
  //       if (res1 > nums[k] && res2 > nums[j] && res3 > nums[i]) {
  //         count++;
  //       }
  //     }
  //   }
  // }

  // return count;

  // 方法二：排序 + 暴力
  // ?排序完之后，只要满足两个较小边之和大于第三边，则一定可以构成三角形
  // *时间复杂度：O(n^3 + nlogn)
  // *空间复杂度：O(1)
  // nums.sort((a, b) => a - b);
  // const len = nums.length;
  // let count: number = 0;
  // for (let i = 0; i < len - 2; i++) {
  //   for (let j = i + 1; j < len - 1; j++) {
  //     const sum = nums[i] + nums[j];
  //     for (let k = j + 1; k < len; k++) {
  //       if (sum > nums[k]) {
  //         // 满足三角形条件
  //         count++;
  //       } else {
  //         // 不满足三角形条件，直接跳出循环
  //         break;
  //       }
  //     }
  //   }
  // }

  // return count;

  // 方法三：排序 + 双指针
  nums.sort((a, b) => a - b);
  const len = nums.length;
  let count: number = 0;
  for (let i = 0; i < len - 2; i++) {
    // 第一条边 nums[i]
    let j = i + 1; // 第二条边 nums[j]
    let k = j; // ?k是最后小于nums[i] + nums[j]的下标
    while (j < len - 1) {
      while (k + 1 < len) {
        // 第三条边 nums[k + 1]
        if (nums[k + 1] < nums[i] + nums[j]) {
          k++;
        } else {
          // 不满足三角形条件，跳出循环
          break;
        }
      }
      count += k - j;
      j++;
      if (k < j) {
        k = j;
      }
    }
  }

  return count;
}

console.log(triangleNumber([2, 2, 3, 4])); // 3
console.log(triangleNumber([4, 2, 3, 4])); // 4

export {};
