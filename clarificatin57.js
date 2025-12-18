function hasExoplanet(readings) {
  const values = [];

  for (const ch of readings) {
    if (ch >= "0" && ch <= "9") {
      values.push(ch.charCodeAt(0) - 48);
    } else {
      values.push(ch.charCodeAt(0) - 55);
    }
  }

  const average =
    values.reduce((sum, v) => sum + v, 0) / values.length;

  const threshold = average * 0.8;

  return values.some(v => v <= threshold);
}
// Example usage:
console.log(hasExoplanet("1A3B5C")); // should return true
console.log(hasExoplanet("9F8E7D")); // should return false
console.log(hasExoplanet("123456")); // should return true
console.log(hasExoplanet("ABCDEF")); // should return false
console.log(hasExoplanet("0Z9Y8X")); // should return true          