function allUniqueChars(str) {
  const charSet = new Set();

  for (const char of str) {
    if (charSet.has(char)) {
      return false;
    }
    charSet.add(char);
  }

  return true;
}
// Example usage:
console.log(allUniqueChars("abcdef")); // should return true
console.log(allUniqueChars("hello"));  // should return false
console.log(allUniqueChars("12345"));  // should return true
console.log(allUniqueChars("112233")); // should return false
console.log(allUniqueChars("!@#$%^&*()")); // should return true