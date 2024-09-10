class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  // 方法一：将链表转成数组相加，再转化为链表
  // 将链表转化为数组
  const listToArr = (l: ListNode | null): number[] => {
    const arr: number[] = [];
    let cur = l;
    while (cur) {
      arr.push(cur.val);
      cur = cur.next;
    }
    return arr;
  };

  const arr1 = listToArr(l1).reverse();
  const arr2 = listToArr(l2).reverse();

  // 进行加法运算 - 这块要进行大数相加（不能直接相加 - 超出精度）
  const sum = BigInt(arr1.join("")) + BigInt(arr2.join(""));
  const newArr = (sum + "").split("").map((num) => Number(num)).reverse();

  // 数组转化为链表
  const arrToList = (arr: number[]): ListNode | null => {
    if (!arr.length) return null;
    let head = new ListNode(arr[0]);
    let cur = head;
    for (let i = 1; i < arr.length; i++) {
      cur.next = new ListNode(arr[i]);
      cur = cur.next;
    }

    return head
  };

  return arrToList(newArr);
}

export {};
