// 待传输文件被切分成多个部分，按照原排列顺序，每部分文件编号均为一个 正整数（至少含有两个文件）。
// 传输要求为：连续文件编号总和为接收方指定数字 target 的所有文件。请返回所有符合该要求的文件传输组合列表。

// 注意，返回时需遵循以下规则：
// 每种组合按照文件编号 升序 排列；
// 不同组合按照第一个文件编号 升序 排列。

function fileCombination(target: number): number[][] {
  // 方法：滑动窗口
  const res: number[][] = [];
  if (target <= 2) return res;
  let l = 1,
    r = 2;
  let sum = 3;
  while (l < r && r <= target) {
    // 如果和等于 target，则将当前组合加入结果
    if (sum === target) {
      const temp: number[] = [];
      // 将当前组合加入结果
      for (let i = l; i <= r; i++) {
        temp.push(i);
      }
      res.push(temp);
    }
    // 如果和小于 target，则右边界右移，和增加
    if (sum < target) {
      r++;
      sum += r;
    } else {
      // 如果和大于 target，则左边界右移，和减少
      sum -= l;
      l++;
    }
  }
  return res;
}

console.log(fileCombination(12)); // [3, 4, 5]

export {};
