// https://leetcode.cn/problems/longest-palindromic-substring/

// 判断字符串是否回文
function isPalindrome(s: string): boolean {
  // 双指针
  let l = 0;
  let r = s.length - 1;
  while (l <= r) {
    if (s[l] !== s[r]) return false;
    l++;
    r--;
  }
  return true;
}

function longestPalindrome(s: string): string {
  // 方法一：暴力解法 - 超出时间限制 O(n^3)
  // let max: string = "";
  // for (let i = 0; i < s.length; i++) {
  //   let r = i + 1;
  //   max = max.length > s[i].length ? max : s[i];
  //   let str = s[i];
  //   while (r < s.length) {
  //     str += s[r];
  //     if (isPalindrome(str)) {
  //       max = str.length > max.length ? str : max;
  //     }
  //     r++;
  //   }
  // }
  // return max;

  // 方法二：优化 - 中心扩散（如果是回文子串，那么它的左右两边元素肯定是对称的）
  // TODO
}

console.log(longestPalindrome("babad"));

export {};
