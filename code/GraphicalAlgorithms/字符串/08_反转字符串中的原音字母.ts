// 给你一个字符串 s ，仅反转字符串中的所有元音字母，并返回结果字符串。
// 元音字母包括 'a'、'e'、'i'、'o'、'u'，且可能以大小写两种形式出现不止一次。

function reverseVowels(s: string): string {
  // * 时间复杂度 O(n)
  // * 空间复杂度 O(n)
  // 1. 记录元音字母出现的位置
  const arr: number[] = [];
  const set = new Set(["a", "e", "i", "o", "u"]);
  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i].toLowerCase())) {
      arr.push(i);
    }
  }

  // 2. 判断是否存在元音字母
  // 2.1 不存在元音字母直接返回
  if (!arr.length) return s;
  // 2.2 存在元音字母交换顺序
  let l = 0;
  let r = arr.length - 1;
  const strArr = s.split("");
  while (l <= r) {
    [strArr[arr[l]], strArr[arr[r]]] = [strArr[arr[r]], strArr[arr[l]]];
    l++;
    r--;
  }

  return strArr.join("");
}

console.log(reverseVowels("IceCreAm")); // AceCreIm

export {};
