class LRUCache {
  capacity: number;
  map: Map<number, number>;
  constructor(capacity: number) {
    this.capacity = capacity;
    this.map = new Map();
  }

  get(key: number): number {
    if (!this.map.has(key)) return -1;
    const v = this.map.get(key) as number;
    this.map.delete(key);
    this.map.set(key, v);
    return v;
  }

  put(key: number, value: number): void {
    const size = this.map.size;
    const hasKey = this.map.has(key);
    if (this.capacity > size) {
      if (!hasKey) {
        this.map.set(key, value);
      } else {
        this.map.delete(key);
        this.map.set(key, value);
      }
    } else {
      if (!hasKey) {
        const firstKey = this.map.keys().next().value;
        this.map.delete(firstKey);
        this.map.set(key, value);
      } else {
        this.map.delete(key);
        this.map.set(key, value);
      }
    }
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

export {};
