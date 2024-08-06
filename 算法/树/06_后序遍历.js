const t=require('./03_binarytree.js')

// 递归
// function postOrderSearch(node,result){
//   if(!node.val) return result
//   postOrderSearch(node.right,result)
//   postOrderSearch(node.left,result)
//   result.push(node.val)
// }

// function postOrder(){
//   const result=[]
//   postOrderSearch(t.tree,result)
//   return result
// }
// console.log(postOrder())

// 栈方法
function postOrderSearch(node){
  const stack=[node]
  const postStack=[]
  while(stack.length){
    const n=stack.pop()
    postStack.push(n)
    if(n.right.val){
      stack.push(n.right)
    }
    if(n.left.val){
      stack.push(n.left)
    }
  }
  while(postStack.length){
    const e=postStack.pop()
    console.log(e.val)
  }
}
postOrderSearch(t.tree)
