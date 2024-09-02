// 哥德巴赫猜想
const guess = (line: number) => {
  // 1. 找出n以内的所有质数
  function isPrime(num: number): boolean {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  }

  function findPrimes(n: number): number[] {
    const primes: number[] = [];
    for (let i = 2; i <= n; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }
    return primes;
  }
  // 有序数组
  const arr = findPrimes(+line);

  // 2. 回溯
  function backTrack(state, choices, startIndex, res, target) {
    if (state.length === 2) {
      const sum = state[0] + state[1];
      if (sum % 2 === 0 && sum <= target) res.push([...state]);
      return;
    }

    for (let i = startIndex; i < choices.length; i++) {
      if (state.length === 1) {
        const n = state[0];
        if (n % 2 === 0 && choices[i] % 2 !== 0) continue;
        if (n % 2 !== 0 && choices[i] % 2 === 0) continue;
      }
      state.push(choices[i]);
      backTrack(state, choices, i, res, target);
      state.pop();
    }
  }
  const res = [];
  backTrack([], arr, 0, res, line);

  console.log(res.length);
};

export {};
