// https://leetcode.cn/problems/validate-ip-address/description/

function validIPAddress(queryIP: string): string {
  // 暴力判断
  // IPV4判断
  if (queryIP.includes(".")) {
    const ipArr = queryIP.split(".");
    if (ipArr.length !== 4) return "Neither";
    for (const item of ipArr) {
      if (item.length > 3 || item.length === 0) return "Neither";
      if (item.length > 1 && item[0] === "0") return "Neither";
      if (Number(item) > 255 || Number(item) < 0) return "Neither";
      if (!/^\d+$/.test(item)) return "Neither";
    }

    return "IPv4";
  }
  // IPv6判断
  if (queryIP.includes(":")) {
    const ipArr = queryIP.split(":");
    if (ipArr.length !== 8) return "Neither";
    for (const item of ipArr) {
      if (item.length > 4 || item.length === 0) return "Neither";
      if (!/^[0-9a-fA-F]+$/.test(item)) return "Neither";
    }
    return "IPv6";
  }
  return "Neither";
}

console.log(validIPAddress("172.16.254.1"));
console.log(validIPAddress("2001:0db8:85a3:0:0:8A2E:0370:7334"));
console.log(validIPAddress("256.256.256.256"));

export {};
