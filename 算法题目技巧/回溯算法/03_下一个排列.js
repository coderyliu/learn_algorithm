var nextPermutation = function (nums) {
  const res = []
  const path = []

  function backTracking(n, k, used) {
    if (path.length === k) {
      res.push([...path])
      return
    }
    for (let i = 0; i < k; i++) {
      if (used[i]) continue
      path.push(n[i])
      used[i] = true
      backTracking(n, k, used)
      path.pop()
      used[i] = false
    }
  }
  backTracking(nums, nums.length, [])
  console.log(res)
  for (let i = 0; i < res.length; i++) {
    if (res[i].join('') === nums.join('') && i !== res.length - 1) {
      // console.log(1)
      return res[i + 1]
    } else if (res[i].join('') === nums.join('') && i === res.length - 1) {
      // console.log(1)
      return res[0]
    }
  }
};
// console.log(nextPermutation([1,2,3]))
console.log(nextPermutation([3,2,1]))