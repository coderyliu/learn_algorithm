const tree={
  val:'a',
  children:[
    {
      val:'b',
      children:[
        {
          val:'d',
          children:[]
        },
        {
          val:'e',
          children:[]
        }
      ]
    },
    {
      val:'c',
      children:[
        {
          val:'f',
          children:[]
        },
        {
          val:'g',
          children:[]
        }
      ]
    }
  ]
}

const dfs=(root)=>{
  if(!root){
    return
  }
  console.log(root.val)
  root.children.forEach(element => {
    dfs(element)
  });
}

dfs(tree)