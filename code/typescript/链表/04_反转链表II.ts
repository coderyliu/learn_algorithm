class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  // 方法一：将链表转为数组后反转再转换为链表
  // const listToArr = (head: ListNode | null) => {
  //   const arr: number[] = [];
  //   let cur = head;
  //   while (cur) {
  //     arr.push(cur.val);
  //     cur = cur.next;
  //   }
  //   return arr;
  // };

  // const arr = listToArr(head);
  // !left, right指的是链表节点的索引
  // const startIndex = arr.findIndex((item) => item === left);
  // const endIndex = arr.findIndex((item) => item === right);
  // const newArr = [
  //   ...arr.slice(0, left - 1),
  //   ...arr.slice(left - 1, right - 1 + 1).reverse(),
  //   ...arr.slice(right - 1 + 1)
  // ];

  // const arrToList = (arr: number[]): ListNode | null => {
  //   if (!arr.length) return null;
  //   const head = new ListNode(arr[0]);
  //   let cur = head;
  //   for (let i = 1; i < arr.length; i++) {
  //     const list = new ListNode(arr[i]);
  //     cur.next = list;
  //     cur = list;
  //   }

  //   return head;
  // };
  // return arrToList(newArr);

  // 方法二： 双指针
  // TODO
}

export {};
