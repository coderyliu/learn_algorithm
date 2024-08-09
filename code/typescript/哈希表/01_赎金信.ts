// 给你两个字符串：ransomNote 和 magazine ，判断 ransomNote 能不能由 magazine 里面的字符构成。如果可以，返回 true ；否则返回 false 。
// magazine 中的每个字符只能在 ransomNote 中使用一次。

// 示例 1：
// 输入：ransomNote = "a", magazine = "b"
// 输出：false

// 示例 2：
// 输入：ransomNote = "aa", magazine = "ab"
// 输出：false

// 示例 3：
// 输入：ransomNote = "aa", magazine = "aab"
// 输出：true

// 提示： 1 <= ransomNote.length, magazine.length <= 105;ransomNote 和 magazine 由小写英文字母组成

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
function canConstruct(ransomNote: string, magazine: string): boolean {
  const map = new Map();
  for (const str of magazine) {
    if (map.has(str)) {
      map.set(str, map.get(str) + 1);
    } else {
      map.set(str, 1);
    }
  }

  for (const str of ransomNote) {
    if (map.has(str)) {
      const num = map.get(str);
      if (num <= 0) return false;
      map.set(str, map.get(str) - 1);
    } else {
      return false;
    }
  }

  return true;
}
