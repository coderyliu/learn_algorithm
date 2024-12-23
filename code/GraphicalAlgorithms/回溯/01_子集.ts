// 现有一串神秘的密文 ciphertext，经调查，密文的特点和规则如下：
// 密文由非负整数组成
// 数字 0-25 分别对应字母 a-z
// 请根据上述规则将密文 ciphertext 解密为字母，并返回共有多少种解密结果。

function crackNumber(ciphertext: number): string[][] {
  // 方法：回溯
  // 求ciphertext一共有多少种子集- 子集(按照顺序)
  const set = ciphertext.toString().split("");
  const getSubsets = (nums: string[]): string[][] => {
    const res: string[][] = [];
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j <= nums.length; j++) {
        const str = nums.slice(i, j);
        res.push(str);
      }
    }
    return res;
  };

  // 组合结果
  const subsets = getSubsets(set);
  return subsets;
}

console.log(crackNumber(12258)); // 5

export {};
