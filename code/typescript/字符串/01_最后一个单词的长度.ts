// 给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中 最后一个 单词的长度。
// 单词是指仅由字母组成、不包含任何空格字符的最大子字符串。

function lengthOfLastWord(s: string): number {
  // 方法一：直接转成数组
  return s.trim().split(" ").pop()?.length || 0;

}

export {};
