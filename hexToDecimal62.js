function hexToDecimal(hex) {
  let decimal = 0;
  let power = 0;

  for (let i = hex.length - 1; i >= 0; i--) {
    const char = hex[i];
    let value;

    if (char >= "0" && char <= "9") {
      value = char.charCodeAt(0) - 48;
    } else {
      value = char.charCodeAt(0) - 55; // A = 10
    }

    decimal += value * Math.pow(16, power);
    power++;
  }

  return decimal;
}
// Example usage:
console.log(hexToDecimal("1A3F")); // should return 6719
console.log(hexToDecimal("FF"));   // should return 255
console.log(hexToDecimal("0"));    // should return 0
console.log(hexToDecimal("ABC"));  // should return 2748
console.log(hexToDecimal("1234")); // should return 4660            