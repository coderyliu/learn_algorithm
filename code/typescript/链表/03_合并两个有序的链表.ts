class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  // 方法一：将链表转为数组排序之后再转为链表
  // const listToArr = (l: ListNode | null): number[] => {
  //   const arr: number[] = [];
  //   let cur = l;
  //   while (cur) {
  //     arr.push(cur.val);
  //     cur = cur.next;
  //   }
  //   return arr;
  // };

  // const l1 = listToArr(list1);
  // const l2 = listToArr(list2);
  // const l3 = [...l1, ...l2].sort((a, b) => a - b);

  // const arrToList = (arr: number[]): ListNode | null => {
  //   if (!arr.length) return null;
  //   let head = new ListNode(arr[0]);
  //   let cur = head;
  //   arr.shift()
  //   for (const val of arr) {
  //     const node = new ListNode(val);
  //     cur.next = node;
  //     cur = cur.next;
  //   }

  //   return head;
  // };

  // return arrToList(l3);

  // 方式二：递归 + 有序
  if (!list1) return list2;
  if (!list2) return list1;
  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
}

export {};
