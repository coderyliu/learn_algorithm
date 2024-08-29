function trailingZeroes(n: number): number {
  // 会超出时间限制
  // if (n === 0) return 0;
  // let sum: bigint = 1n;
  // let count = 0;
  // while (n > 0) {
  //   sum = sum * BigInt(n);
  //   n--;
  // }

  // const str = (sum + "").replace(/0*$/g, "");
  // return (sum + "").length - str.length;

  // 简洁做法
  let count = 0;
  while (n > 0) {
    count += Math.floor(n / 5);
    n = Math.floor(n / 5);
  }
  return count;
}

export {};
