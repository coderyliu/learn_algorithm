function reverseMessage(message: string): string {
  // 方法一：使用JS API
  // 1. 去除单词中的前导空格
  // message = message.trim();
  // message = message.replace(/\s+/g, " ");
  // 2. 反转单词
  // return message.split(" ").reverse().join(" ");

  // 方法二：先反转整个字符串，再反转单词
  let res: string = "";
  message = message.trim().replace(/\s+/g, " ");
  const reverseWords = (str: string): string => {
    const arr: string[] = Array.from(str);
    let l = 0;
    let r = arr.length - 1;
    while (l <= r) {
      [arr[l], arr[r]] = [arr[r], arr[l]];
      l++;
      r--;
    }
    return arr.join("");
  };
  const ret = reverseWords(message).split(" ");
  for (const s of ret) {
    res += reverseWords(s) + " ";
  }
  return res.trim();
}

console.log(reverseMessage("I am a student"));

export {};
