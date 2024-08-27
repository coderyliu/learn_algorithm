function threeSum(nums: number[]): number[][] {
  // 方法一：暴力 + 去重
  const res: number[][] = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          res.push([nums[i], nums[j], nums[k]]);
        }
      }
    }
  }

  // 去重
  res.forEach((item) => item.sort((a, b) => a - b));
  const set = new Set();
  for (const v of res) {
    set.add(JSON.stringify(v));
  }
  // @ts-ignore
  return Array.from(set).map((v) => JSON.parse(v));
}

function threeSum2(nums: number[]): number[][] {
  // 方法二：双指针 + 哈希
  const res: number[][] = [];
  // 排序
  nums.sort((a, b) => a - b);
  // 去重
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (nums[i] + nums[l] + nums[r] === 0) {
        if (!set.has(`${nums[i]}${nums[l]}${nums[r]}`)) {
          res.push([nums[i], nums[l], nums[r]]);
          set.add(`${nums[i]}${nums[l]}${nums[r]}`);
        }
      }
      if (sum <= 0) l++;
      else r--;
    }
  }

  return res;
}

export {};
