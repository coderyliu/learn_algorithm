// 解密数字
// 给定一个数字，返回所有可能的解密方法数
// 例如：12258 可以被解密为："abbeh", "aveh", "abyh", "lbeh", "lyh"，因此有 5 种解密方法

// 示例 1
// 输入: ciphertext = 12258
// 输出: 5
// 解释: 12258 可以被解密为："abbeh", "aveh", "abyh", "lbeh", "lyh"，因此有 5 种解密方法

// 示例 2
// 输入: ciphertext = 12345
// 输出: 3
// 解释: 12345 可以被解密为："abbeh", "aveh", "abyh", "lbeh", "lyh"，因此有 3 种解密方法

function crackNumber(num: number): number {
  // 方法：动态规划
  // ?原理：类似于爬楼梯
  // 第一个数字:一种翻译方法;
  // 第二个数字:两数之和在[10,25]之间,则有两种翻译方法去;
  // 第 n个数字:从第n-1个数字翻译一个数字或从第n-2个数字开始翻译两个数字;
  // 递推公式:f(n)=f(n-1)+f(n-2);

  // * 时间复杂度：O(n)
  // * 空间复杂度：O(n)
  // 动规五部曲：
  // 1. 确定dp数组以及下标的含义: dp[i] 表示翻译前 i 个数的方法数
  // 2. 确定递推公式: dp[i] = dp[i - 1] + dp[i - 2] (如果前两个数在10-25之间)
  // 3. dp数组如何初始化: dp[0] = 1, dp[1] = 1
  // 4. 确定遍历顺序: 从2开始遍历到n
  // 5. 举例推导dp数组

  const str: string = num.toString();
  const n: number = str.length;

  const dp: Array<number> = new Array(n + 1);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    const sum = Number(str[i - 2] + str[i - 1]);

    if (sum >= 10 && sum <= 25) {
      dp[i] = dp[i - 1] + dp[i - 2];
    } else {
      dp[i] = dp[i - 1];
    }
  }

  // 翻译前 n 个数的方法数
  return dp[n];
}

console.log(crackNumber(12258)); // 5
console.log(crackNumber(12345)); // 3

export {};
