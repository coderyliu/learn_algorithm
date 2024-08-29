function isPalindrome(x: number): boolean {
  // 双指针
  let str = x + "";
  let l = 0;
  let r = str.length - 1;
  while (l <= r) {
    if (str[l] !== str[r]) return false;
    r--;
    l++;
  }

  return true;
}

export {};
