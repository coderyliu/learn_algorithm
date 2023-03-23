// https://leetcode.cn/problems/majority-element-ii/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// ?1.哈希表：时间复杂度O(n) 空间复杂度O(n)
var majorityElement = function (nums) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1)
    } else {
      map.set(nums[i], 1)
    }
  }
  const res = []
  // console.log(map)
  const len = Math.floor(nums.length / 3)
  for (const item of map) {
    if (item[1] > len) {
      res.push(item[0])
    }
  }

  return res
};

// ?2.摩尔投票法:时间复杂度O(n),空间复杂度O(1)
var majorityElement = function (nums) {
  let a, b, i = 0,
    j = 0;
  for (let k = 0; k < nums.length; k++) {
    if (nums[k] === a) i++;
    else if (nums[k] === b) j++;
    else if (!i) {
      a = nums[k];
      i = 1;
    } else if (!j) {
      b = nums[k];
      j = 1;
    } else {
      i--;
      j--;
    }
  }
  const res = [];
  i = 0, j = 0;
  nums.forEach(num => {
    if (num === a) i++;
    if (num === b) j++;
  })
  if (i > nums.length / 3) res.push(a);
  if (j > nums.length / 3) res.push(b);
  return res;
};
console.log(majorityElement([3, 1, 3]))
console.log(majorityElement([1, 2]))
console.log(majorityElement([1]))
// 有一个对摩尔投票法非常形象的比喻： 多方混战。
// 首先要知道， 在任何数组中， 出现次数大于该数组长度1 / 3 的值最多只有两个。
// 我们把这道题比作一场多方混战， 战斗结果一定只有最多两个阵营幸存， 其他阵营被歼灭。 数组中的数字即代表某士兵所在的阵营。
// 我们维护两个潜在幸存阵营A和B。 我们遍历数组， 如果遇到了属于A或者属于B的士兵， 则把士兵加入A或B队伍中， 该队伍人数加一。 继续遍历。
// 如果遇到了一个士兵既不属于A阵营， 也不属于B阵营， 这时有两种情况：
// A阵营和B阵营都还有活着的士兵， 那么进行一次厮杀， 参与厮杀的三个士兵全部阵亡：A阵营的一个士兵阵亡， B阵营的一个士兵阵亡， 这个不知道从哪个阵营来的士兵也阵亡。 继续遍历。
// A阵营或B阵营已经没有士兵了。 这个阵营暂时从地球上消失了。 
// 那么把当前遍历到的新士兵算作新的潜在幸存阵营， 这个新阵营只有他一个人。 继续遍历。
// 大战结束， 最后A和B阵营就是初始人数最多的阵营。 判断一下A， B的人数是否超过所有人数的三分之一就行了。