/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  nums.sort((a, b) => (a.toString() + b.toString()) < (b.toString() + a.toString()) ? 1 : -1);
  //  console.log(nums);
  if (nums[0] === 0) return '0';
  return nums.join('');

  // nums.sort((a, b) => {
  //   console.log(a, b)
  //   let arrA = a.toString().split('')
  //   let arrB = b.toString().split('')

  //   let i = 0
  //   while (true) {
  //     const s1 = arrA[i]
  //     const s2 = arrB[i]
  //     i++
  //     if (s1 === undefined && s2 !== undefined) {
  //       if (s2 > arrA[i - 1]) {
  //         return arrA.length - arrB.length
  //       } else {
  //         return arrB.length - arrA.length
  //       }
  //     }
  //     if (s1 !== undefined && s2 === undefined) {
  //       if (s1 > arrB[i - 1]) {
  //         return arrA.length - arrB.length
  //       } else {
  //         return arrB.length - arrA.length
  //       }
  //     }
  //     if (s1 === s2) continue

  //     return s2 - s1
  //   }
  // })

  // return nums
};

console.log(largestNumber([3, 30, 34, 5, 9]))