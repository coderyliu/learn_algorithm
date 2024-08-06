// 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。
// 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。

// 这个是去重操作
function subSets(nums) {
  const path = []
  // let res = []
  const set = new Set()

  function backTracking(startIndex) {
    // res.push([...path]);
    if (path.length) {
      set.add(path.join(''))
    }
    for (let i = startIndex; i < nums.length; i++) {
      path.push(nums[i]);
      backTracking(i + 1);
      path.pop();
    }
  }
  backTracking(0);

  return [[]].concat(Array.from(set).map(i => i.split('')))
}

console.log(subSets([1, 2, 3]));