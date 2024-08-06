// https://leetcode.cn/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// ?1.暴力
var maxSlidingWindow = function (nums, k) {
  if (!nums.length) return []
  let l = 0
  let r = l + k - 1
  let res = []
  while (r < nums.length) {
    let arr = nums.slice(l, r + 1)
    let max = Math.max(...arr)
    res.push(max)
    l++
    r = l + k - 1
  }
  return res
};

// ?2.优先级队列
var maxSlidingWindow = function (nums, k) {
  class MonoQueue {
    constructor() {
      this.queue = []
    }
    enqueue(value) {
      let back = this.queue[this.queue.length - 1]
      while (back !== undefined && back < value) {
        this.queue.pop()
        back = this.queue[this.queue.length - 1]
      }
      this.queue.push(value)
    }
    dequeue(value) {
      let front = this.front()
      if (front === value) {
        this.queue.shift()
      }
    }
    front() {
      return this.queue[0]
    }
  }
  let queue = new MonoQueue()
  let i = 0,
    j = 0
  let res = []
  while (j < k) {
    queue.enqueue(nums[j++])
  }
  res.push(queue.front())
  while (j < nums.length) {
    queue.enqueue(nums[j])
    queue.dequeue(nums[i])
    res.push(queue.front())
    i++
    j++
  }
  return res
}
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))