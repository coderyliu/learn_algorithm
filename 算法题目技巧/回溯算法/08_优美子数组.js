// 暴力超市
var numberOfSubarrays = function (nums, k) {
  let res = [],
    count = 0,
    ret = 0
  for (let i = 0; i <= nums.length - k; i++) {
    for (let j = k + i; j <= nums.length; j++) {
      res.push(nums.slice(i, j))
    }
  }
  for (const item of res) {
    for (let i = 0; i < item.length; i++) {
      if (item[i] % 2 === 1) {
        count++
      }
    }
    if (count === k) {
      ret++
    }
    count = 0
  }
  console.log(ret)
  return ret
};
numberOfSubarrays([1, 1, 2, 1, 1], 3)
numberOfSubarrays([2, 4, 6], 1)
numberOfSubarrays([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2)

var numberOfSubarrays = function (nums, k) {
  // 保证循环时 从1开始时 可以正常
  let arri = [-1],
    res = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 1) {
      arri.push(i);
    }
  }
  //最后把nums.length 写入数组  处理边界问题  也不知道为什么  应该是这个算法原因
  arri.push(nums.length);
  for (let j = 1; j < arri.length - k; j++) {
    // 主要的算法   多理解应该可以在其他地方用上
    res += (arri[j] - arri[j - 1]) * (arri[j + k] - arri[j + k - 1]);
  }
  return res;

}