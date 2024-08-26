function isPalindrome(s: string): boolean {
  // 双指针
  // 1. 处理字符串
  const str = s.replace(/[\W_]/g, "").toLowerCase();

  // 双指针
  let l = 0;
  let r = str.length - 1;
  while (l <= r) {
    // 2. 判断是否回文字符串
    if (str[l] !== str[r]) return false;
    l++;
    r--;
  }

  return true;
}

export {};
