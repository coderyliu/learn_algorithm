// https://leetcode.cn/problems/permutation-sequence/

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
  let str=''
  for(let i=1;i<=n;i++){
    str+=i
  }

  let res=[]
  let path=[]
  // 回溯
  function backTracking(used){
    if(path.length===n){
      res.push([...path])
    }

    for(let i=0;i<str.length;i++){
      if(used[i]) continue
      used[i]=true
      path.push(str[i])
      backTracking(used)
      used[i]=false
      path.pop()
    }
  }

  backTracking([])
  return res[k-1]
  console.log(res)
};

getPermutation(3,2)