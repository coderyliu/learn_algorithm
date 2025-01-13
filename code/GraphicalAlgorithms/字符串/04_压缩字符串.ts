// 给你一个字符数组 chars ，请使用下述算法压缩：
// 从一个空字符串 s 开始。对于 chars 中的每组 连续重复字符 ：
// 如果这一组长度为 1 ，则将字符追加到 s 中。
// 否则，需要向 s 追加字符，后跟这一组的长度。
// 压缩后得到的字符串 s 不应该直接返回 ，需要转储到字符数组 chars 中。需要注意的是，如果组长度为 10 或 10 以上，则在 chars 中会被拆分为多个字符。
// 请在 修改完输入数组后 ，返回该数组的新长度。

function compress(chars: string[]): number {
  // * 时间复杂度：O(n)
  // * 空间复杂度：O(1)
  let s = "";
  let start = 0;
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] !== chars[i + 1]) {
      s += chars[i];
      if (i - start + 1 > 1) {
        s += (i - start + 1).toString();
      }
      start = i + 1;
    }
  }
  // 修改原数组
  for (let i = 0; i < s.length; i++) {
    chars[i] = s[i];
  }
  // 删除多余的元素
  while (chars.length > s.length) {
    chars.pop();
  }
  return chars.length;
}

console.log(compress(["a", "a", "b", "b", "c", "c", "c"])); // 6
console.log(compress(["a"])); // 1
console.log(
  compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"])
); // 4

export {};
