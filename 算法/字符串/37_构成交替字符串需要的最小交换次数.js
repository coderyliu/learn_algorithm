// https://leetcode.cn/problems/minimum-number-of-swaps-to-make-the-binary-string-alternating/

/**
 * @param {string} s
 * @return {number}
 */
// ?没有考虑max1===max2情况
// var minSwaps = function (s) {
//   let max1 = 0
//   let max1Key
//   let max2 = 0
//   let max2Key

//   let max1Second
//   let max2Second
//   const map1 = new Map()
//   const map2 = new Map()

//   for (let i = 0; i < s.length; i++) {
//     if (i % 2 === 0) {
//       map1.set(s[i], map1.has(s[i]) ? map1.get(s[i]) + 1 : 1)
//     } else {
//       map2.set(s[i], map2.has(s[i]) ? map2.get(s[i]) + 1 : 1)
//     }
//   }

//   for (const item of map1) {
//     if (max1 <= item[1]) {
//       max1Key = item[0]
//       max1 = item[1]
//       max1Second = max1Key
//     }
//   }

//   for (const item of map1) {
//     if (max2 <= item[1]) {
//       max2Key = item[0]
//       max2 = item[1]
//       max2Second = max2Key
//     }
//   }

//   let count = 0
//   if (s.length < 3) return count
//   for (let i = 0; i < s.length; i++) {
//     if (i % 2 === 0 && s[i] !== max1Key) {
//       count++
//     } else if (1 % 2 !== 0 && s[i] !== max2Key) {
//       count++
//     }
//   }

//   return count
// };

var minimumOperations = function (nums) {
  if (nums.length == 1) {
    return 0;
  } //建立奇偶哈希表 
  const map1 = new Map();
  const map2 = new Map();
  nums.forEach((item, index) => {
    if (index % 2 == 0) {
      if (map1.has(item)) {
        map1.set(item, map1.get(item) + 1);
      } else {
        map1.set(item, 1);
      }
    } else {
      if (map2.has(item)) {
        map2.set(item, map2.get(item) + 1);
      } else {
        map2.set(item, 1);
      }
    }
  });
  let firstMaxVal = 0;
  let firstMaxVal2 = 0;
  let firstKey = "";
  let secondKey = "";
  let secondMaxVal = 0;
  let secondMaxVal2 = 0;
  // 第一大和第二大数字及第一大的Key 
  map1.forEach((val, key) => {
    console.log(key, val);
    if (val > firstMaxVal) {
      firstKey = key;
      firstMaxVal2 = firstMaxVal;
      firstMaxVal = val;
    } else if (val > firstMaxVal2) {
      firstMaxVal2 = val;
    }
  });
  map2.forEach((val, key) => {
    console.log(key, val);
    if (val > secondMaxVal) {
      secondKey = key;
      secondMaxVal2 = secondMaxVal;
      secondMaxVal = val;
    } else if (val > secondMaxVal2) {
      secondMaxVal2 = val;
    }
  });
  if (firstKey !== secondKey) {
    return nums.length - firstMaxVal - secondMaxVal;
  } else {
    return Math.min(nums.length - firstMaxVal - secondMaxVal2, nums.length - secondMaxVal - firstMaxVal2);
  }
};