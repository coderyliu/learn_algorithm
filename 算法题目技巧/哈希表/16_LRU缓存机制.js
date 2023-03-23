// https://leetcode.cn/problems/lru-cache/
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.maxSize = capacity
  this.map = new Map()
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const map = this.map
  if (map.has(key)) {
    const value = map.get(key)
    map.delete(key)
    map.set(key, value)
  } else {
    return -1
  }

  return map.get(key)
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  const map = this.map
  if (map.has(key)) {
    map.delete(key)
    map.set(key, value)
  } else {
    map.set(key, value)
  }

  if (this.maxSize < map.size) {
    map.delete([...map.keys()][0])
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */