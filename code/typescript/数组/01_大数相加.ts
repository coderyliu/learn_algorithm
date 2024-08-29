function plusOne(digits: number[]): number[] {
  // 方法一：借助API
  // const res = BigInt(digits.join('')) + 1n
  // return (res + '').split('').map(item => +item)

  // 方法二：大数相加
  let carry = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    const sum = digits[i] + carry;
    if (sum >= 10) {
      const n = sum % 10;
      carry = Math.floor(sum / 10);
      digits[i] = n;
    } else {
      carry = 0;
      digits[i] = sum;
      break;
    }
  }

  if (carry) {
    digits.unshift(carry);
  }

  return digits;
}

export {};
