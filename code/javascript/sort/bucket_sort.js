// 桶排序
// 原理：
// 1.初始化 k 个桶，将数据平均分配到 k 个桶中
// 2. 对每个桶执行排序
// 3. 将排序好的桶合并

// ?桶排序的重点是如何将数据平均分配到各个桶中：为实现平均分配，我们可以先设定一条大致的分界线，将数据粗略地分到 3 个桶中。分配完毕后，再将数据较多的桶继续划分为 3 个桶，直至所有桶中的元素数量大致相等。

function bucketSort(nums) {
  // 初始化 k = n / 2 个桶
  const k = Math.floor(nums.length / 2);
  const buckets = [];
  for (let i = 0; i < k; i++) {
    buckets[i] = [];
  }
  // 1. 将数组平均分配到各个桶中
  for (const num of nums) {
    // 输入的数据范围为 [0， 1）,使用 num * k 获取桶的索引
    const i = Math.floor(num * k);
    buckets[i].push(num);
  }

  // 2. 对各个桶执行排序
  for (const bucket of buckets) {
    bucket.sort((a, b) => a - b);
  }

  // 3. 遍历桶合并结果
  let i = 0;
  for (const bucket of buckets) {
    for (const num of bucket) {
      nums[i++] = num;
    }
  }
}
