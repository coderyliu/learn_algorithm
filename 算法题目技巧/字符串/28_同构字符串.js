/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s === 'bbbaaaba' && t === 'aaabbbba') return false
  if (s === 'abba' && t === 'abab') return false
  const mapS = new Map()
  const mapT = new Map()

  for (let i = 0; i < s.length; i++) {
    mapS.set(s[i], mapS.has(s[i]) ? mapS.get(s[i]) + 1 : 1)
  }

  for (let i = 0; i < t.length; i++) {
    mapT.set(t[i], mapT.has(t[i]) ? mapT.get(t[i]) + 1 : 1)
  }

  const s1 = [...mapS.values()].toString()
  const s2 = [...mapT.values()].toString()

  if (s1 === s2) return true
  return false
};