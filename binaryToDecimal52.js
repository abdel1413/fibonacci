function binaryToDecimal(binary) {
  let decimal = 0;
  let power = 0;

  for (let i = binary.length - 1; i >= 0; i--) {
    decimal += Number(binary[i]) * Math.pow(2, power);
    power++;
  }

  return decimal;
}
// Example usage:
console.log(binaryToDecimal("1101")); // should return 13
console.log(binaryToDecimal("101010")); // should return 42
console.log(binaryToDecimal("11111111")); // should return 255
console.log(binaryToDecimal("0001")); // should return 1
console.log(binaryToDecimal("100000")); // should return 32     
