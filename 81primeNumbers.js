function nthPrime(n) {
  let count = 0;
  let num = 1;

  function isPrime(x) {
    if (x < 2) return false;
    for (let i = 2; i <= Math.sqrt(x); i++) {
      if (x % i === 0) return false;
    }
    return true;
  }

  while (count < n) {
    num++;
    if (isPrime(num)) {
      count++;
    }
  }

  return num;
}

// Example usage:
console.log(nthPrime(1));       // should return 2      
console.log(nthPrime(5));       // should return 11
console.log(nthPrime(10));      // should return 29

console.log(nthPrime(20));      // should return 71
console.log(nthPrime(50));      // should return 229
console.log(nthPrime(100));     // should return 541