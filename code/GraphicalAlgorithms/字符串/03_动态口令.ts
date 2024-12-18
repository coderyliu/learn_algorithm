// 某公司门禁密码使用动态口令技术。初始密码为字符串 password，密码更新均遵循以下步骤：
// 设定一个正整数目标值 target
// 将 password 前 target 个字符按原顺序移动至字符串末尾,请返回更新后的密码字符串。

// 示例 1:
// 输入: password = "1234567890", target = 3
// 输出: "4567890123"

// 示例 2:
// 输入: password = "abcdefg", target = 2
// 输出: "cdefgab"

function dynamicPassword(password: string, target: number): string {
  // 方法一：利用JS - API
  return password.slice(target) + password.slice(0, target);

  // 方法二：利用数组
  // const arr = password.split('');
  // const left = arr.splice(0, target);
  // return arr.concat(left).join('');
}

export {};
