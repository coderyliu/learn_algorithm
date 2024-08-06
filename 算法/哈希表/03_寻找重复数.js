var findDuplicate = function (nums) {
  // left right 为数值区间而不是下标
  let left = 1,
    right = nums.length - 1,
    mid;
  while (left < right) {
    // mid = left + ((right - left) >> 1);
    mid = left + Math.floor((right - left) / 2)
    // 计算小于等于mid的数字个数
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
      // if (nums[i] <= mid) count++;
      count += nums[i] <= mid;
    }
    if (count > mid) { // 假设mid=4小于等于4的数只能为[1,2,3,4]4个如果大于4个说明[1,4]有重复数字
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  // 此时有left = right 即为重数数字
  return left;
};