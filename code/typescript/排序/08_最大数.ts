// https://leetcode.cn/problems/largest-number/description/

function largestNumber(nums: number[]): string {
  // 思路：依次选取每个数字中首位最大的数字，相同则比较下一位 - 版本号比较
  // !这种可以通过部分用例
  // const versionSort = (nums: number[]): number[] => {
  //   return nums.sort((version1, version2): number => {
  //     const arr1 = String(version1).split("");
  //     const arr2 = String(version2).split("");
  //     const len = Math.max(arr1.length, arr2.length);
  //     for (let i = 0; i < len; i++) {
  //       const num1 = arr1[i] || 0;
  //       const num2 = arr2[i] || 0;
  //       if (num1 > num2) return -1;
  //       if (num1 < num2) return 1;
  //     }
  //     return 0;
  //   });
  // };

  // return versionSort(nums).join("");

  // 思路二：将number类型转成string类型，然后比较字符串大小，取最大值
  nums.sort((a, b) => {
    const strA = String(a);
    const strB = String(b);
    return Number(strB + strA) > Number(strA + strB) ? 1 : -1;
  });
  if (nums[0] === 0) return "0";
  return nums.join("");
}

console.log(largestNumber([3, 30, 34, 5, 9]));
console.log(largestNumber([10, 2]));

export {};
