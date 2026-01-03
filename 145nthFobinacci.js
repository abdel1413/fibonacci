function nthFibonacci(n) {
  if (n === 1) return 0;
  if (n === 2) return 1;

  let prev = 0;
  let curr = 1;

  for (let i = 3; i <= n; i++) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }

  return curr;
}
// Example usage:
console.log(nthFibonacci(1)); // should return 0
console.log(nthFibonacci(2)); // should return 1
console.log(nthFibonacci(3)); // should return 1
console.log(nthFibonacci(4));       
// should return 2
