// https://leetcode.cn/problems/sliding-window-maximum/description/

function maxSlidingWindow(nums: number[], k: number): number[] {
  // ?方法一： 暴力解法 - 超时
  // if (k === 1) return nums;
  // let l = 0;
  // let r = k - 1;
  // const res: number[] = [];
  // while (r < nums.length) {
  //   const max = Math.max(...nums.slice(l, r + 1));
  //   res.push(max);
  //   l++;
  //   r++;
  // }

  // return res;

  // ?方法二：双端队列 - 单调递减队列
  class Deque {
    private queue: number[];
    constructor() {
      this.queue = [];
    }

    // 入队：如果value大于队列尾部元素，则删除队列尾部元素，直到value小于队列尾部元素，再插入value
    push(value: number): void {
      let back: number | undefined = this.queue[this.queue.length - 1];
      while (back !== undefined && back < value) {
        this.queue.pop();
        back = this.queue[this.queue.length - 1];
      }
      this.queue.push(value);
    }

    // 出队: 只有当队列非空，且队列头部元素等于即将出队的元素，才出队
    pop(value: number): void {
      let top: number | undefined = this.peek();
      if (top !== undefined && top === value) {
        this.queue.shift();
      }
    }

    // 队头元素
    peek(): number | undefined {
      return this.queue[0];
    }
  }

  const deque: Deque = new Deque();
  let i: number = 0;
  let j: number = 0;
  let resArr: number[] = [];
  while (j < k) {
    deque.push(nums[j++]);
  }

  resArr.push(deque.peek()!);
  while (j < nums.length) {
    deque.push(nums[j]);
    deque.pop(nums[i]);
    resArr.push(deque.peek()!);
    j++;
    i++;
  }

  return resArr;
}

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
console.log(maxSlidingWindow([1], 1));

export {};
