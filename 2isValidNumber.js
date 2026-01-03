function isValidNumber(str, base) {
  const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const allowed = digits.slice(0, base);

  for (const char of str.toUpperCase()) {
    if (!allowed.includes(char)) {
      return false;
    }
  }

  return true;
}
// Example usage:
console.log(isValidNumber("1010", 2)); // should return true
console.log(isValidNumber("1A3F", 16)); // should return true
