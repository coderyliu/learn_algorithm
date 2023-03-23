// https://leetcode.cn/problems/XagZNi/

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
// ?暴力
var asteroidCollision = function (asteroids) {
  let stack = [asteroids[0]]
  for (let i = 1; i < asteroids.length; i++) {
    if ((asteroids[i] > 0 && stack[stack.length - 1] > 0) || (asteroids[i] < 0 && stack[stack.length - 1] < 0)) {
      stack.push(asteroids[i])
      continue
    } else {
      while (stack.length) {
        if ((asteroids[i] > 0 && stack[stack.length - 1] > 0) || (asteroids[i] < 0 && stack[stack.length - 1] < 0)) {
          stack.push(asteroids[i])
          break
        }

        if (Math.abs(asteroids[i]) < stack[stack.length - 1]) {
          break
        } else if (Math.abs(asteroids[i]) > stack[stack.length - 1]) {
          stack.pop()
        } else {
          stack.pop()
          break
        }
      }
    }
  }

  return asteroids
};