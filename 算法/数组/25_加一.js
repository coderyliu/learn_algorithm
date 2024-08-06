/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  if (Number(digits.join('')) < 2 ** 31 - 1) {
    return ((Number(digits.join('')) + 1) + '').split('')
  } else {
    return ((BigInt(digits.join('')) + 1n) + '').split('')
  }
};