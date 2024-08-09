/**
 * FileName: hash_map_open_addressing.js
 * CreateTime: 2024-08-08
 * Author: coderyliu
 */
class Pair {
  constructor(key, val) {
    this.key = key;
    this.val = val;
  }
}

// 基于开放寻址的哈希表
class HashMapOpenAddressing {
  #capacity; // 哈希表的容量
  #size; // 键值对的数量
  #loadThres; // 扩容的阈值
  #extendRatio; // 扩容倍数
  #buckets; // 桶
  #TOMBSTONE; // 删除标记

  constructor() {
    this.#size = 0;
    this.#capacity = 4;
    this.#loadThres = 0.75;
    this.#extendRatio = 2;
    this.#buckets = new Array(this.#capacity).fill(null);
    this.#TOMBSTONE = new Pair(-1, -1); // 删除标记
  }

  // 哈希函数
  #hashFunc(key) {
    return key % this.#capacity;
  }

  // 负载因子
  #loadFactor() {
    return this.#size / this.#capacity;
  }

  // 查找key对应的索引
  #findBucket(key) {
    let idx = this.#hashFunc(key);
    let firstTombstone = -1;
    // 线性探测，当遇到空桶时跳出
    while (this.#buckets[idx] !== null) {
      // 若遇到key，则返回对应的索引
      if (this.#buckets[idx].key === key) {
        // 若之前遇到了删除标记，则将键值对移动至该索引处
        if (firstTombstone !== -1) {
          this.#buckets[firstTombstone] = this.#buckets[idx];
          this.#buckets[idx] = this.#TOMBSTONE;
          return this.firstTombstone; // 返回移动后的桶索引
        }

        return idx;
      }
      // 记录遇到的首个删除标记
      if (firstTombstone === -1 && this.#buckets[idx] === this.#TOMBSTONE) {
        firstTombstone = idx;
      }
      // 计算桶索引，越过尾部则返回头部
      idx = (idx + 1) & this.#capacity;
    }
    // 若key不存在，则返回首个删除标记的索引
    return firstTombstone === -1 ? idx : firstTombstone;
  }
}
