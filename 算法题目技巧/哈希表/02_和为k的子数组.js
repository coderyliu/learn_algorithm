// https://leetcode-cn.com/problems/subarray-sums-divisible-by-k/solution/974-jsqian-zhui-he-map-by-gu-du-de-xiao-545qd/

// 首先要明白遇到连续子数组的问题用前缀和
// 前缀和是p[i]=p[0]+....+p[i],因此sum(i,j)就等于p[j]-p[i-1]，如果可以被k整除，根据同于定理即p[j]%k===p[i-1]%k

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function (nums, k) {
  let len = nums.length
  let befores = [0]
  for (let i = 0; i < len; i++) {
    befores.push(befores[i] + nums[i])
  }
  console.log(befores)
  let count = 0
  let map = new Map()
  map.set(0, 1)
  for (let i = 1; i <= len; i++) {
    let mod = ((befores[i] % k) + k) % k
    if (map.has(mod)) {
      count += map.get(mod)
    }
    let c = map.has(mod) ? map.get(mod) : 0
    map.set(mod, c + 1)
  }
  return count
};
subarraysDivByK([4, 5, 0, -2, -3, 1], 5)