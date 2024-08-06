// https://leetcode.cn/problems/bulls-and-cows/
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
// ?暴力
var getHint = function (secret, guess) {
  let count = 0
  let res = 0

  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      count++
      secret = secret.slice(0, i) + secret.slice(i + 1)
      guess = guess.slice(0, i) + guess.slice(i + 1)
      i--
    }
  }

  for (let i = 0; i < secret.length; i++) {
    if (secret[i] !== guess[i]) {
      if (secret.includes(guess[i])) {
        const index = secret.indexOf(guess[i])
        secret = secret.slice(0, index) + 'e' + secret.slice(index + 1)
        res++
      }
    }
  }
  return `${count}A${res}B`
};