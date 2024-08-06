// https://leetcode.cn/problems/first-bad-version/

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  // ?1.暴力查找
  return function (n) {
    // for(let i=1;i<=n;i++){
    //   if(isBadVersion(i)){
    //     return i
    //   }
    // }

    // ?2.二分查找
    let left = 0
    let right = n
    let mid
    while (left <= right) {
      mid = Math.floor((right - left) / 2) + left
      if (isBadVersion(mid)) {
        right = mid-1
      } else if (!isBadVersion(mid)) {
        left = mid + 1
      }
    }

    return left
  };
};