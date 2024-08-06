// https://leetcode-cn.com/problems/palindrome-linked-list/
// 思路一:遍历链表，添加到数组中判断链表是否回文
// var isPalindrome = function (head) {
//   let curr = head
//   const res = []
//   while (curr) {
//     res.push(curr.val)
//     curr = curr.next
//   }
//   let end = res.length - 1
//   for (let i = 0; i <= end; i++) {
//     if (res[i] !== res[end]) {
//       return false
//     }
//     end--
//   }
//   return true
// };

// 思路2：后序遍历
var isPalindrome = function(head) {
  let left=head
  function traverse(right){
    if(right===null) return true
    let res=traverse(right.next)
    res=res&&(right.val===left.val)
    left=left.next
    return res
  }

  return traverse(head)
};