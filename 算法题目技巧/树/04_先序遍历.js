const t =require('./03_binarytree.js')

// 递归方法
// function preOrderSearch(node,result){
//   if(!node.val) return result
//   result.push(node.val)
//   postOrderSearch(node.left,result)
//   postOrderSearch(node.right,result)
// }
// function preOrder(){
//   const result=[]
//   postOrderSearch(t.tree,result)
//   return result
// }

// 栈方法
function preOrderSearch(node){
  const stack=[node]
  while(stack.length){
    const p=stack.pop()
    console.log(p.val)
    if(p.right.val){
      stack.push(p.right)
    }
    if(p.left.val){
      stack.push(p.left)
    }
  }
}

preOrderSearch(t.tree)
