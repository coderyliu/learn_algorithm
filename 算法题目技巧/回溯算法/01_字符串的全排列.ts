// 给定一个字符串，输出该字符串所有排列的可能。如输入“abc”
function allState(arr:string[]):string[]{
  const path:string[]=[]
  const result:string[]=[]
  function backTracking(n:string[],k:number,used:boolean[]){
    if(path.length===k){
      result.push(path.join(''))
      return
    }
    for(let i=0;i<k;i++){
      if(used[i]) continue
      path.push(n[i])
      used[i]=true
      backTracking(n,k,used)
      path.pop()
      used[i]=false
    }
  }
  backTracking(arr,arr.length,[])
  return result
}

console.log(allState('abc'.split('')))
console.log(allState('abcdef'.split('')))