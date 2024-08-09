/**
 * Filename: array_hash_chain.js
 * CreateTime: 2024-08-08
 * Author: coderyliu
 */

class Pair {
  constructor(key, val) {
    this.key = key;
    this.val = val;
  }
}

// 哈希冲突 - 链式地址法
class HashMapChaining {
  #capacity; // 哈希表容量
  #size; // 键值容量
  #buckets; // 桶
  #loadThres; // 出发扩容的阈值
  #extendRatio; // 扩容倍数

  constructor() {
    this.#extendRatio = 2;
    this.#loadThres = 0.75;
    this.#capacity = 4;
    this.#size = 0;
    this.#buckets = new Array(this.#capacity).fill(null).map(() => []);
  }

  // 哈希函数
  #hashFunc(key) {
    return key % this.#capacity;
  }

  // 负载因子
  #loadFactor() {
    return this.#size / this.#capacity;
  }

  // 扩容哈希表
  #extend() {
    // 暂存原哈希表
    const bucketsTemp = this.#buckets;
    // 初始化扩容后的新哈希表
    this.#capacity *= this.#extendRatio;
    this.#buckets = new Array(this.#capacity).fill(null).map(() => []);
    this.#size = 0;
    // 将键值对从原哈希表搬运至新哈希表
    for (const bucket of bucketsTemp) {
      for (const pair of bucket) {
        this.put(pair["key"], pair["val"]);
      }
    }
  }

  // 添加操作
  put(key, val) {
    if (this.#loadFactor() > this.#loadThres) this.#extend();
    const idx = this.#hashFunc(key);
    const bucket = this.#buckets[idx];
    // 遍历桶，若遇到相同key,更新对应的val
    for (const pair of bucket) {
      if (pair["key"] === key) {
        pair["val"] = val;
        return;
      }
    }
    // 若没有该key,则将其添加至尾部
    bucket.push(new Pair(key, val));
    this.#size++;
  }

  // 查询操作
  get(key) {
    const idx = this.#hashFunc(key);
    const bucket = this.#buckets[idx];
    for (const pair of bucket) {
      if (pair["key"] === key) {
        return pair["val"];
      }
    }

    return null;
  }

  // 删除操作
  remove(key) {
    const idx = this.#hashFunc(key);
    const bucket = this.#buckets[idx];
    for (let i = 0; i < bucket.length; i++) {
      const pair = bucket[i];
      if (pair["key"] === key) {
        bucket.splice(i, 1);
        this.#size--;
        return;
      }
    }
  }

  // 打印哈希表
  print() {
    console.log(this.#buckets);
  }
}

/* Driver Code */
/* 初始化哈希表 */
const map = new HashMapChaining();

/* 添加操作 */
// 在哈希表中添加键值对 (key, value)
map.put(12836, "小哈");
map.put(15937, "小啰");
map.put(16750, "小算");
map.put(13276, "小法");
map.put(10583, "小鸭");
console.log("\n添加完成后，哈希表为\nKey -> Value");
map.print();

/* 查询操作 */
// 向哈希表中输入键 key ，得到值 value
const name = map.get(13276);
console.log("\n输入学号 13276 ，查询到姓名 " + name);

/* 删除操作 */
// 在哈希表中删除键值对 (key, value)
map.remove(12836);
console.log("\n删除 12836 后，哈希表为\nKey -> Value");
map.print();
