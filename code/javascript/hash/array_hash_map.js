/**
 * FileName: array_hash_map.js
 * CreateTime: 2024-08-08
 * Author: coderyliu
 */

class Pair {
  constructor(key, val) {
    this.key = key;
    this.val = val;
  }
}

// 基于数组实现的哈希表
class ArrayHashMap {
  #buckets;

  constructor() {
    // 初始化100个桶
    this.#buckets = new Array(100).fill(null);
  }

  // 哈希函数
  #hashFunc(key) {
    return key % 100;
  }

  // 查询操作
  get(key) {
    const idx = this.#hashFunc(key);
    return this.#buckets[idx]?.key === key ? this.#buckets[idx].val : null;
  }

  // 添加操作
  set(key, val) {
    const idx = this.#hashFunc(key);
    this.#buckets[idx] = new Pair(key, val);
  }

  // 删除操作
  delete(key) {
    const idx = this.#hashFunc(key);
    const pair = this.#buckets[idx];
    if (pair) this.#buckets.splice(idx, 1);
  }

  // 获取所有键
  keys() {
    return this.#buckets.map((pair) => pair && pair["key"]);
  }

  // 获取所有值
  values() {
    return this.#buckets.map((pair) => pair && pair["val"]);
  }

  // 获取所有键值对
  entries() {
    return this.#buckets.map((pair) => {
      if (pair) return [pair["key"], pair["val"]]
    })
  }

  // 打印
  print() {
    console.log(this.#buckets);
  }
}

/* Driver Code */
/* 初始化哈希表 */
const map = new ArrayHashMap();
/* 添加操作 */
// 在哈希表中添加键值对 (key, value)
map.set(12836, "小哈");
map.set(15937, "小啰");
map.set(16750, "小算");
map.set(13276, "小法");
map.set(10583, "小鸭");
console.info("\n添加完成后，哈希表为\nKey -> Value");
map.print();

/* 查询操作 */
// 向哈希表中输入键 key ，得到值 value
let name = map.get(15937);
console.info("\n输入学号 15937 ，查询到姓名 " + name);

/* 删除操作 */
// 在哈希表中删除键值对 (key, value)
map.delete(10583);
console.info("\n删除 10583 后，哈希表为\nKey -> Value");
map.print();

/* 遍历哈希表 */
console.info("\n遍历键值对 Key->Value");
console.log(map.entries());

console.info("\n单独遍历键 Key");
console.log(map.keys());

console.info("\n单独遍历值 Value");
console.log(map.values());
