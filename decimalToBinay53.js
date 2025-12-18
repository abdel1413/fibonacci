function decimalToBinary(n) {
  if (n === 0) return "0";

  let result = "";

  while (n > 0) {
    result = (n % 2) + result;
    n = Math.floor(n / 2);
  }

  return result;
}
// Example usage:
console.log(decimalToBinary(13)); // should return "1101"
console.log(decimalToBinary(42)); // should return "101010"
console.log(decimalToBinary(255)); // should return "11111111"
console.log(decimalToBinary(1)); // should return "1"
console.log(decimalToBinary(32)); // should return "100000" 