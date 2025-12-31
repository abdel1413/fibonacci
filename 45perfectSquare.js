function isPerfectSquare(num) {
  if (num < 0) return false; // negative numbers can't be perfect squares

  const root = Math.sqrt(num);
  return Number.isInteger(root);
}
// Example usage:
console.log(isPerfectSquare(16)); // should return true
console.log(isPerfectSquare(14)); // should return false
console.log(isPerfectSquare(0));  // should return true
console.log(isPerfectSquare(1));  // should return true
console.log(isPerfectSquare(25)); // should return true
console.log(isPerfectSquare(26)); // should return false    