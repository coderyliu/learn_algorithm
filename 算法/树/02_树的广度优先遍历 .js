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

const bfs=(root)=>{
  const arr=[root]
  while(arr.length>0){
    const e=arr.shift()
    console.log(e.val)
    if(e.children){
      e.children.forEach(element => {
        arr.push(element)
      });
    }
  }
}

bfs(tree)