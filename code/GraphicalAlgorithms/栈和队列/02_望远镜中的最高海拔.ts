// 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。
// 你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。
// 返回 滑动窗口中的最大值。

// ?本质：滑动窗口的最大值
// ?方法：单调队列

function maxAltitude(heights: number[], limit: number): number[] {
  // 方法一： 暴力
  // *时间复杂度：O(n * k)
  // *空间复杂度：O(1)
  // if (limit === 1) return heights;
  // const res: number[] = [];
  // let l = 0;
  // let r = limit - 1;
  // while (r < heights.length) {
  //   const max = Math.max(...heights.slice(l, r + 1));
  //   res.push(max);
  //   l++;
  //   r++;
  // }
  // return res;

  // 方法二： 双端队列 - 单调递减队列
  // *时间复杂度：O(n)
  // *空间复杂度：O(n)
  // 单调队列： 队列中的元素是单调递减的
  class Deque {
    private queue: number[];
    constructor() {
      this.queue = [];
    }

    // 入队：如果value大于队列尾部元素，则删除队列尾部元素，直到value小于队列尾部元素，再插入value
    push(val: number): void {
      let back: number | undefined = this.queue[this.queue.length - 1];
      while (back !== undefined && back < val) {
        this.queue.pop();
        back = this.queue[this.queue.length - 1];
      }
      this.queue.push(val);
    }

    // 出队：只有当队列非空，且队列头部元素等于即将出队的元素，才出队
    pop(val: number): void {
      let top: number | undefined = this.peek();
      if (top !== undefined && top === val) {
        this.queue.shift();
      }
    }

    // 队头元素
    peek(): number | undefined {
      return this.queue[0];
    }
  }

  const res: number[] = [];
  const deque: Deque = new Deque();
  let i: number = 0;
  let j: number = 0;
  while (j < limit) {
    deque.push(heights[j++]);
  }
  res.push(deque.peek()!);
  while (j < heights.length) {
    deque.push(heights[j]);
    deque.pop(heights[i]);
    res.push(deque.peek()!);
    j++;
    i++;
  }

  return res;
}

console.log(maxAltitude([1, 2, 3, 4, 5], 3));

export {};
