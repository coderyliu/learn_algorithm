// https://leetcode.cn/leetbook/read/didiglobal2/e7hh2i/

function sortBall(x,y,z){
  const parr='P'.repeat(x)
  const qarr='Q'.repeat(y)
  const rarr='R'.repeat(z)

  const str=parr+qarr+rarr
  const path=[]
  const set=new Set()

  backTracking([])
  function backTracking(used){
    if(path.length===str.length){
      set.add(path.join(''))
    }
    for(let i=0;i<str.length;i++){
      if(used[i] || path[path.length-1]===str[i]) continue
      used[i]=true
      path.push(str[i])
      backTracking(used)
      used[i]=false
      path.pop()
    }
  }

  console.log(set.size)
}
sortBall(2,1,1)
sortBall(2,3,3)
