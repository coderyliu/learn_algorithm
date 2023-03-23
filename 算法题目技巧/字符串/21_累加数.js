// https://leetcode.cn/problems/additive-number/
/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function (num) {
  let sum;
  for (let i = 1; i < num.length / 2; i++) {
    if (i > 1 && num[0] === '0') continue;
    for (let j = i + 1; j < num.length; j++) {
      if (j > i + 1 && num[i] === '0') continue;
      sum = '' + (+num.slice(0, i) + +num.slice(i, j));
      if (sum === num.slice(j, j + sum.length)) {
        a = +num.slice(i, j), b = +sum, k = j + sum.length;
        while (k < num.length) {
          sum = a + b;
          [a, b] = [b, sum];
          if ('' + b !== num.slice(k, k + ('' + sum).length)) break;
          k += ('' + b).length;
        }
        if (k === num.length) return true;
      }
    }
  }
  return false;
};