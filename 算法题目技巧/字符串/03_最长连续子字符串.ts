var lengthOfLongestSubstring = function (s: string): number {
  let res = 0;
  let l = 0;
  let r = 1;
  if (s.length === 0) return res;
  while (l < s.length) {
    while (s[l] !== s[r]&&r<s.length) {
      if (res === 0) {
        res = r - l + 1;
      } else {
        res = res > r - 1 + 1 ? res : r - l + 1;
      }
      r++;
    }
    l++;
  }
  return res;
};
console.log(lengthOfLongestSubstring("abcabcbb"));

export {};
