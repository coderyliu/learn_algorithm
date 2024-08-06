// https://leetcode.cn/problems/remove-duplicate-node-lcci/
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeDuplicateNodes = function (head) {
  let curr=head
  let prev=null
  const map=new Map()
  while(curr){
    if(!map.has(curr.val)){
      map.set(curr.val,true)
      prev=curr
    }else{
      prev.next=curr.next
    }
    curr=curr.next
  }
  return head
};