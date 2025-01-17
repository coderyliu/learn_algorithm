// 对于字符串 s 和 t，只有在 s = t + t + t + ... + t + t（t 自身连接 1 次或多次）时，我们才认定 “t 能除尽 s”。
// 给定两个字符串 str1 和 str2 。返回 最长字符串 x，要求满足 x 能除尽 str1 且 x 能除尽 str2 。

function gcdOfStrings(str1: string, str2: string): string {
  if (str1 + str2 !== str2 + str1) {
    return "";
  }
  const gcdLength = gcd(str1.length, str2.length);
  return str1.slice(0, gcdLength);
}

function gcd(a: number, b: number): number {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

console.log(gcdOfStrings("ABCABC", "ABC")); // "ABC"
console.log(gcdOfStrings("ABABAB", "ABAB")); // "AB"
console.log(gcdOfStrings("LEET", "CODE")); // ""

export {};
