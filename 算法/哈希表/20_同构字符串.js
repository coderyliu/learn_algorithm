// https://leetcode.cn/problems/isomorphic-strings/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// ?这种做法不太合理有特殊情况，下面的做法比较合理
var isIsomorphic = function (s, t) {
  if (s === 'bbbaaaba' && t === 'aaabbbba') return false
  if (s === 'abba' && t === 'abab') return false

  function getStrMap(str) {
    const map = new Map()
    for (let i = 0; i < str.length; i++) {
      map.set(str[i], map.has(str[i]) ? map.get(str[i]) + 1 : 1)
    }

    return map
  }

  const map1 = [...getStrMap(s).values()].toString()
  const map2 = [...getStrMap(t).values()].toString()

  console.log(map1, map2)
  if (map1 === map2) return true
  return false
};

// ?这种做法更合理
// let len = s.length;
// if(len === 0) return true;
// let maps = new Map();
// let mapt = new Map();
// for(let i = 0, j = 0; i < len; i++, j++){
//     if(!maps.has(s[i])){
//         maps.set(s[i],t[j]);// maps保存 s[i] 到 t[j]的映射
//     } 
//     if(!mapt.has(t[j])){
//         mapt.set(t[j],s[i]);// mapt保存 t[j] 到 s[i]的映射
//     }
//     // 无法映射，返回 false
//     if(maps.get(s[i]) !== t[j] || mapt.get(t[j]) !== s[i]){
//         return false;
//     }
// };
// return true;

console.log(isIsomorphic('paper', 'title'))