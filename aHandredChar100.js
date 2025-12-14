function aHundredChar100(str) {
  let result = '';
//   for (let i = 0; i < 100; i++) {
//     result += str;
//   }
while(result.length < 100){
    result += str;
}
  return result.slice(0, 100);
}

// Example usage:

console.log(aHundredChar100("abc")); // Outputs a string with "abc" repeated 100 times
console.log(aHundredChar100("12345")); // Outputs a string with "12345" repeated 100 times