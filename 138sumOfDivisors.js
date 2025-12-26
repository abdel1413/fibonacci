function sumDivisors(n) {
  let sum = 0;

  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      sum += i;
      if (i !== n / i) {
        sum += n / i;
      }
    }
  }

  return sum;
}
// Example usage:
console.log(sumDivisors(6));   // should return 12 (1 + 2 + 3 + 6)
console.log(sumDivisors(12));  // should return 28 (1 + 2 + 3 + 4 + 6 + 12)
console.log(sumDivisors(15));  // should return 24 (1 + 3 + 5 + 15)
console.log(sumDivisors(28));  // should return 56 (1 + 2 + 4 + 7 + 14 + 28)
console.log(sumDivisors(1));   // should return 1 (1)