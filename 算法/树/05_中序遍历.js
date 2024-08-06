const t =require('./03_binarytree.js')

// 递归
// function inOrderSearch(node,result){
//   if(!node.val) return result
//   inOrderSearch(node.left,result)
//   result.push(node.val)
//   inOrderSearch(node.right,result)
// }

// function inOrder(){
//   const result=[]
//   inOrderSearch(t.tree,result)
//   return result
// }
// console.log(inOrder())

// 栈方法
function inOrderSearch(node){
  const stack=[]
  let p=node
  while(stack.length||p.val){
    while(p.val){
      stack.push(p)
      p=p.left
    }
    const e=stack.pop()
    console.log(e.val)
    p=e.right
  }

}
inOrderSearch(t.tree)