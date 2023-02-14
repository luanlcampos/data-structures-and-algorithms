// Make a ES6 map to work as a Queue, which the used keys are inserted in the back, so the least used are always on the top

class LRUCache {
  private cache: Map<number, number>;
  private capacity: number;
  constructor(capacity: number) {
    this.cache = new Map();
    this.capacity = capacity;
  }

  get(key: number): number {
    // if not found, return -1
    if (!this.cache.has(key)) return -1;

    const value = this.cache.get(key);

    this.cache.delete(key);

    this.cache.set(key, value);

    return this.cache.get(key) || -1;
  }

  put(key: number, value: number): void {
    // check if the key is inserted, if so, delete it
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }

    this.cache.set(key, value);

    // if the capacity is full, delete the least used, which should be the first in the map
    if (this.cache.size > this.capacity) {
      this.cache.delete(this.cache.keys().next().value);
    }
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
