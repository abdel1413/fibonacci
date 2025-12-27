function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

//2nd approach
function reverseString(str) {
  return str.trim().split(/\s+/).reverse().join(' ');
}    

// Example usage:
console.log(reverseString("hello")); // should return "olleh"
console.log(reverseString("JavaScript")); // should return "tpircSavaJ"
console.log(reverseString("12345")); // should return "54321"
console.log(reverseString("racecar")); // should return "racecar"
console.log(reverseString("!@#$%")); // should return "%$#@!"