// https://leetcode.cn/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-lcof/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// ?1.哈希
var singleNumbers = function (nums) {
  const map = new Map()
  const res = []
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], map.has(nums[i]) ? map.get(nums[i]) + 1 : 1)
  }
  for (const item of map) {
    if (item[1] === 1) {
      res.push(item[0])
    }
  }

  return res
};

// ?2.遍历+判断
var singleNumbers = function (nums) {
  return Array.from(nums.reduce((t, num) => {
    t.has(num) ? t.delete(num) : t.add(num);
    return t;
  }, new Set()));
};
console.log(singleNumbers([4, 1, 4, 6]))