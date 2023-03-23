// https://leetcode.cn/problems/sfvd7V/
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// ?1.将数组中的字符串，顺序改变
var groupAnagrams = function (strs) {
  let arr = strs.map(str => str.split('').sort((a, b) => a.charCodeAt(0)- b.charCodeAt(0)).join(''))

  const map=new Map()
  const res=[]
  for(let i=0;i<arr.length;i++){
    map.set(arr[i],map.has(arr[i])?map.get(arr[i])+i+',':i+',')
  }
  // console.log(map)
  for(const item of map){
    const ret=[]
    const arr=item[1].split(',')

    for(let i=0;i<arr.length-1;i++){
      ret.push(strs[Number(arr[i])])
    }

    res.push(ret)
  }

  return res
};

// groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
groupAnagrams(["eat","tea","tan","ate","nat","bat","ac","bd","aac","bbd","aacc","bbdd","acc","bdd"])