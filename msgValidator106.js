function isValidMessage(message, validation) {
  const words = message.split(" ");

  if (words.length !== validation.length) {
    return false;
  }

  for (let i = 0; i < words.length; i++) {
    if (words[i][0].toLowerCase() !== validation[i].toLowerCase()) {
      return false;
    }
  }

  return true;
}
// Example usage:
console.log(isValidMessage("Hello world", "hw")); // true
console.log(isValidMessage("Good morning", "gm")); // true
console.log(isValidMessage("JavaScript is fun", "jf")); // false
console.log(isValidMessage("OpenAI creates AI", "ocA")); // true
console.log(isValidMessage("Daily coding challenge", "dcx")); // false