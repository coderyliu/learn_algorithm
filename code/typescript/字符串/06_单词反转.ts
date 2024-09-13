// https://leetcode.cn/problems/reverse-words-in-a-string/

function reverseWords(s: string): string {
  // 方法一： 利用数组反转
  // s = s.trim().replace(/\s+/g, " ");
  // const res = s.split(" ").reverse().join(" ");
  // return res;

  // 方法二：
  // 1. 去除单词里的空格
  // 2. 先整体反转字符串：双指针
  // 3. 再逐个单词反转
  let res: string = "";
  s = s.trim().replace(/\s+/g, " ");
  const reverseWords = (str: string): string => {
    const arr: string[] = Array.from(str);
    let l = 0;
    let r = s.length - 1;
    while (l <= r) {
      [arr[l], arr[r]] = [arr[r], arr[l]];
      l++;
      r--;
    }

    return arr.join("");
  };
  const ret = reverseWords(s).split(" ");
  for (const s of ret) {
    res += reverseWords(s) + " ";
  }

  return res.trim();
}

console.log(reverseWords("the sky is  blue"));
console.log(reverseWords("  hello world  "));

export {};
